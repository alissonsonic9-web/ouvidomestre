import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle2, Gift, ShieldCheck } from 'lucide-react';

const features = [
  { text: "PDF COMPLETO DO MÉTODO TOCAR DE OUVIDO", isBonus: false },
  { text: "EXERCÍCIOS DE PERCEPÇÃO AUDITIVA PASSO A PASSO", isBonus: false },
  { text: "TREINOS COM MÚSICAS REAIS (LULU SANTOS, DJAVAN, ETC.)", isBonus: false },
  { text: "GUIA PARA MONTAR SEUS PRÓPRIOS ARRANJOS", isBonus: false },
  { text: "EXPLICAÇÕES DE TEORIA MUSICAL DESCOMPLICADA", isBonus: false },
  { text: "SEM MENSALIDADE - ACESSO VITALÍCIO", isBonus: false },
  { text: "GARANTIA DE 7 DIAS", isBonus: false },
  { text: "BÔNUS: GUIA RÁPIDO: COMO TIRAR MÚSICAS EM 10 MINUTOS", isBonus: true },
  { text: "BÔNUS: DICIONÁRIO DE ACORDES", isBonus: true },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
            <Card className="max-w-md w-full shadow-2xl overflow-hidden">
                <div className="p-8 bg-primary text-primary-foreground flex flex-col justify-center items-center text-center">
                    <p className="font-semibold line-through text-primary-foreground/70 text-lg">DE R$ 147,00</p>
                    <p className="font-semibold mt-2 text-xl">POR APENAS</p>
                    <p className="text-7xl font-bold text-accent my-2">R$19,90</p>
                    <p className="font-bold text-lg">PAGAMENTO ÚNICO</p>
                </div>
                <CardContent className="p-8">
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                {feature.isBonus ? (
                                    <Gift className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                ) : (
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                )}
                                <span className="text-base font-medium">{feature.text}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>

                <CardFooter className="flex-col p-6 pt-0 gap-4">
                    <div className="flex items-center text-sm text-red-500/80">
                      <ShieldCheck className="w-4 h-4 mr-2"/>
                      <span>Compra 100% segura</span>
                    </div>
                    <Button size="lg" className="w-full bg-green-600 text-white hover:bg-green-700 text-lg font-bold h-14 shadow-lg">
                        GARANTIR O MEU AGORA!
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
