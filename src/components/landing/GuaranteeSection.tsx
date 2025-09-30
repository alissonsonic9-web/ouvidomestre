import { ShieldCheck } from 'lucide-react';

const GuaranteeSeal = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <defs>
      <path
        id="circlePath"
        d="M 80, 20 a 60,60 0 1,1 -0.01,0"
        fill="transparent"
      />
    </defs>
    <circle cx="80" cy="80" r="48" fill="#FF7700" />
    <text
      fill="#1C4D82"
      dy="-8"
      style={{ fontSize: '20px', fontWeight: 'bold' }}
    >
      <textPath href="#circlePath" textLength="370" startOffset="50%" textAnchor="middle">
        GARANTIA DE 7 DIAS • GARANTIA DE 7 DIAS
      </textPath>
    </text>
    <text
      x="80"
      y="92"
      fill="white"
      textAnchor="middle"
      style={{ fontSize: '48px', fontWeight: 'bold' }}
    >
      07
    </text>
  </svg>
);


export default function GuaranteeSection() {
  return (
    <section id="guarantee" className="w-full py-16 md:py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <GuaranteeSeal />
          <div className="mt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-sm mx-auto">
              Se dentro de 7 dias você não ficar satisfeito, devolvemos 100% do valor.
            </p>
            <p className="mt-4 font-semibold text-[#28AF60] text-xl">
              Sem perguntas. Sem burocracia.
            </p>
            <div className="mt-6 flex items-center justify-center text-muted-foreground">
              <ShieldCheck className="w-5 h-5 mr-2 text-green-600"/>
              <span className="font-semibold">Sua compra é 100% segura.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
