import fundoHero from '../assets/fundo-hero.jpg';
import fotoMulher from '../assets/foto-mulher.jpg';
import circulos from '../assets/circulos.png';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1344px] mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-16">
      
      {/* Main Rounded Card Wrapper (No overflow-hidden to allow circles to overflow) */}
      <div className="relative w-full min-h-[660px] lg:min-h-[700px] rounded-[24px] md:rounded-[36px] border border-white/5 bg-[#0A0E0C] shadow-2xl flex flex-col justify-between">
        
        {/* Inner Content & Media Wrapper (Rounded with overflow-hidden to clip background and firefighter) */}
        <div className="absolute inset-0 w-full h-full rounded-[24px] md:rounded-[36px] overflow-hidden z-0 pointer-events-none">
          {/* Background Gradient Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${fundoHero})`
            }}
          />

          {/* Firefighter Woman Image — head centered in the concentric circles overlay */}
          <img 
            src={fotoMulher} 
            alt="Bombeira civil" 
            className="absolute inset-0 h-full w-full object-cover object-[75%_12%] z-10 opacity-35 md:opacity-100 transition-all duration-500"
          />

          {/* Dark Gradients for contrast and meshing */}
          {/* Desktop Left-to-Right Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E0C] via-[#0A0E0C]/90 to-transparent pointer-events-none z-20 hidden md:block" />
          
          {/* Mobile Top-to-Bottom and Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E0C]/95 via-[#0A0E0C]/85 to-[#0A0E0C]/95 pointer-events-none z-20 md:hidden" />
        </div>

        {/* Concentric Circles Image Overlay (Placed outside the overflow-hidden wrapper, centered on the firefighter's head) */}
        <div className="absolute top-[-55px] right-[4%] lg:right-[8%] w-[480px] lg:w-[500px] pointer-events-none z-30 hidden md:block">
          <img 
            src={circulos} 
            alt="Círculos de destaque" 
            className="w-full h-auto animate-pulse"
          />
        </div>

        {/* Left Content Area (Z-index 40 to sit above all media elements) */}
        <div className="relative z-40 flex flex-col items-start max-w-full md:max-w-[580px] lg:max-w-[640px] gap-6 p-6 sm:p-10 md:p-16 my-auto min-h-[660px] lg:min-h-[700px] justify-center">
          
          {/* ESG Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/10 bg-[#1E2420]/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="w-2 h-2 absolute rounded-full bg-accent" />
            <span className="font-heading text-[11px] md:text-xs font-bold uppercase tracking-[1.5px] text-white/95 pl-1.5">
              Gestão integrada de riscos corporativos
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] font-bold text-white tracking-tight mt-2">
            Cuidando dos maiores{' '}
            patrimônios empresariais:{' '}
            <span className="text-accent">Pessoas, Planeta{' '}<br className="hidden md:inline" />e Reputação</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-sm md:text-base lg:text-lg text-muted-foreground font-light leading-relaxed max-w-[540px] mt-1">
            Soluções integradas em gestão de riscos, emergências e crises para operações que exigem preparo real.
          </p>

          {/* CTAs / Buttons Container */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[30px] w-full sm:w-auto mt-4">
            <a 
              href="#solucoes"
              className="h-[50px] sm:min-w-[260px] px-8 flex items-center justify-center bg-accent-bright text-accent-foreground font-heading text-xs font-bold uppercase tracking-[0.52px] rounded-button hover:bg-white hover:shadow-[0_0_25px_rgba(212,255,0,0.5)] transition-all duration-300 text-center"
            >
              Conheça nossas soluções
            </a>
            
            <a 
              href="#especialista"
              className="h-[50px] px-8 flex items-center justify-center bg-transparent border border-white/32 text-white font-heading text-[13px] font-semibold tracking-[0.52px] rounded-button hover:bg-white/10 hover:border-white transition-all duration-300 text-center whitespace-nowrap"
            >
              Fale com um especialista
            </a>
          </div>

        </div>

        {/* Bottom Area (Stats Cards in bottom-right - Z-index 40) */}
        <div className="relative z-40 w-full flex flex-col md:flex-row justify-end items-end gap-4 p-6 sm:p-10 md:p-16 pt-0 md:pt-0 pointer-events-none">
          <div className="flex flex-wrap md:flex-nowrap gap-4 justify-end w-full sm:w-auto pointer-events-auto">
            {/* Stat Card 1 */}
            <div className="w-[calc(50%-8px)] sm:w-[190px] p-5 rounded-card bg-[#1E2420]/75 backdrop-blur-[6px] border border-surface-border flex flex-col gap-1 transition-all duration-300 hover:border-accent/30 hover:bg-[#1E2420]/90">
              <span className="font-heading text-3xl md:text-4xl font-bold text-accent">15+</span>
              <span className="font-body text-xs text-muted-foreground leading-snug">Anos de experiência</span>
            </div>

            {/* Stat Card 2 */}
            <div className="w-[calc(50%-8px)] sm:w-[190px] p-5 rounded-card bg-[#1E2420]/75 backdrop-blur-[6px] border border-surface-border flex flex-col gap-1 transition-all duration-300 hover:border-accent/30 hover:bg-[#1E2420]/90">
              <span className="font-heading text-3xl md:text-4xl font-bold text-accent">200+</span>
              <span className="font-body text-xs text-muted-foreground leading-snug">Operações atendidas</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
