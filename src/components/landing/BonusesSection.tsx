import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonusData = [
  {
    id: 'bonus-1',
    title: 'Bônus 1: Guia Rápido',
    description: 'Como tirar músicas de ouvido em 10 minutos.',
  },
  {
    id: 'bonus-2',
    title: 'Bônus 2: Dicionário de Acordes',
    description: 'O mais completo do mercado, para você nunca mais ter dúvidas.',
  },
];

export default function BonusesSection() {
  return (
    <section id="bonuses" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Bônus Especiais</h2>
          <p className="mt-2 text-lg text-foreground/80">E ainda tem mais...</p>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Garantindo seu acesso hoje, você leva para casa dois bônus exclusivos que vão acelerar ainda mais a sua evolução musical.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonusData.map((bonus) => {
            const image = PlaceHolderImages.find((img) => img.id === bonus.id);
            return (
              <Card key={bonus.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {image && (
                   <div className="relative aspect-square w-full">
                     <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                   </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-foreground/80 font-bold">{bonus.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
