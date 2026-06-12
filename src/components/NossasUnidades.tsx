import logoConsulty from '../assets/logo-consulty.jpg';
import logoResponse from '../assets/logo-response.jpg';
import logoAcademy from '../assets/logo-academy.jpg';

const unidades = [
  {
    logo: logoConsulty,
    alt: 'Solveri Consulty',
    descricao: 'Consultoria especializada',
  },
  {
    logo: logoResponse,
    alt: 'Solveri Response',
    descricao: 'Gestão de emergências',
  },
  {
    logo: logoAcademy,
    alt: 'Solveri Academy',
    descricao: 'Capacitação e treinamento',
  },
];

export default function NossasUnidades() {
  return (
    <section className="w-full max-w-[1344px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="w-full rounded-[16px] md:rounded-[24px] bg-[#F0F0EC] border border-[#E5E5E0] py-8 md:py-10 px-6 sm:px-10 md:px-16 flex flex-col md:flex-row items-center gap-8 md:gap-0">

        {/* Label à esquerda */}
        <div className="md:w-[200px] lg:w-[220px] shrink-0 flex items-center justify-center md:justify-start">
          <span className="font-heading text-[11px] md:text-xs font-bold uppercase tracking-[2.5px] text-[#0F2017]/50 text-center md:text-left whitespace-nowrap">
            Nossas Unidades
          </span>
        </div>

        {/* Separador vertical desktop */}
        <div className="hidden md:block w-px h-[80px] bg-[#0F2017]/10 mr-8 lg:mr-12 shrink-0" />

        {/* Grid de unidades */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8 lg:gap-12 w-full">
          {unidades.map((unidade) => (
            <div
              key={unidade.alt}
              className="flex flex-col items-center gap-4 group"
            >
              {/* Logo container */}
              <div className="h-[72px] md:h-[80px] flex items-center justify-center">
                <img
                  src={unidade.logo}
                  alt={unidade.alt}
                  className="h-[60px] md:h-[70px] w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Descrição */}
              <span className="font-body text-[13px] md:text-sm text-[#0F2017]/55 text-center leading-snug">
                {unidade.descricao}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
