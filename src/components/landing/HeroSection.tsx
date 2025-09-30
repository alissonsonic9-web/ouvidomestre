import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section id="hero" className="relative w-full">
      {/* Desktop View */}
      <div className="hidden md:block relative w-full h-[80vh] bg-primary/40">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/40" />
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
            Toque qualquer música sem depender de cifra
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Aprenda a tocar de ouvido e liberte sua criatividade musical. O método completo para você dominar seu instrumento e tocar qualquer canção.
          </p>
          <div className="mt-10">
            <a href="#pricing">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold h-14 px-10 shadow-lg"
              >
                QUERO APRENDER AGORA!
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full">
        <Image
          src="https://i.ibb.co/Ncvt6sH/hero-mobile.png"
          alt="Ouvido Mestre - Toque qualquer música sem depender de cifra"
          width={1080}
          height={1920}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
