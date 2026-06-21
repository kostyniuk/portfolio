import { SpriteField } from "@/components/sprite-field";

export function LovableSpriteSection() {
  return (
    <section className="relative h-dvh snap-start overflow-hidden bg-black">
      <SpriteField
        src="/lovable/lovable-logo-icon.svg"
        size={42}
        density={0.85}
        speed={0.2}
        background="#000000"
        pushRadius={170}
        pushForce={5000}
      />
    </section>
  );
}
