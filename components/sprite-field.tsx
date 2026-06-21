"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

export type SpriteFieldProps = {
  /** URL of the image drawn as each sprite; any SVG or raster image works. */
  src: string;
  /** Drawn sprite size in px. Independent of spacing, so no "gap hack" is needed. */
  size?: number;
  /** Higher means tighter spacing and more sprites. */
  density?: number;
  speed?: number;
  background?: string;
  /** Optional tints; sprites are colored by cycling these. Omit for monochrome. */
  tints?: string[];
  pushRadius?: number;
  pushForce?: number;
  className?: string;
  style?: CSSProperties;
};

type Sprite = { x: number; y: number; vx: number; vy: number; t: number };

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const expDamp = (v: number, rate: number, dt: number) => v * Math.exp(-rate * dt);

/**
 * Renders any image as an ambient field of sprites on a canvas: they drift
 * forever (function of time) AND spring away from the pointer with momentum
 * (integration of state). Asset-agnostic: pass any `src`.
 *
 * Note the position/size decoupling: spacing comes from `density`, sprite size
 * from `size`. They're independent, so the gap between sprites is automatic.
 */
export function SpriteField({
  src,
  size = 22,
  density = 1,
  speed = 1,
  background = "#0a0a0b",
  tints,
  pushRadius = 150,
  pushForce = 3000,
  className,
  style,
}: SpriteFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // NOTE: pass a stable `tints` reference (define it outside render or memoize it).
  // An inline array changes identity every render and would re-init the canvas.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0;
    let sprites: Sprite[] = [];
    let grid = { pad: 0, spanX: 0, spanY: 0 };
    const mouse = { x: 0, y: 0, active: false, init: false };
    const DRIFT_X = 18,
      DRIFT_Y = 11;

    // Build the sprite(s) off-screen, crisp via supersampling and soft glow.
    const SPRITE = 96,
      SS = 4;
    const palette = tints && tints.length ? tints : [null];
    let bank: HTMLCanvasElement[] = [];
    let ready = false;

    const makeSprite = (img: HTMLImageElement, tint: string | null) => {
      const cnv = document.createElement("canvas");
      cnv.width = cnv.height = SPRITE * SS;
      const x = cnv.getContext("2d")!;
      x.scale(SS, SS);
      const pad = SPRITE * 0.1;
      const ratio = img.width && img.height ? img.width / img.height : 1;
      let dw = SPRITE - pad * 2,
        dh = dw / ratio;
      if (dh > SPRITE - pad * 2) {
        dh = SPRITE - pad * 2;
        dw = dh * ratio;
      }
      const dx = (SPRITE - dw) / 2,
        dy = (SPRITE - dh) / 2;
      x.save();
      x.shadowColor = "rgba(150,180,255,0.5)";
      x.shadowBlur = 5;
      x.drawImage(img, dx, dy, dw, dh);
      x.restore();
      x.drawImage(img, dx, dy, dw, dh);
      if (tint) {
        x.globalCompositeOperation = "multiply";
        x.fillStyle = tint;
        x.fillRect(0, 0, SPRITE, SPRITE);
        x.globalCompositeOperation = "destination-in";
        x.drawImage(img, dx, dy, dw, dh);
        x.globalCompositeOperation = "source-over";
      }
      return cnv;
    };

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      bank = palette.map((t) => makeSprite(img, t));
      ready = true;
    };
    img.src = src;

    // Lay sprites on a lattice whose period evenly divides the wrap span.
    const layout = () => {
      const gp = clamp(98 / Math.sqrt(Math.max(density, 0.05)), 56, 160);
      const spanX = W + gp * 2,
        spanY = H + gp * 2;
      const cols = Math.max(2, Math.round(spanX / gp));
      const rows = Math.max(2, Math.round(spanY / gp));
      const sx = spanX / cols,
        sy = spanY / rows;
      grid = { pad: gp, spanX, spanY };
      sprites = [];
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          sprites.push({
            x: -gp + c * sx,
            y: -gp + r * sy,
            vx: 0,
            vy: 0,
            t: Math.floor(Math.random() * palette.length),
          });
    };

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      W = r.width || window.innerWidth;
      H = r.height || window.innerHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!mouse.init) {
        mouse.x = W / 2;
        mouse.y = H / 2;
        mouse.init = true;
      }
      layout();
    };

    const update = (dt: number) => {
      const edt = Math.min(dt * clamp(speed, 0.05, 4), 0.06);
      const pad = grid.pad,
        dx = DRIFT_X * edt,
        dy = DRIFT_Y * edt;
      const R = pushRadius;
      for (const c of sprites) {
        if (mouse.active) {
          const ddx = c.x - mouse.x,
            ddy = c.y - mouse.y,
            dist = Math.hypot(ddx, ddy);
          if (dist < R) {
            const f = 1 - dist / R,
              push = f * f * pushForce,
              inv = 1 / (dist + 0.01);
            c.vx += ddx * inv * push * edt;
            c.vy += ddy * inv * push * edt;
          }
        }
        c.vx = expDamp(c.vx, 3.2, edt);
        c.vy = expDamp(c.vy, 3.2, edt);
        c.x += dx + c.vx * edt;
        c.y += dy + c.vy * edt;
        if (c.x > W + pad) c.x -= grid.spanX;
        if (c.x < -pad) c.x += grid.spanX;
        if (c.y > H + pad) c.y -= grid.spanY;
        if (c.y < -pad) c.y += grid.spanY;
      }
    };

    const draw = () => {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, W, H);
      if (!ready) return;
      for (const c of sprites) {
        const spr = bank[c.t % bank.length];
        const tilt = clamp(c.vx * 0.0011, -0.3, 0.3);
        ctx.save();
        ctx.translate(c.x, c.y);
        if (tilt) ctx.rotate(tilt);
        ctx.drawImage(spr, 0, 0, spr.width, spr.height, -size / 2, -size / 2, size, size);
        ctx.restore();
      }
    };

    let raf = 0;
    let last = performance.now();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = performance.now();
      let dt = (now - last) / 1000;
      last = now;
      if (dt > 0.05) dt = 0.05;
      update(dt);
      draw();
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    const ro = new ResizeObserver(() => fit());
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("blur", onLeave);

    fit();
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", onLeave);
    };
  }, [src, size, density, speed, background, pushRadius, pushForce, tints]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ position: "absolute", inset: 0, display: "block", width: "100%", height: "100%", ...style }}
    />
  );
}
