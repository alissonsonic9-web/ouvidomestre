import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';


const modulesData = [
  {
    id: 'module-1',
    title: 'UM MÉTODO PRÁTICO PARA DESENVOLVER O OUVIDO MUSICAL',
    description: [
      'Aprenda a identificar acordes, riffs, solos, frases e arranjos em qualquer estilo musical.',
      'Tudo direto no ouvido, para você nunca mais depender de cifras.',
    ],
  },
  {
    id: 'module-2',
    title: 'EXERCÍCIOS PROGRESSIVOS QUE FUNCIONAM EM QUALQUER INSTRUMENTO',
    description: [
      'Os treinos foram pensados para funcionar com qualquer músico, em qualquer contexto.',
      'Funciona para violão, teclado, guitarra, saxofone e muito mais.',
    ],
  },
  {
    id: 'module-3',
    title: 'Estudo completo de percepção auditiva na prática',
    description: [
      'Você vai aprender a separar instrumentos numa música, reconhecer timbres, frequências, amplitudes.',
      'E aplicar isso de forma musical — nada teórica.',
    ],
  },
  {
    id: 'module-4',
    title: 'Treinamento de escuta com músicas reais',
    description: [
      'Exercícios práticos com músicas como Garota de Ipanema, Lulu Santos, Djavan, Cartola e mais.',
      'Para você treinar ouvindo e executando.',
    ],
  },
  {
    id: 'module-5',
    title: 'Módulo 5 – Rotinas de Treino Técnico no Seu Instrumento',
    description: [
      'Domine técnicas como vibratos, bends e ligados.',
      'Rotinas organizadas para uma evolução sólida.',
      'Aprimore a palhetada alternada e outras técnicas.',
    ],
  },
  {
    id: 'module-6',
    title: 'Módulo 6 – Conceitos Teóricos Descomplicados e Aplicáveis',
    description: [
      'Aprenda apenas a teoria musical que você realmente precisa.',
      'Conhecimento aplicado para entender o que ouve e toca.',
    ],
  },
  {
    id: 'module-7',
    title: 'Módulo 7 – Guia para Transformar Qualquer Música em Aprendizado Técnico',
    description: [
      'Extraia solos, levadas e arranjos de qualquer música.',
      'Abordagem que respeita seu tempo de evolução.',
    ],
  },
  {
    id: 'module-8',
    title: 'Módulo 8 – Método Flexível para Quem Toca em Diferentes Ambientes',
    description: [
      'Aplique o método sozinho, em grupo, na igreja ou em bares.',
      'Conteúdo versátil para estudo ou para ensinar.',
    ],
  },
];

export default function ModulesSection() {
  return (
    <section id="modules" className="w-full py-16 md:py-24 bg-[#1C4D82]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-headline">O que você vai ter acesso?</h2>
        </div>
        {/* Desktop View */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modulesData.map((module) => {
            const image = PlaceHolderImages.find((img) => img.id === module.id);
            return (
              <Card key={module.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                {image && (
                  <div className="relative w-full aspect-square">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary min-h-[3.5rem] uppercase">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {module.description.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-base text-foreground/80 font-inter font-bold">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {modulesData.map((module) => {
                const image = PlaceHolderImages.find((img) => img.id === module.id);
                return (
                  <CarouselItem key={module.id} className="basis-4/5">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col overflow-hidden shadow-lg h-full bg-card">
                        {image && (
                          <div className="relative w-full aspect-square">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                              sizes="80vw"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="text-lg font-bold text-primary min-h-[3.5rem] uppercase">{module.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="space-y-2">
                            {module.description.map((point, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-base text-foreground/80 font-inter font-bold">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <a href="#pricing">
            <Button
              size="lg"
              className="bg-[#28AF60] text-white hover:bg-[#28AF60] text-lg font-bold h-14 px-10 shadow-lg animate-jump-forward shadow-green-400/50"
            >
              QUERO APRENDER AGORA!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
