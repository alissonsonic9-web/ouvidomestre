import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');
  const ebookImage = PlaceHolderImages.find((img) => img.id === 'ebook-cover');

  return (
    <section id="hero" className="relative w-full bg-primary/40">
      {/* Desktop View */}
      <div className="hidden md:block relative w-full h-[80vh]">
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
      <div className="md:hidden flex flex-col min-h-screen">
        <div
          className="relative flex-grow flex flex-col items-center justify-center text-center text-primary-foreground p-6 pt-24"
          style={{
            backgroundImage: `url(${heroImage?.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold font-headline tracking-tight">
              Toque qualquer música sem depender de cifra
            </h1>
            <p className="mt-4 text-lg max-w-md mx-auto text-primary-foreground/90">
              Aprenda a tocar de ouvido e liberte sua criatividade musical. O método completo para você dominar seu instrumento e tocar qualquer canção.
            </p>
            <div className="mt-8">
              <a href="#pricing">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold h-14 px-10 shadow-lg w-full"
                >
                  QUERO APRENDER AGORA!
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative bg-black/80 text-primary-foreground p-6 -mt-20">
          <div className="flex items-center gap-4 max-w-sm mx-auto">
            {ebookImage && (
              <div className="flex-shrink-0">
                <Image
                  src={ebookImage.imageUrl}
                  alt={ebookImage.description}
                  width={100}
                  height={140}
                  className="rounded-md object-cover shadow-2xl"
                  data-ai-hint={ebookImage.imageHint}
                />
              </div>
            )}
            <div>
              <p className="font-bold text-sm tracking-widest">MÉTODO OUVIDO MESTRE</p>
              <h2 className="text-xl font-bold font-headline mt-1">O GUIA DEFINITIVO PARA TOCAR DE OUVIDO</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
