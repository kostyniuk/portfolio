let audioContext: AudioContext | null = null;
const bufferCache = new Map<string, AudioBuffer>();
const unlockListeners = new Set<() => void>();

export function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

/**
 * Must be called from a user gesture handler (click/tap/keydown).
 * Firefox requires AudioContext to be *created* inside a gesture —
 * resume() alone won't unlock a context created on mount.
 * This closes the tainted context, creates a fresh one inside the
 * gesture, and notifies useSound instances to re-decode their buffers.
 */
export function unlockAudioContext(): void {
  if (!audioContext) {
    audioContext = new AudioContext();
    return;
  }

  if (audioContext.state === "suspended") {
    audioContext.close().catch(() => {});
    audioContext = new AudioContext();
    bufferCache.clear();
    unlockListeners.forEach((fn) => fn());
  }
}

export function onAudioContextUnlock(fn: () => void): () => void {
  unlockListeners.add(fn);
  return () => {
    unlockListeners.delete(fn);
  };
}

export async function decodeAudioData(dataUri: string): Promise<AudioBuffer> {
  const cached = bufferCache.get(dataUri);
  if (cached) return cached;

  const ctx = getAudioContext();
  const base64 = dataUri.split(",")[1];
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const audioBuffer = await ctx.decodeAudioData(bytes.buffer.slice(0));
  bufferCache.set(dataUri, audioBuffer);
  return audioBuffer;
}

export interface PlaySoundOptions {
  volume?: number;
  playbackRate?: number;
  onEnd?: () => void;
}

export interface SoundPlayback {
  stop: () => void;
}

export async function playSound(
  dataUri: string,
  options: PlaySoundOptions = {}
): Promise<SoundPlayback> {
  const { volume = 1, playbackRate = 1, onEnd } = options;
  const ctx = getAudioContext();
  if (ctx.state === "suspended") {
    await ctx.resume();
  }

  const buffer = await decodeAudioData(dataUri);
  const source = ctx.createBufferSource();
  const gain = ctx.createGain();

  source.buffer = buffer;
  source.playbackRate.value = playbackRate;
  gain.gain.value = volume;

  source.connect(gain);
  gain.connect(ctx.destination);

  source.onended = () => {
    onEnd?.();
  };

  source.start(0);

  return {
    stop: () => {
      try {
        source.stop();
      } catch {
        // No-op if already stopped.
      }
    },
  };
}
