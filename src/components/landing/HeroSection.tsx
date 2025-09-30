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
      <div
        className="md:hidden relative w-full h-screen bg-no-repeat bg-cover bg-center text-white flex flex-col justify-end pb-24"
        style={{ backgroundImage: "url('https://i.ibb.co/VMywz6x/hero-mobile-new.png')" }}
      >
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold uppercase">
            Domine <br />
            <span className="text-accent">Qualquer</span> <span className="text-accent">Música</span>{' '}
            <span className="text-accent">Sem</span> <br />
            Precisar de <br />
            Cifra.
          </h1>
          <p className="mt-4 text-lg">
            Descubra o método que músicos experientes queriam ter aprendido no começo
          </p>
        </div>
      </div>
    </section>
  );
}
