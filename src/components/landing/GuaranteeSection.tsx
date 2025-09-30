import { ShieldCheck } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section id="guarantee" className="w-full py-16 md:py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 rounded-lg border-2 border-dashed border-primary/50 p-8 text-center md:text-left">
          <div className="relative">
            <ShieldCheck className="w-24 h-24 text-primary opacity-20" />
            <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary">07</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">Garantia Incondicional de 7 Dias</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Se dentro de 7 dias você não ficar satisfeito, devolvemos 100% do valor.
            </p>
            <p className="mt-2 font-semibold text-foreground">
              Sem perguntas. Sem burocracia.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Sua compra é 100% segura.
            </p>
          </div>
        </div>
        <div className="text-center mt-8 font-semibold text-primary animate-pulse">
            Garantia de 7 dias • Garantia de 7 dias • Garantia de 7 dias
        </div>
      </div>
    </section>
  );
}
