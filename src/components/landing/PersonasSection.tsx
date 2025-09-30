import { Card, CardContent } from '@/components/ui/card';
import { UserCheck, BookOpen, GraduationCap, Building2 } from 'lucide-react';

const personas = [
    {
        icon: <UserCheck className="w-8 h-8 text-primary" />,
        text: "Para quem já toca, mas quer se libertar das cifras."
    },
    {
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        text: "Para quem é iniciante e quer aprender do jeito certo desde o começo."
    },
    {
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        text: "Para professores que querem ensinar mais do que o básico."
    },
    {
        icon: <Building2 className="w-8 h-8 text-primary" />,
        text: "Para quem toca na igreja e precisa se virar na hora."
    }
]

export default function PersonasSection() {
  return (
    <section id="personas" className="w-full py-16 md:py-24 bg-[#1C4D82]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-headline">Esse material é para você:</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {personas.map((persona, index) => (
                <Card key={index} className="bg-card text-card-foreground shadow-lg">
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="flex-shrink-0">
                            {persona.icon}
                        </div>
                        <p className="font-semibold text-lg uppercase">{persona.text}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
