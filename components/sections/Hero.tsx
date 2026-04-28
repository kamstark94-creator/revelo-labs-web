import Link from "next/link";
import { ProductIllustration } from "@/components/brand/ProductIllustration";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { MotionReveal, MotionRevealItem } from "@/components/ui/MotionReveal";
import { copy } from "@/content/copy";
import { experiments } from "@/content/experiments";

export function Hero() {
  const experiment = experiments[0];
  const defaultColorway = experiment.colorways[0];

  return (
    <section id="hero" className="overflow-hidden pt-[64px] md:pt-[120px]">
      <MotionReveal className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 pb-[64px] md:hidden">
        <MotionRevealItem>
          <MonoLabel accent>{copy.hero.kicker}</MonoLabel>
        </MotionRevealItem>
        <MotionRevealItem>
          <ProductIllustration size="hero" colorway={defaultColorway} imageSrc={experiment.images.hero} alt={experiment.name} />
        </MotionRevealItem>
        <MotionRevealItem>
          <h1 className="font-display text-[44px] uppercase leading-[0.92] tracking-[0.02em] text-ink">
            {copy.hero.headline}
          </h1>
        </MotionRevealItem>
        <MotionRevealItem>
          <p className="max-w-[480px] text-[17px] leading-[1.6] text-body">
            {copy.hero.sub}
          </p>
        </MotionRevealItem>
        <MotionRevealItem>
          <div className="flex flex-col gap-4">
            <Link href={copy.hero.ctaPrimary.href}>
              <Button className="w-full" variant="primary" size="lg">
                {copy.hero.ctaPrimary.label}
              </Button>
            </Link>
            <Link href={copy.hero.ctaSecondary.href}>
              <Button className="w-full" variant="secondary" size="lg">
                {copy.hero.ctaSecondary.label}
              </Button>
            </Link>
          </div>
        </MotionRevealItem>
      </MotionReveal>

      <MotionReveal className="mx-auto hidden max-w-[1280px] gap-12 px-6 pb-[48px] md:grid md:px-12 md:pb-[64px] lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-16 lg:px-16">
        <div className="order-1">
          <MotionRevealItem>
            <MonoLabel accent>{copy.hero.kicker}</MonoLabel>
          </MotionRevealItem>
          <MotionRevealItem>
            <h1 className="mt-8 font-display text-[56px] uppercase leading-[0.92] tracking-[0.02em] text-ink md:text-[96px] lg:text-[120px]">
              {copy.hero.headline}
            </h1>
          </MotionRevealItem>
          <MotionRevealItem>
            <p className="mt-8 max-w-[480px] text-[17px] leading-[1.6] text-body md:text-[18px]">
              {copy.hero.sub}
            </p>
          </MotionRevealItem>
          <MotionRevealItem>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link href={copy.hero.ctaPrimary.href}>
                <Button className="w-full sm:w-auto" variant="primary" size="lg">
                  {copy.hero.ctaPrimary.label}
                </Button>
              </Link>
              <Link href={copy.hero.ctaSecondary.href}>
                <Button className="w-full sm:w-auto" variant="secondary" size="lg">
                  {copy.hero.ctaSecondary.label}
                </Button>
              </Link>
            </div>
          </MotionRevealItem>
        </div>

        <MotionRevealItem className="order-2">
          <ProductIllustration size="hero" colorway={defaultColorway} imageSrc={experiment.images.hero} alt={experiment.name} />
        </MotionRevealItem>
      </MotionReveal>

      <Marquee text={copy.hero.marquee} />
    </section>
  );
}
