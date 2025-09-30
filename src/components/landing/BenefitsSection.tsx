import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const benefits = [
  {
    title: 'INDEPENDÊNCIA TOTAL',
    description: 'Toque qualquer música sem depender de cifra ou partitura. Chega de buscar acordes no Google.',
    color: 'accent',
  },
  {
    title: 'DESENVOLVA SEU OUVIDO',
    description: 'Mesmo que você ache que "não nasceu com isso". Ouvir, entender e tocar — tudo isso pode ser treinado.',
    color: 'accent',
  },
  {
    title: 'PARA QUALQUER INSTRUMENTO',
    description: 'Violão, teclado, flauta, sax, gaita... nosso método foi pensado para ser universal.',
    color: 'primary',
  },
  {
    title: 'LIBERDADE MUSICAL',
    description: 'Ganhe independência como músico. Tocar de ouvido significa que você não depende mais de ninguém.',
    color: 'primary',
  },
  {
    title: 'CRIATIVIDADE E IMPROVISO',
    description: 'Quando o ouvido se desenvolve, a sua capacidade de improvisar flui com muito mais naturalidade.',
    color: 'accent',
  },
  {
    title: 'ENSINO MODERNO',
    description: 'Para professores que querem sair na frente, ensinando percepção auditiva de forma profissional.',
    color: 'accent',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="w-full py-16 md:py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 font-headline">
            Com esse <span className="text-accent">MATERIAL</span> você terá!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={cn(
                'rounded-2xl text-white shadow-lg text-center',
                {
                  'bg-accent': benefit.color === 'accent',
                  'bg-primary': benefit.color === 'primary',
                }
              )}
            >
              <CardContent className="p-8 flex flex-col items-center">
                <div className="bg-white rounded-full p-2 inline-block mb-6 shadow-md">
                  <Star
                    className={cn('w-6 h-6', {
                      'text-accent': benefit.color === 'accent',
                      'text-primary': benefit.color === 'primary',
                    })}
                    fill="currentColor"
                  />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider">{benefit.title}</h3>
                <p className="mt-2 text-white/90">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
