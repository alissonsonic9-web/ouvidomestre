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
    title: 'Módulo 1 – Método Prático para Desenvolver o Ouvido Musical',
    description: [
      'Treine seu ouvido de forma intuitiva.',
      'Reconheça acordes, riffs, frases e solos de escuta.',
      'Livre-se da dependência de cifras e partituras.',
    ],
  },
  {
    id: 'module-2',
    title: 'Módulo 2 – Exercícios Progressivos que Funcionam em Qualquer Instrumento',
    description: [
      'Treinos graduais para violão, sax, teclado, etc.',
      'Exercícios aplicáveis em qualquer música.',
      'Acelere seu domínio musical de forma prática.',
    ],
  },
  {
    id: 'module-3',
    title: 'Módulo 3 – Estufa de Percepção Auditiva na Prática',
    description: [
      'Aprenda a separar instrumentos dentro de uma música.',
      'Desenvolva sensibilidade para timbres e frequências.',
      'Reconheça as intensidades e nuances sonoras.',
    ],
  },
  {
    id: 'module-4',
    title: 'Módulo 4 – Treinamento de Escuta com Músicas Reais',
    description: [
      'Pratique com músicas de Cartola, Djavan e Lulu Santos.',
      'Aplique o aprendizado tocando junto com canções de verdade.',
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
              <Card key={module.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                  <CardTitle className="text-lg font-bold text-primary min-h-[3.5rem]">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {module.description.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80 font-inter font-bold">{point}</span>
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
                      <Card className="flex flex-col overflow-hidden shadow-lg h-full">
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
                          <CardTitle className="text-lg font-bold text-primary min-h-[3.5rem]">{module.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="space-y-2">
                            {module.description.map((point, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground/80 font-inter font-bold">{point}</span>
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
              className="bg-green-600 text-white text-lg font-bold h-14 px-10 shadow-lg animate-pulse"
            >
              QUERO APRENDER AGORA!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
