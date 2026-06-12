import videoThumbnail from '../assets/video-thumbnail.jpg';
import playButton from '../assets/play-button.png';
import muteButton from '../assets/mute-button.png';
import nfpaLogo from '../assets/nfpa.svg';
import iso31000Logo from '../assets/iso31000.svg';
import iso45001Logo from '../assets/iso45001.svg';
import iaemLogo from '../assets/iaem.svg';

export default function AEmpresa() {
  return (
    <section className="w-full max-w-[1344px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="w-full rounded-[24px] md:rounded-[36px] bg-[#0A0E0C] border border-white/5 overflow-hidden">

        {/* ── Top: Text + Video ── */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 p-6 sm:p-10 md:p-14 lg:p-16">

          {/* Left Column – Text & Stats */}
          <div className="flex-1 flex flex-col justify-center gap-6">

            {/* Section label */}
            <span className="font-heading text-[11px] md:text-xs font-bold uppercase tracking-[2.5px] text-accent">
              A Empresa
            </span>

            {/* Title */}
            <h2 className="font-heading text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] leading-[1.2] font-bold text-white tracking-tight">
              Estrutura, método e resposta{' '}
              para cenários críticos
            </h2>

            {/* Description */}
            <p className="font-body text-sm md:text-[15px] text-[#B0B8B4] font-light leading-relaxed max-w-[480px]">
              Soluções integradas em gestão de riscos, emergências e crises. Prevenção, preparação e resposta para organizações que operam em ambientes de alta complexidade.
            </p>

            {/* Stat cards */}
            <div className="flex gap-4 mt-2">
              {/* +2.000 */}
              <div className="min-w-[140px] sm:min-w-[160px] px-5 py-4 rounded-card bg-[#1E2420]/70 border border-white/8 flex flex-col gap-1">
                <span className="font-heading text-2xl md:text-3xl font-bold text-accent">+2.000</span>
                <span className="font-body text-[11px] md:text-xs text-[#B0B8B4] leading-snug">Profissionais capacitados</span>
              </div>

              {/* 10 */}
              <div className="min-w-[140px] sm:min-w-[160px] px-5 py-4 rounded-card bg-[#1E2420]/70 border border-white/8 flex flex-col gap-1">
                <span className="font-heading text-2xl md:text-3xl font-bold text-white">10</span>
                <span className="font-body text-[11px] md:text-xs text-[#B0B8B4] leading-snug">Estados de atuação</span>
              </div>
            </div>
          </div>

          {/* Right Column – Video Placeholder */}
          <div className="flex-1 flex flex-col items-center gap-3 max-w-[480px] mx-auto md:mx-0">
            <div className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-[#1A1F1C] border border-white/8">

              {/* Video thumbnail image */}
              <img
                src={videoThumbnail}
                alt="Vídeo institucional Solveri"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Play button (center) */}
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                aria-label="Play video"
              >
                <img
                  src={playButton}
                  alt="Play"
                  className="w-[52px] h-[52px] hover:scale-110 transition-transform duration-200"
                />
              </button>

              {/* Mute button (bottom right) */}
              <button
                className="absolute bottom-3 right-3 z-10"
                aria-label="Mute"
              >
                <img
                  src={muteButton}
                  alt="Mute"
                  className="w-[32px] h-[32px] hover:opacity-80 transition-opacity duration-200"
                />
              </button>
            </div>

            {/* Video caption */}
            <span className="font-body text-[12px] md:text-[13px] text-[#B0B8B4]/70 text-center">
              Conheça a Solveri em ação
            </span>
          </div>
        </div>

        {/* ── Bottom: Credenciamentos ── */}
        <div className="flex flex-col items-center gap-6 px-6 sm:px-10 md:px-14 lg:px-16 pb-10 md:pb-14">

          {/* Label */}
          <span className="font-heading text-[11px] md:text-xs font-bold uppercase tracking-[2.5px] text-accent text-center">
            Credenciamentos
          </span>

          {/* Description */}
          <p className="font-body text-sm md:text-base text-white text-center leading-relaxed max-w-[440px]">
            Profissionais credenciados por instituições de referência internacional
          </p>

          {/* Logos bar */}
          <div className="w-full rounded-[12px] bg-[#1E2420]/60 border border-white/5 px-6 sm:px-10 md:px-14 py-6 md:py-8 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-8 sm:gap-4">

            {/* NFPA */}
            <div className="flex items-center justify-center w-[100px] sm:w-auto sm:flex-1">
              <img
                src={nfpaLogo}
                alt="NFPA"
                className="h-[60px] md:h-[70px] w-auto object-contain"
              />
            </div>

            {/* ISO 31000 */}
            <div className="flex items-center justify-center w-[100px] sm:w-auto sm:flex-1">
              <img
                src={iso31000Logo}
                alt="ISO 31000"
                className="h-[60px] md:h-[70px] w-auto object-contain"
              />
            </div>

            {/* ISO 45001 */}
            <div className="flex items-center justify-center w-[100px] sm:w-auto sm:flex-1">
              <img
                src={iso45001Logo}
                alt="ISO 45001"
                className="h-[60px] md:h-[70px] w-auto object-contain"
              />
            </div>

            {/* iAEM */}
            <div className="flex items-center justify-center w-[100px] sm:w-auto sm:flex-1">
              <img
                src={iaemLogo}
                alt="iAEM"
                className="h-[60px] md:h-[70px] w-auto object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
