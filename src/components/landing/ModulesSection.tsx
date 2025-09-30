import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const modulesData = [
  {
    id: 'module-1',
    title: 'Módulo 1 – Método Prático para Desenvolver o Ouvido Musical',
    description: 'Aprenda a treinar o ouvido de forma intuitiva, reconhecendo acordes, riffs, frases, solos e arranjos. Tudo direto na escuta, sem depender de cifras ou partituras.',
  },
  {
    id: 'module-2',
    title: 'Módulo 2 – Exercícios Progressivos que Funcionam em Qualquer Instrumento',
    description: 'Treinos graduais que se adaptam a qualquer instrumento (violão, sax, teclado, etc.). Exercícios aplicáveis em qualquer música, acelerando seu domínio musical.',
  },
  {
    id: 'module-3',
    title: 'Módulo 3 – Estufa de Percepção Auditiva na Prática',
    description: 'Aprenda a separar instrumentos dentro de uma música. Desenvolva sensibilidade para reconhecer timbres, frequências e intensidades.',
  },
  {
    id: 'module-4',
    title: 'Módulo 4 – Treinamento de Escuta com Músicas Reais',
    description: 'Pratique com músicas conhecidas de artistas como Cartola, Djavan e Lulu Santos. Aplique o aprendizado tocando junto com canções de verdade.',
  },
  {
    id: 'module-5',
    title: 'Módulo 5 – Rotinas de Treino Técnico no Seu Instrumento',
    description: 'Domine técnicas como vibratos, bends, ligados e palhetada alternada. Rotinas organizadas para você evoluir de forma sólida e progressiva.',
  },
  {
    id: 'module-6',
    title: 'Módulo 6 – Conceitos Teóricos Descomplicados e Aplicáveis',
    description: 'Aprenda apenas a teoria musical que você realmente precisa. Conhecimento aplicado para você entender o que ouve e toca.',
  },
  {
    id: 'module-7',
    title: 'Módulo 7 – Guia para Transformar Qualquer Música em Aprendizado Técnico',
    description: 'Aprenda a extrair solos, levadas e arranjos de qualquer música. Uma abordagem que respeita seu tempo de evolução.',
  },
  {
    id: 'module-8',
    title: 'Módulo 8 – Método Flexível para Quem Toca em Diferentes Ambientes',
    description: 'Aplique o método em qualquer cenário: sozinho, em grupo, na igreja ou em bares. Conteúdo versátil que pode ser usado para estudo ou para ensinar.',
  },
];

export default function ModulesSection() {
  return (
    <section id="modules" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">O que você vai ter acesso?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <CardTitle className="text-lg font-bold text-primary">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-foreground/80 font-inter font-bold">{module.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
