import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Zap } from 'lucide-react';

const features = [
  "PDF COMPLETO DO MÉTODO TOCAR DE OUVIDO",
  "EXERCÍCIOS DE PERCEPÇÃO AUDITIVA PASSO A PASSO",
  "TREINOS COM MÚSICAS REAIS (LULU SANTOS, DJAVAN, ETC.)",
  "GUIA PARA MONTAR SEUS PRÓPRIOS ARRANJOS",
  "EXPLICAÇÕES DE TEORIA MUSICAL DESCOMPLICADA",
  "SEM MENSALIDADE - ACESSO VITALÍCIO",
  "GARANTIA DE 7 DIAS",
  "BÔNUS: GUIA RÁPIDO: COMO TIRAR MÚSICAS EM 10 MINUTOS",
  "BÔNUS: DICIONÁRIO DE ACORDES",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">OFERTA ESPECIAL PARA GARANTIR HOJE!</h2>
            <p className="mt-2 text-foreground/80">A promoção de lançamento pode encerrar a qualquer momento.</p>
        </div>

        <div className="flex justify-center">
            <Card className="max-w-2xl w-full shadow-2xl border-2 border-accent">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 bg-primary text-primary-foreground flex flex-col justify-center items-center text-center rounded-t-lg md:rounded-l-lg md:rounded-r-none">
                        <p className="font-semibold line-through text-primary-foreground/70">DE R$ 147,00</p>
                        <p className="font-semibold mt-2">POR APENAS</p>
                        <p className="text-6xl font-bold text-accent my-2">R$19,90</p>
                        <p className="font-bold bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">PAGAMENTO ÚNICO</p>
                    </div>
                    <div className="p-8">
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <CardFooter className="flex-col p-6 gap-4">
                    <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold h-14 shadow-lg">
                        <Zap className="mr-2 h-5 w-5" />
                        GARANTIR O MEU AGORA!
                    </Button>
                    <p className="text-xs text-muted-foreground">Compra 100% segura</p>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
