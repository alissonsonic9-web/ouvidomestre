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
    <section id="pricing" className="w-full py-16 md:py-24 bg-[#1C4D82]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
            <Card className="max-w-md w-full shadow-2xl overflow-hidden border-2 border-primary/20">
                <div className="p-8 bg-card text-card-foreground flex flex-col justify-center items-center text-center font-inter">
                    <p className="font-semibold text-foreground/50 text-xl line-through">
                      DE R$ 147,00
                    </p>
                    <p className="font-bold mt-4 text-xl text-foreground">POR APENAS</p>
                    <div className="flex items-baseline text-accent my-2">
                      <span className="text-7xl font-black tracking-tighter">R$</span>
                      <span className="text-7xl font-black tracking-tighter">19</span>
                      <span className="text-7xl font-black tracking-tighter">,90</span>
                    </div>
                    <p className="font-bold text-lg text-foreground/80">PAGAMENTO ÚNICO</p>
                </div>
                <CardContent className="px-8 pb-8 pt-0">
                    <ul className="space-y-4 font-inter">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                {feature.isBonus ? (
                                    <Gift className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                ) : (
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                )}
                                <span className={`text-base ${feature.isBonus ? 'font-bold text-primary' : 'font-bold text-foreground'}`}>{feature.text}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>

                <CardFooter className="flex-col p-6 pt-0 gap-4">
                    <a href="https://www.ggcheckout.com/checkout/v2/dd3YcDfmJ9793x2ccCRZ" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button size="lg" className="w-full bg-green-600 text-white hover:bg-green-700 text-lg font-bold h-14 shadow-lg animate-pulse">
                            GARANTIR O MEU AGORA!
                        </Button>
                    </a>
                    <div className="flex items-center text-sm text-foreground/60">
                      <ShieldCheck className="w-4 h-4 mr-2 text-green-600"/>
                      <span>Compra 100% segura</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
