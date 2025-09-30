import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfinityIcon, EarIcon, GuitarIcon, SparklesIcon, BrainCircuitIcon, GraduationCapIcon } from 'lucide-react';

const benefits = [
  {
    icon: <InfinityIcon className="w-8 h-8 text-primary" />,
    title: 'Independência Total',
    description: 'Toque qualquer música sem depender de cifra ou partitura. Chega de buscar acordes no Google.',
  },
  {
    icon: <EarIcon className="w-8 h-8 text-primary" />,
    title: 'Desenvolva seu Ouvido',
    description: 'Mesmo que você ache que "não nasceu com isso". Ouvir, entender e tocar — tudo isso pode ser treinado.',
  },
  {
    icon: <GuitarIcon className="w-8 h-8 text-primary" />,
    title: 'Para Qualquer Instrumento',
    description: 'Violão, teclado, flauta, sax, gaita... nosso método foi pensado para ser universal.',
  },
  {
    icon: <SparklesIcon className="w-8 h-8 text-primary" />,
    title: 'Liberdade Musical',
    description: 'Ganhe independência como músico. Tocar de ouvido significa que você não depende mais de ninguém.',
  },
  {
    icon: <BrainCircuitIcon className="w-8 h-8 text-primary" />,
    title: 'Criatividade e Improviso',
    description: 'Quando o ouvido se desenvolve, a sua capacidade de improvisar flui com muito mais naturalidade.',
  },
  {
    icon: <GraduationCapIcon className="w-8 h-8 text-primary" />,
    title: 'Ensino Moderno',
    description: 'Para professores que querem sair na frente, ensinando percepção auditiva de forma profissional.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Com esse MATERIAL você terá!</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1 bg-secondary p-3 rounded-full">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">{benefit.title}</h3>
                <p className="mt-1 text-foreground/80">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
