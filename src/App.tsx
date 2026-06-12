import {
  ArrowRight,
  Building2,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import cardHero from './assets/card-hero.jpg';
import logoAcademy from './assets/logo-academy.jpg';
import logoConsulty from './assets/logo-consulty.jpg';
import logoHorizontalImage from './assets/logo-horizontal.jpg';
import solveriBrancaImage from './assets/solveri branca.png';
import logoSolveriHorizontal from './assets/logo solveri horizontal.png';
import logoResponse from './assets/logo-response.jpg';
import logoSolveri from './assets/logo-solveri.png';
import logoPreta from './assets/logo preta.png';
import heroConsultImage from './assets/hero consult.png';
import cardHeroAcademyImage from './assets/card hero academy.png';
import cardHeroSegmentoImage from './assets/card hero segmento.png';
import cardHeroContatoImage from './assets/card hero contato.png';
import cardHeroResponseImage from './assets/card hero response.png';
import clientLogosImage from './assets/empresasclientes 1.png';
import paisagemImage from './assets/paisagem.png';
import mapaBrasilImage from './assets/mapa brasil.png';
import overlayBorderImage from './assets/Overlay+Border.png';
import statCardImage from './assets/Stat Card.png';
import ircaLogo from './assets/irca.png';
import advancedLogo from './assets/advanced.png';
import starImage from './assets/estrela.png';
import instagramIcon from './assets/instagram.png';
import linkedinIcon from './assets/linkedin.png';
import sombraImage from './assets/sombra.png';
import logoFundoImage from './assets/logo fundo.png';
import circulosHeroConsultImage from './assets/circulos hero consult.png';
import sentadosImage from './assets/sentados.png';
import bombeirosInicioImage from './assets/bombeiros inicio.png';
import socorrendoImage from './assets/socorrendo.png';
import linhaVerdeImage from './assets/linha verde.png';
import linhaPretaImage from './assets/linha preta.png';
import thumbnail2Image from './assets/thumbnail 2.png';
import sombraThumbnailImage from './assets/sombra thumbnail.png';
import sombraBotaoImage from './assets/sombra botao.png';
import setaImage from './assets/seta.png';
import iconeImage from './assets/icone.png';
import playButtonImage from './assets/play-button.png';
import planejandoImage from './assets/planejando.png';
import selfieImage from './assets/selfie.png';
import fluxogramaImage from './assets/fluxograma.png';
import escrevendoImage from './assets/escrevendo.png';
import mexendoComputadorImage from './assets/mexendo no computador.png';
import escrevendo2Image from './assets/escrevendo 2.png';
import verificadoImage from './assets/verificado.png';
import checkImage from './assets/check.png';
import telefoneImage from './assets/telefone.png';
import emailImage from './assets/email.png';
import thumbnailResponseImage from './assets/thumbnail response.png';
import sombraThumbnailResponseImage from './assets/sombra thumbnail response.png';
import apagandoFogoImage from './assets/apagando fogo.png';
import salaReuniaoImage from './assets/sala reuniao.png';
import bombeirosImage from './assets/bombeiros.png';
import bombeiros2Image from './assets/bombeiros 2.png';
import cadeirasSalaImage from './assets/cadeiras sala.png';
import salaReuniao2Image from './assets/sala reuniao 2.png';
import monitoresImage from './assets/monitores.png';
import olhandoMonitoresImage from './assets/olhando monitores.png';
import mochilasImage from './assets/mochilas.png';
import mesaECadeirasImage from './assets/mesa e cadeiras.png';
import graficosImage from './assets/graficos.png';
import analiseImage from './assets/analise.png';
import droneImage from './assets/drone.png';
import livrosImage from './assets/livros.png';
import tanquesImage from './assets/tanques.png';
import reuniaoMonitoresImage from './assets/reuniao monitores.png';
import telaoImage from './assets/telao.png';
import mineracaoIcon from './assets/mineracao.png';
import energiaIcon from './assets/energia.png';
import logisticaIcon from './assets/logistica.png';
import segmentoImage1 from './assets/1.png';
import segmentoImage2 from './assets/2.png';
import segmentoImage3 from './assets/3.png';
import segmentoImage4 from './assets/4.png';
import segmentoImage5 from './assets/5.png';
import segmentoImage6 from './assets/6.png';
import segmentoImage7 from './assets/7.png';
import segmentoImage8 from './assets/8.png';
import segmentoImage9 from './assets/9.png';
import segmentoImage10 from './assets/10.png';
import nfpaLogo from './assets/nfpa.svg';
import iso31000Logo from './assets/iso31000.svg';
import iso45001Logo from './assets/iso45001.svg';
import iaemLogo from './assets/iaem.svg';
import videoThumbnail from './assets/video-thumbnail.jpg';
import muteButton from './assets/mute-button.png';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Consult', href: '#consult' },
  { label: 'Response', href: '#response' },
  { label: 'Academy', href: '#academy' },
  { label: 'Segmento', href: '#segmento' },
  { label: 'Contato', href: '#contato' },
];

const units = [
  { logo: logoConsulty, alt: 'Solveri Consult', text: 'Consultoria especializada', href: '#consult' },
  { logo: logoResponse, alt: 'Solveri Response', text: 'Gestão de emergências', href: '#response' },
  { logo: logoAcademy, alt: 'Solveri Academy', text: 'Capacitação e treinamento', href: '#academy' },
];

const partners = ['NFPA', 'ISO 31000', 'ISO 45001', 'IAEM'];
const faqs = [
  {
    question: 'A Solveri atua apenas em emergencias?',
    answer:
      'Nao. A atuacao cobre prevencao, preparacao, resposta e aprendizagem pos-evento, com consultoria, treinamentos e suporte operacional.',
  },
  {
    question: 'Os programas sao personalizados por segmento?',
    answer:
      'Sim. O desenho considera riscos, maturidade, requisitos legais, operacao, publico exposto e criticidade do negocio.',
  },
  {
    question: 'E possivel contratar treinamentos e simulados isolados?',
    answer:
      'Sim. A Academy pode operar em projetos pontuais ou dentro de um programa continuo de cultura e prontidao.',
  },
  {
    question: 'A Solveri atende operacoes em diferentes estados?',
    answer:
      'Sim. A estrutura foi pensada para presenca nacional, com combinacao de especialistas, parceiros e suporte remoto.',
  },
];

const testimonials = [
  {
    quote:
      'A Solveri e uma empresa seria, muito responsavel e possui profissionais de ponta com grande expertise em sua area de atuacao. Seu atendimento superou minhas expectativas!',
    author: 'Samuel Gandra',
    source: '1 ano atrás',
  },
  {
    quote: 'Fiz o curso de ICS e fiquei encantada. Equipe muito técnica e atenciosa, super recomendo!',
    author: 'Aline Martins',
    source: '2 anos atrás',
  },
  {
    quote:
      'A melhor escola profissionalizante no ramo de bombeiro civil do médio Piracicaba. Excelentes professores estudados nos EUA e equipamentos modernos.',
    author: 'Thiago Castro',
    source: '1 ano atrás',
  },
  {
    quote:
      'Equipe super atenciosa, se importa com o aluno. Indico sempre. Aprendi muito e pena que passou tão rápido. Só agradecer pelo tempo que passei!',
    author: 'Ana Paula Paula',
    source: '1 ano atrás',
  },
  {
    quote:
      'Empresa com metodologias atualizadas e instrutores qualificados! Treinamentos com qualidade, responsabilidade e foco na prática real! Sem dúvidas a melhor da região!',
    author: 'Aqua Ambiental',
    source: '7 meses atrás',
  },
  {
    quote:
      'Se procura uma escola de excelência, então está no lugar certo. Venha para a Solveri - professores super capacitados, compromisso e dedicação. Super recomendo.',
    author: 'Nadia Nara',
    source: '1 ano atrás',
  },
  {
    quote:
      'Professores qualificados, equipamentos de primeira. Tudo para melhor ensinar os alunos.',
    author: 'Diogenes Andrade',
    source: '7 meses atrás',
  },
  {
    quote:
      'Excelente escola, professores exemplares, dedicação excelente. Aprendi muito com a Solveri.',
    author: 'Cleidiana Paula',
    source: '1 ano atrás',
  },
  {
    quote:
      'Todos profissionais e muito bem capacitados. O atendimento foi excepcional. Super indico a empresa!',
    author: 'Ana Paula Fonseca',
    source: '1 ano atrás',
  },
];

function Header({
  activeSection,
  onNavigate,
}: {
  activeSection: 'home' | 'consult' | 'response' | 'academy' | 'segmento' | 'contato';
  onNavigate: (section: 'home' | 'consult' | 'response' | 'academy' | 'segmento' | 'contato') => void;
}) {
  const [open, setOpen] = useState(false);
  const isConsultMode = activeSection === 'consult';
  const isResponseMode = activeSection === 'response';
  const isAcademyMode = activeSection === 'academy';
  const isSegmentMode = activeSection === 'segmento';
  const isContactMode = activeSection === 'contato';
  const isDarkHeader = isConsultMode;
  const isGreenHeader = isResponseMode;
  const headerClass = isAcademyMode ? 'bg-[#0D1B14]' : isSegmentMode ? 'bg-[#DEE4DD]' : isContactMode ? 'bg-[#F9F9F7]' : isGreenHeader ? 'bg-[#A8E63D]' : isDarkHeader ? 'bg-[#5B5F5C]' : 'bg-[#F9F9F7]';
  const navTextClass = isAcademyMode ? 'text-white/85' : isSegmentMode || isContactMode ? 'text-[#111714]' : isGreenHeader ? 'text-[#111714]' : isDarkHeader ? 'text-white/85' : 'text-[#0F2017]';
  const activeLinkLabel = isAcademyMode ? 'Academy' : isSegmentMode ? 'Segmento' : isContactMode ? 'Contato' : isGreenHeader ? 'Response' : isDarkHeader ? 'Consult' : 'Inicio';
  const activeUnderlineClass = isAcademyMode ? 'bg-accent-bright' : isSegmentMode || isContactMode ? 'bg-accent-bright' : isGreenHeader ? 'bg-[#111714]' : 'bg-accent-bright';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${headerClass}`}>
      <nav className="mx-auto flex h-[80px] w-full max-w-[1180px] items-center justify-between px-5 md:px-0">
        <a
          href="#inicio"
          className="flex items-center"
          aria-label="Solveri Group"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('home');
          }}
        >
          <img
            src={isAcademyMode ? solveriBrancaImage : isContactMode ? logoHorizontalImage : isSegmentMode ? logoSolveri : isGreenHeader ? logoSolveri : isConsultMode ? logoSolveriHorizontal : logoSolveri}
            alt="Solveri Group"
            className={`w-auto object-contain ${isAcademyMode || isGreenHeader ? 'h-10' : isConsultMode ? 'h-9' : 'h-11'}`}
          />
        </a>

        <ul className={`hidden items-center gap-[34px] font-body text-[17px] font-medium md:flex ${navTextClass}`}>
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
                <a
                  className={`relative inline-flex items-center transition ${isGreenHeader ? 'hover:text-[#0A0E0C]' : isDarkHeader ? 'hover:text-white' : 'hover:text-[#0A0E0C]'}`}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(link.label === 'Consult' ? 'consult' : link.label === 'Response' ? 'response' : link.label === 'Academy' ? 'academy' : link.label === 'Segmento' ? 'segmento' : link.label === 'Contato' ? 'contato' : 'home');
                  }}
                >
                {link.label}
                {link.label === activeLinkLabel && (
                  <span className={`absolute -bottom-[3px] left-0 h-[2px] w-full ${activeUnderlineClass}`} />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a className="hidden h-[32px] min-w-[105px] items-center justify-center rounded-full bg-accent-bright px-5 font-heading text-[11px] font-bold text-accent-foreground transition hover:bg-[#c8f000] md:flex" href="#contato">
          Fale Conosco
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-[#0F2017]/15 text-[#0F2017] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className={`border-t px-5 py-5 shadow-lg md:hidden ${isGreenHeader ? 'border-[#111714]/10 bg-[#A8E63D]' : isSegmentMode ? 'border-[#111714]/10 bg-[#DEE4DD]' : isContactMode ? 'border-[#111714]/10 bg-[#F9F9F7]' : isConsultMode ? 'border-white/10 bg-[#5B5F5C]' : 'border-[#0F2017]/10 bg-[#F9F9F7]'}`}>
          <div className="mx-auto flex max-w-[1180px] flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`font-body text-sm font-medium ${isGreenHeader || isSegmentMode || isContactMode ? 'text-[#111714]' : isConsultMode ? 'text-white/85' : 'text-[#0F2017]'}`}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(link.label === 'Consult' ? 'consult' : link.label === 'Response' ? 'response' : link.label === 'Academy' ? 'academy' : link.label === 'Segmento' ? 'segmento' : link.label === 'Contato' ? 'contato' : 'home');
                  setOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <a className="mt-2 flex h-[50px] items-center justify-center rounded-button bg-accent-bright font-heading text-xs font-bold uppercase tracking-[0.52px] text-accent-foreground" href="#contato">
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <span className="font-heading text-xs font-bold uppercase tracking-[2px] text-accent">{children}</span>;
}

function Hero() {
  return (
    <section id="inicio" className="bg-[#F9F9F7] px-5 pb-0 pt-[89px]">
      <div className="relative mx-auto w-full max-w-[1344px] overflow-hidden rounded-[10px]">
        <img
          src={cardHero}
          alt="Cuidando dos maiores patrimonios empresariais: Pessoas, Planeta e Reputacao"
          className="block h-auto w-full object-contain"
        />
        <h1 className="sr-only">
          Cuidando dos maiores patrimonios empresariais: Pessoas, Planeta e Reputacao
        </h1>
        <a
          href="#servicos"
          className="absolute bottom-[12%] left-[4.6%] h-[8%] w-[19.4%]"
          aria-label="Conheca nossas solucoes"
        />
        <a
          href="#contato"
          className="absolute bottom-[12%] left-[26%] h-[8%] w-[19.5%]"
          aria-label="Fale com um especialista"
        />
      </div>
    </section>
  );
}

function Units() {
  return (
    <section className="bg-[#F9F9F7] px-5 pb-[22px] pt-[24px]">
      <div className="mx-auto grid h-[163px] w-full max-w-[1340px] grid-cols-4 overflow-hidden rounded-[7px] bg-white shadow-[0_14px_30px_rgba(15,32,23,0.08)]">
        <div className="flex h-full items-center justify-center border-r border-[#EEF0EC] px-4">
          <span className="font-body text-[16px] font-medium uppercase leading-none tracking-[1.15px] text-[#AEB4B0]">
            Nossas Unidades
          </span>
        </div>

        {units.map((unit, index) => (
          <a
            key={unit.alt}
            href={unit.href}
            className={`flex h-full flex-col items-center justify-center transition hover:bg-[#F9F9F7]/70 ${
              index < units.length - 1 ? 'border-r border-[#EEF0EC]' : ''
            }`}
          >
            <img src={unit.logo} alt={unit.alt} className="h-[97px] w-[114px] object-contain mix-blend-multiply" />
            <span className="mt-1 font-body text-[16px] font-normal leading-none text-[#B1B6B2]">
              {unit.text}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Company() {
  return (
    <section id="empresa" className="bg-[#F9F9F7] px-5 py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1344px]">
        <div className="rounded-[28px] bg-[#0A0E0C] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <div className="pt-1">
              <SectionLabel>A empresa</SectionLabel>
              <h2 className="mt-4 max-w-[520px] font-heading text-[30px] font-bold leading-[1.08] text-white sm:text-[36px] lg:text-[40px]">
                Estrutura, método e resposta para cenários críticos
              </h2>
              <p className="mt-4 max-w-[560px] font-body text-[14px] leading-6 text-[#AAB2AD] sm:text-[16px] sm:leading-7">
                Soluções integradas em gestão de riscos, emergências e crises. Prevenção, preparação e resposta para organizações que operam em ambientes de alta complexidade.
              </p>

              <div className="mt-7 grid max-w-[282px] grid-cols-2 gap-3">
                <div className="rounded-[10px] bg-[#232A23] px-4 py-4">
                  <strong className="block font-heading text-[28px] font-bold leading-none text-accent-bright">+2.000</strong>
                  <span className="mt-2 block font-body text-[11px] leading-4 text-[#AAB2AD]">Profissionais capacitados</span>
                </div>
                <div className="rounded-[10px] bg-[#232A23] px-4 py-4">
                  <strong className="block font-heading text-[28px] font-bold leading-none text-accent-bright">10</strong>
                  <span className="mt-2 block font-body text-[11px] leading-4 text-[#AAB2AD]">Estados de atuação</span>
                </div>
              </div>
            </div>

            <div className="lg:pt-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[8px] border border-white/5 bg-[#121815]">
                <img
                  src={videoThumbnail}
                  alt="Equipe Solveri em treinamento operacional"
                  className="h-full w-full object-cover grayscale contrast-90 brightness-90"
                />
                <div className="absolute inset-0 bg-black/18" />
                <button
                  type="button"
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px] border border-accent-bright/80 bg-black/15 backdrop-blur-[2px] transition hover:bg-black/25"
                  aria-label="Assistir video institucional"
                >
                  <img src={playButtonImage} alt="" className="h-9 w-9" />
                </button>
                <button
                  type="button"
                  className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-[8px] bg-black/65 backdrop-blur-[2px]"
                  aria-label="Ativar ou desativar volume"
                >
                  <img src={muteButton} alt="" className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-3 text-center font-body text-[12px] leading-5 text-[#AAB2AD]">
                Conheça a Solveri em ação
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-accent-bright">
              Credenciamentos
            </span>
            <p className="mx-auto mt-3 max-w-[420px] font-body text-[15px] leading-6 text-[#C7CDC8]">
              Profissionais credenciados por instituições de referência internacional
            </p>
          </div>

          <div className="mt-8 rounded-[12px] bg-[#1F2520] px-6 py-5 sm:px-8">
            <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4 sm:gap-8">
              {[nfpaLogo, iso31000Logo, iso45001Logo, iaemLogo].map((logo, index) => (
                <img
                  key={logo}
                  src={logo}
                  alt={partners[index]}
                  className="mx-auto h-11 w-auto object-contain brightness-0 invert opacity-90 sm:h-12"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="bg-[#F9F9F7] px-5 pb-20 pt-0 md:px-8">
      <div className="mx-auto w-full max-w-[1344px]">
        <div className="rounded-[28px] bg-white px-6 py-10 text-center shadow-[0_14px_34px_rgba(15,32,23,0.06)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[2.6px] text-[#6A6F6C]">
            Clientes
          </span>
          <h2 className="mx-auto mt-4 max-w-[760px] font-heading text-[28px] font-bold leading-[1.1] text-[#0F2017] sm:text-[34px] lg:text-[42px]">
            Empresas que confiam na Solveri
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] font-body text-[15px] leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
            Atuação junto a operações de grande porte em setores estratégicos, com foco em segurança, continuidade e capacidade de resposta.
          </p>

          <div className="mt-12 flex items-center justify-center">
            <img
              src={clientLogosImage}
              alt="Logos das empresas clientes"
              className="h-auto w-full max-w-[1180px] object-contain"
            />
          </div>

          <p className="mt-10 font-body text-[15px] leading-6 text-[#6F7370]">
            E muitas outras operações de grande porte
          </p>

          <a
            href="#contato"
            className="mx-auto mt-6 inline-flex h-[32px] items-center justify-center gap-2 rounded-[4px] bg-accent-bright px-5 font-heading text-[11px] font-bold text-accent-foreground transition hover:bg-[#c8f000]"
          >
            Fale com nossa equipe
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ConsultHero() {
  const tabs = ['Visão Geral', 'Planos e\nProtocolos', 'Centrais de\nEmergência', 'Estruturas\nde Resposta', 'Gestão\nde Crises', 'Diagnóstico\ne Auditoria', 'Integração\nInstitucional'];

  return (
    <section id="consult" className="relative overflow-hidden bg-[#5B5F5C] px-5 pb-8 pt-[105px] md:px-8 md:pb-10 md:pt-[105px]">
      <img
        src={logoFundoImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-86px] top-[28px] h-[760px] w-[760px] opacity-[0.16] md:right-[-58px] md:top-[32px] md:h-[820px] md:w-[820px]"
      />

      <div className="mx-auto w-full max-w-[1344px]">
        <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
          <div className="relative h-[610px] overflow-hidden">
            <div className="absolute inset-0">
              <img src={heroConsultImage} alt="Reunião de planejamento de emergência" className="h-full w-full object-cover object-right" />
              <img src={sombraImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-white via-white/98 via-35% to-white/0" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/35 to-transparent" />

            <img
              src={circulosHeroConsultImage}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-22px] top-[-8px] h-[590px] w-[590px] object-contain opacity-90"
            />

            <div className="relative z-10 flex h-full flex-col justify-between px-10 py-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
              <div className="max-w-[540px]">
                <img src={logoPreta} alt="Solveri" className="h-[141px] w-[165px] object-contain" />

                <div className="mt-10">
                  <h1 className="max-w-[470px] font-heading text-[30px] font-bold leading-[1.06] text-[#1E2B23] sm:text-[36px] lg:text-[41px]">
                    Estruturação <span className="text-accent">estratégica</span> de sistemas de emergência
                  </h1>
                  <p className="mt-4 max-w-[420px] font-body text-[16px] leading-7 text-[#616766]">
                    Diagnóstico, planejamento e modelagem de sistemas de gestão de emergências e crises sob medida para cada operação industrial de alto risco.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#contato"
                    className="inline-flex h-[42px] items-center justify-center rounded-[2px] bg-accent-bright px-6 font-heading text-[16px] font-bold uppercase text-accent-foreground transition hover:bg-[#c8f000]"
                  >
                    Solicitar proposta
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex h-[42px] items-center justify-center rounded-[2px] border border-[#6F7673] px-6 font-heading text-[16px] font-bold text-[#1E2B23] transition hover:bg-[#F4F5F2]"
                  >
                    Conheça os serviços
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[53px] grid h-[130px] w-full max-w-[1353px] grid-cols-7 overflow-hidden rounded-[7px] bg-white shadow-[0_14px_30px_rgba(15,32,23,0.08)]">
          {tabs.map((tab, index) => (
            <div
              key={tab}
              className={`relative flex h-full items-center justify-center px-3 text-center font-heading text-[20px] font-bold leading-[1.02] text-[#1E2B23] ${
                index === 0 ? 'text-[#7DBA1D]' : ''
              }`}
            >
              {index > 0 && (
                <img
                  src={linhaPretaImage}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-full w-[3px] object-fill"
                />
              )}
              <span className="whitespace-pre-line">{tab}</span>
              {index === 0 && (
                <img
                  src={linhaVerdeImage}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-1/2 h-[6px] w-[139px] -translate-x-1/2 object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultUnitCard() {
  return (
    <section className="bg-[#F9F9F7] px-5 pb-20 pt-10 md:px-8 md:pb-24 md:pt-12">
      <div className="mx-auto w-full max-w-[1340px]">
        <div className="overflow-hidden rounded-[28px] bg-[#0E2217] shadow-[0_20px_50px_rgba(15,32,23,0.12)]">
          <div className="grid min-h-[659px] lg:grid-rows-[1fr_170px]">
            <div className="grid gap-10 px-8 py-10 sm:px-10 sm:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-0 lg:py-0">
              <div className="flex flex-col justify-center lg:pl-[126px] lg:pr-[40px] lg:py-[65px]">
                <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-accent-bright">
                  A Unidade
                </span>
                <h2 className="mt-2 max-w-[430px] font-heading text-[28px] font-bold leading-[1.06] text-white sm:text-[34px] lg:text-[42px]">
                  O braço intelectual e estratégico do Grupo Solveri
                </h2>
                <p className="mt-4 max-w-[430px] font-body text-[20px] leading-6 text-[#AFB6B1]">
                  A Solveri Consult vai além da elaboração documental. Entregamos diagnóstico, modelagem de sistemas e estruturas funcionais aderentes à realidade de cada operação.
                </p>

                <div className="mt-10">
                  <div className="relative inline-flex">
                    <img
                      src={sombraBotaoImage}
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-3 h-[44px] w-[170px] object-contain opacity-85"
                    />
                    <a
                      href="#contato"
                      className="relative inline-flex h-[44px] items-center justify-center gap-2 rounded-[6px] bg-[#A8E63D] px-6 font-body text-[12px] font-bold uppercase text-[#0E2217] transition hover:bg-[#b8f24f]"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      <span>Solicitar proposta</span>
                      <img src={setaImage} alt="" aria-hidden="true" className="h-3.5 w-3.5 object-contain" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center lg:pr-[126px] lg:pl-[40px] lg:py-[65px]">
                <div className="relative w-[528px] overflow-hidden rounded-[16px]">
                  <img
                    src={thumbnail2Image}
                    alt="Equipe Solveri Consult em ambiente operacional"
                    className="h-[297.17px] w-[528px] object-cover"
                  />
                  <img src={sombraThumbnailImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-black/12" />
                  <img
                    src={playButtonImage}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 object-contain"
                  />
                </div>

                <div className="mt-3 flex items-center gap-2 text-[12px] text-[#AFB6B1]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Conheça a Solveri Consult em ação</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {['ISO 31000', 'ISO 45001', 'IAEM', 'NFPA'].map((item) => (
                    <span
                      key={item}
                      className="inline-flex h-[26px] items-center rounded-full border border-accent/30 bg-[#102317] px-3 font-heading text-[10px] font-bold uppercase tracking-[0.08em] text-accent-bright"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex items-center overflow-hidden bg-[#101714] px-8 py-7 sm:px-10 lg:px-14">
              <div className="max-w-[520px]">
                <h3 className="font-heading text-[24px] font-normal text-white sm:text-[28px]">
                  Análise Preditiva
                </h3>
                <p className="mt-3 max-w-[330px] font-body text-[13px] leading-5 text-[#8E9792]">
                  Utilizamos algoritmos proprietários para mapear vulnerabilidades antes que se tornem incidentes críticos.
                </p>
              </div>

              <div className="pointer-events-none absolute right-0 top-0 h-full w-[190px] opacity-[0.18]">
                <img
                  src={iconeImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute bottom-[-6px] right-0 h-[200px] w-[160px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultTextIntro() {
  return (
    <section className="bg-[#F9F9F7] px-5 pb-14 pt-10 md:px-8 md:pb-16 md:pt-12">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
          Serviços
        </span>
        <h2 className="mt-4 max-w-[520px] font-heading text-[28px] font-bold leading-[1.08] text-[#0F2017] sm:text-[36px] lg:text-[42px]">
          Excelência Técnica em Gestão de Riscos e Resposta a Emergências
        </h2>
        <p className="mt-4 max-w-[430px] font-body text-[14px] leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
          Desenvolvemos soluções estratégicas e operacionais personalizadas para garantir a resiliência e a conformidade de ativos industriais complexos.
        </p>
      </div>
    </section>
  );
}

const consultProcessCards = [
  {
    eyebrow: 'PLANOS E PROTOCOLOS',
    badge: 'DESTAQUE',
    title: 'PAE / PEI / PEVO / PAEBM',
    description:
      'Desenvolvimento integral de planos de ação emergenciais e intervenção individual para cenários críticos industriais.',
    bullets: [
      'PAE - Plano de Ação de Emergência',
      'PEI - Plano de Emergência Individual',
      'PEVO - Plano de Evacuação',
      'PAEBM - Plano de Ação de Emergência para Barragens de Mineração',
    ],
    cta: 'Solicitar proposta',
    imageSrc: planejandoImage,
    imageAlt: 'Equipe planejando operação',
    reverse: false,
  },
  {
    eyebrow: 'CENTRAIS DE EMERGÊNCIA',
    badge: 'DESTAQUE',
    title: 'Centrais de Atendimento Protocolar',
    description:
      'Estruturação de centros de comando e controle com foco em padronização operacional e prontidão de resposta.',
    bullets: [
      'Modelagem de fluxos de comunicação',
      'Padronização de procedimentos',
      'Estrutura operacional dedicada',
      'Eficiência na gestão de alarmes',
    ],
    cta: 'Solicitar proposta',
    imageSrc: selfieImage,
    imageAlt: 'Equipe em centro de treinamento',
    reverse: true,
  },
  {
    eyebrow: 'ESTRUTURAS DE RESPOSTA',
    badge: 'DESTAQUE',
    title: 'Modelagem de Estruturas Organizacionais de Resposta',
    description:
      'Criação de hierarquias de comando eficientes para gestão de incidentes críticos em ambientes industriais complexos.',
    bullets: [
      'Funções e responsabilidades claras',
      'Níveis de ativação escalonados',
      'Coordenação interdepartamental',
      'Modelos aderentes a padrões globais',
    ],
    cta: 'Solicitar proposta',
    imageSrc: fluxogramaImage,
    imageAlt: 'Fluxograma de processos',
    reverse: false,
  },
  {
    eyebrow: 'PLANOS DE CONTINGÊNCIA',
    badge: 'DESTAQUE',
    title: 'Planos de Contingência e Gestão de Crises',
    description:
      'Estratégias de continuidade de negócios e proteção reputacional para eventos de alta gravidade.',
    bullets: [
      'Contingência operacional robusta',
      'Gestão de crises e comunicação estratégica',
      'Atendimento pleno a exigências legais',
      'Metodologias internacionais (ICS/NIMS)',
    ],
    cta: 'Solicitar proposta',
    imageSrc: escrevendoImage,
    imageAlt: 'Pessoa elaborando plano e gráficos',
    reverse: true,
  },
  {
    eyebrow: 'PROTOCOLOS E MATRIZES',
    badge: 'DESTAQUE',
    title: 'Protocolos, Procedimentos e Matrizes de Acionamento',
    description:
      'Engenharia de processos para automatizar decisões críticas e reduzir tempos de resposta em emergências.',
    bullets: [
      'Protocolos operacionais de campo',
      'Matrizes de acionamento dinâmicas',
      'Redução drástica de improvisações',
      'Previsibilidade de ações técnicas',
    ],
    cta: 'Solicitar proposta',
    imageSrc: mexendoComputadorImage,
    imageAlt: 'Equipe trabalhando em computador',
    reverse: false,
  },
  {
    eyebrow: 'DIAGNÓSTICO E AUDITORIA',
    badge: 'DESTAQUE',
    title: 'Diagnóstico, Auditoria e Reestruturação de Processos',
    description:
      'Análise profunda de vulnerabilidades e implementação de melhorias estruturais em sistemas de segurança.',
    bullets: [
      'Diagnóstico preciso de fragilidades',
      'Auditoria de processos operacionais',
      'Reestruturação de sistemas legados',
      'Integração de fluxos de segurança',
    ],
    cta: 'Solicitar proposta',
    imageSrc: escrevendo2Image,
    imageAlt: 'Pessoa escrevendo sobre prancheta',
    reverse: true,
  },
];

function ConsultProcessCard({
  eyebrow,
  badge,
  title,
  description,
  bullets,
  cta,
  imageSrc,
  imageAlt,
  reverse,
}: {
  eyebrow: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
}) {
  return (
    <article className="overflow-hidden bg-[#0A0E0C] shadow-[0_20px_50px_rgba(15,32,23,0.12)]">
      <div className={`grid h-[547.833px] lg:grid-cols-2 ${reverse ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''}`}>
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
          <img src={imageSrc} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,34,24,0.08)_0%,rgba(26,34,24,0.38)_100%)]" />
        </div>

        <div className="flex flex-col justify-center px-8 py-10 sm:px-10 lg:px-12 lg:py-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-[25px] items-center rounded-[2px] border border-[#2F4A16] px-3 font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#A8E63D]">
                {eyebrow}
              </span>
              <span className="inline-flex h-[19px] items-center rounded-[2px] bg-[#A8E63D] px-2 font-heading text-[8px] font-bold uppercase tracking-[1.3px] text-[#111714]">
                {badge}
              </span>
            </div>
            <h3 className="mt-4 max-w-[560px] font-heading text-[24px] font-bold leading-[1.08] text-white sm:text-[28px] lg:text-[30px]">
              {title}
            </h3>
            <p className="mt-4 max-w-[500px] font-body text-[13px] leading-6 text-[#AAB2AD] sm:text-[14px]">
              {description}
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 font-body text-[13px] leading-5 text-[#E2E7E3]">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-sm bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#contato"
            className="mt-8 inline-flex w-fit items-center gap-2 font-heading text-[12px] font-bold uppercase text-accent-bright transition hover:opacity-80"
          >
            {cta}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ConsultProcessSection() {
  return (
    <section className="bg-[#F9F9F7] px-5 pb-20 pt-10 md:px-8 md:pb-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-0">
        {consultProcessCards.map((card) => (
          <ConsultProcessCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

function ConsultContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#2F3330] px-5 py-14 md:px-8 md:py-16">
      <img
        src={logoFundoImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[40px] h-[760px] w-[760px] opacity-[0.12] md:right-[-60px] md:h-[820px] md:w-[820px]"
      />

      <div className="mx-auto flex h-[905px] w-full items-center px-5 lg:px-[420px]">
        <div className="grid w-full grid-cols-[420px_580px] items-center gap-[80px]">
          <div className="flex h-[540.73px] flex-col justify-center text-white">
            <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#A8E63D]">
              Fale com a Consult
            </span>
            <h2 className="mt-4 max-w-[360px] font-heading text-[30px] font-bold leading-[1.06] text-white sm:text-[36px] lg:text-[42px]">
              Pronto para estruturar sua gestão de emergências?
            </h2>
            <p className="mt-4 max-w-[310px] font-body text-[14px] leading-6 text-[#B1B7B2] sm:text-[16px]">
              Conte seu cenário. Nossa equipe analisa e apresenta a solução mais aderente à sua operação.
            </p>

            <ul className="mt-8 space-y-[11px]">
              {[
                'Proposta personalizada para o seu cenário',
                'Retorno em até 24 horas úteis',
                'Sem compromisso na primeira conversa',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-[13px] leading-5 text-white/90">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2F4A16] bg-[#111714]">
                    <img src={verificadoImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-8 h-px w-full max-w-[300px] bg-white/8" />

            <div className="space-y-[11px] font-body text-[13px] text-[#E7EBE7]">
              <div className="flex items-center gap-3">
                <img src={telefoneImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                <span>(31) 97114-2878</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={emailImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                <span>contato@solverisolutions.com</span>
              </div>
            </div>
          </div>

          <div className="relative h-[766px] rounded-[16px] bg-[#1E2420] px-8 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            <h3 className="font-heading text-[18px] font-bold text-white">Solicite uma proposta</h3>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
              {[
                ['Nome completo *', 'Seu nome'],
                ['Empresa *', 'Nome da empresa'],
                ['Cargo *', 'Seu cargo'],
                ['Telefone *', '(00) 00000-0000'],
                ['E-mail corporativo *', 'email@empresa.com.br'],
              ].map(([label, placeholder], index) => (
                <label key={label} className={`flex flex-col ${index === 4 ? 'col-span-2' : ''}`}>
                  <span className="mb-2 font-body text-[11px] text-[#7F8A84]">{label}</span>
                  <div className="flex h-[52px] items-center rounded-[8px] border border-white/5 bg-[#262D29] px-4 font-body text-[13px] text-[#8E9792]">
                    {placeholder}
                  </div>
                </label>
              ))}

              <label className="col-span-2 flex flex-col">
                <span className="mb-2 font-body text-[11px] text-[#7F8A84]">Qual serviço te interessa? *</span>
                <div className="flex h-[52px] items-center justify-between rounded-[8px] border border-white/5 bg-[#262D29] px-4 font-body text-[13px] text-[#E7EBE7]">
                  <span>Selecione uma opção</span>
                  <span className="text-[#7F8A84]">⌄</span>
                </div>
              </label>

              <label className="col-span-2 flex flex-col">
                <span className="mb-2 font-body text-[11px] text-[#7F8A84]">Descreva brevemente seu cenário ou necessidade</span>
                <div className="flex min-h-[122px] items-start rounded-[8px] border border-white/5 bg-[#262D29] px-4 py-4 font-body text-[13px] text-[#8E9792]">
                  Conte-nos um pouco sobre o que busca...
                </div>
              </label>
            </div>

            <button
              type="button"
              className="mt-8 flex h-[34px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#A8E63D] font-heading text-[12px] font-bold uppercase text-[#111714] transition hover:bg-[#b8f24f]"
            >
              Enviar solicitação
              <ArrowRight size={14} />
            </button>

            <p className="mt-5 text-center font-body text-[11px] text-[#7F8A84]">
              Seus dados são tratados com segurança e sigilo total.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponseHero() {
  return (
    <section id="response" className="bg-[#A8E63D] px-5 pb-0 pt-[101px] md:px-8">
      <div className="relative mx-auto h-[610px] w-full max-w-[1344px] overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
        <img
          src={cardHeroResponseImage}
          alt="Solveri Response: prontidão operacional para ambientes de alta criticidade"
          className="block h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-[75px] left-[61px] flex gap-[30px]">
          <a
            href="#contato"
            className="inline-flex h-[50px] w-[260px] items-center justify-center rounded-[2px] bg-[#D4FF00] font-heading text-[16px] font-bold uppercase text-[#111714] transition hover:bg-[#c7f500]"
          >
            Solicitar proposta
          </a>
          <a
            href="#servicos"
            className="inline-flex h-[50px] w-[260px] items-center justify-center rounded-[2px] border border-[#111714] bg-transparent font-heading text-[16px] font-bold text-[#111714] transition hover:bg-[#111714] hover:text-white"
          >
            Conheça os serviços
          </a>
        </div>
      </div>
    </section>
  );
}

function ResponseHighlightCard() {
  return (
    <section className="bg-[#A8E63D] px-5 pb-[52px] pt-[57px] md:px-8">
      <div className="mx-auto grid h-[130px] w-full max-w-[1353px] grid-cols-7 overflow-hidden rounded-[7px] bg-white shadow-[0_14px_30px_rgba(15,32,23,0.08)]">
        {[
          'Visão\nGeral',
          'Emergências\nIndustriais',
          'Centrais\nProtocolares',
          'Mobilização\nde Equipes',
          'Simulados\ne Exercícios',
          'Postos de\nComando',
          'Profissionais\npara EORs',
        ].map((tab, index) => (
          <div
            key={tab}
            className={`relative flex h-full items-center justify-center px-3 text-center font-heading text-[20px] font-bold leading-[1.02] text-[#111714] ${
              index === 0 ? 'text-[#5E9401]' : ''
            }`}
          >
            {index > 0 && (
              <img
                src={linhaPretaImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-[3px] object-fill"
              />
            )}
            <span className="whitespace-pre-line">{tab}</span>
            {index === 0 && (
              <img
                src={linhaVerdeImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 h-[6px] w-[139px] -translate-x-1/2 object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ResponseActionSection() {
  return (
    <section className="bg-[#F9F9F7] px-5 py-[64px] md:px-8">
      <div className="mx-auto w-full max-w-[1340px] overflow-hidden rounded-[28px] bg-[#1A2218] shadow-[0_24px_60px_rgba(15,32,23,0.16)]">
        <div className="grid h-[611px] gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:px-0 lg:pl-[167.23px] lg:pr-[40px] lg:py-[56px]">
            <span className="font-heading text-[10px] font-bold uppercase tracking-[2.6px] text-accent-bright">
              A Unidade
            </span>

            <h2 className="mt-4 max-w-[360px] font-heading text-[28px] font-bold leading-[1.06] text-white sm:text-[34px] lg:text-[40px]">
              Execução prática e
              <br />
              prontidão operacional
              <br />
              em campo
            </h2>

            <p className="mt-4 max-w-[380px] font-body text-[14px] leading-6 text-[#B7BCB8] sm:text-[15px] lg:text-[16px]">
              Unidade operacional do grupo para resposta a eventos críticos com equipes, estruturas e apoio técnico especializado em ambientes de alta complexidade.
            </p>

            <a
              href="#contato"
              className="mt-8 inline-flex h-[47px] w-[214.34px] items-center justify-center gap-2 rounded-[2px] bg-[#A8E63D] px-5 font-heading text-[12px] font-bold uppercase text-[#111714] transition hover:bg-[#b5f04e]"
            >
              Solicitar proposta
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:px-0 lg:pr-[107.24px] lg:pl-[40px] lg:py-[65.01px]">
            <div className="relative w-full max-w-[528px] overflow-hidden rounded-[18px]">
              <img
                src={thumbnailResponseImage}
                alt="Thumbnail de operação em campo"
                className="h-[297.17px] w-full object-cover"
              />
              <img
                src={sombraThumbnailResponseImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
              <img
                src={playButtonImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="mt-3 flex items-center gap-2 text-[12px] text-[#B7BCB8]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Conheça a Solveri Response em ação</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['IAEM', 'NFPA', 'EOR', 'ICS/SCI'].map((item) => (
                <span
                  key={item}
                  className="inline-flex h-[25px] items-center rounded-[999px] border border-[#2F4A16] px-3 font-heading text-[10px] font-bold uppercase tracking-[0.08em] text-[#A8E63D]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#B7BCB8]">
                Ambientes de atuação
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Industrial', 'Mineração', 'Petroquímico', 'Logístico', 'Portuário', 'Florestal'].map((item) => (
                  <span
                    key={item}
                    className="inline-flex h-[25px] items-center rounded-[999px] border border-[#2F4A16] px-3 font-body text-[11px] text-[#A8E63D]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const responseDeliverablesCards = [
  {
    eyebrow: 'Emergências Industriais',
    title: 'Atendimento a Emergências Industriais',
    description:
      'Resposta a ocorrências de diferentes perfis e complexidade, garantindo a integridade dos ativos e a continuidade operacional.',
    bullets: [
      'Resposta rápida e protocolos de contenção',
      'Integração com planos de contingência',
      'Proteção ambiental e de infraestrutura',
      'Adaptável a diferentes cenários críticos',
    ],
    cta: 'Solicitar proposta',
    imageSrc: apagandoFogoImage,
    imageAlt: 'Equipe atuando em combate a incêndio industrial',
    reverse: false,
  },
  {
    eyebrow: 'Centrais Protocolares',
    title: 'Operação de Centrais de Atendimento Protocolar',
    description:
      'Estruturação e operação de centrais baseadas em protocolos rigorosos para triagem e direcionamento de crises.',
    bullets: [
      'Fluxos organizados para ativação imediata',
      'Registro adequado e rastreabilidade total',
      'Comunicação estruturada multicanal',
      'Rigor operacional e redução de falhas',
    ],
    cta: 'Solicitar proposta',
    imageSrc: salaReuniaoImage,
    imageAlt: 'Sala de reunião e atendimento protocolar',
    reverse: true,
  },
  {
    eyebrow: 'Mobilização de Equipes',
    title: 'Composição e Mobilização de Equipes de Resposta',
    description:
      'Estruturação, composição e mobilização de equipes de forma organizada para intervenções imediatas.',
    bullets: [
      'Definição de papéis e responsabilidades',
      'Ativação de recursos logísticos e técnicos',
      'Equipes preparadas para alta prontidão',
      'Aderência aos padrões de segurança industrial',
    ],
    cta: 'Solicitar proposta',
    imageSrc: bombeirosImage,
    imageAlt: 'Equipe de resposta mobilizada em campo',
    reverse: false,
  },
  {
    eyebrow: 'Simulados e Exercícios',
    title: 'Suporte Operacional em Simulados e Exercícios',
    description:
      'Apoio qualificado em simulados e exercícios práticos para testar a resiliência e prontidão das organizações.',
    bullets: [
      'Validação de planos de resposta e emergência',
      'Teste de capacidade operacional real',
      'Capacitação aplicada em cenários controlados',
      'Relatórios de melhoria contínua pós-exercício',
    ],
    cta: 'Solicitar proposta',
    imageSrc: bombeiros2Image,
    imageAlt: 'Exercício prático de resposta a incêndio',
    reverse: true,
  },
  {
    eyebrow: 'Postos de Comando',
    title: 'Postos de Comando, Salas de Situação e Centros de Coordenação',
    description:
      'Organização e operação de estruturas de comando para gestão centralizada de grandes ocorrências.',
    bullets: [
      'Gestão estruturada sob sistema de comando',
      'Tomada de decisão baseada em dados reais',
      'Integração entre múltiplos stakeholders',
      'Controle estratégico e tático em cenários complexos',
    ],
    cta: 'Solicitar proposta',
    imageSrc: cadeirasSalaImage,
    imageAlt: 'Sala de comando com estações e cadeiras alinhadas',
    reverse: false,
  },
  {
    eyebrow: 'Profissionais para EORs',
    title: 'Profissionais Credenciados para EORs Públicas e Privadas',
    description:
      'Disponibilização de profissionais altamente qualificados para integrar Estruturas Organizacionais de Resposta.',
    bullets: [
      'Profissionais credenciados e experientes',
      'Atuação em EORs de diversos níveis',
      'Composição técnica multidisciplinar',
      'Modelos organizacionais maduros e preparados',
    ],
    cta: 'Solicitar proposta',
    imageSrc: salaReuniao2Image,
    imageAlt: 'Profissionais reunidos em sala de resposta',
    reverse: true,
  },
];

function ResponseDeliverablesIntro() {
  return (
    <section className="bg-[#F9F9F7] px-5 pt-[40px] md:px-8">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
          Serviços
        </span>
        <h2 className="mt-4 max-w-[640px] font-heading text-[28px] font-bold leading-[1.08] text-[#0F2017] sm:text-[36px] lg:text-[42px]">
          O que a Solveri Response entrega
        </h2>
        <p className="mt-4 max-w-[640px] font-body text-[14px] leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
          Execução especializada em campo e em centrais para resposta a eventos críticos de alta complexidade.
        </p>
      </div>
    </section>
  );
}

function ResponseDeliverableCard({
  eyebrow,
  title,
  description,
  bullets,
  cta,
  imageSrc,
  imageAlt,
  reverse,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
}) {
  return (
    <article className="overflow-hidden bg-[#111714] shadow-[0_20px_50px_rgba(15,32,23,0.12)]">
      <div className={`grid h-[544px] gap-0 lg:grid-cols-2 ${reverse ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''}`}>
        <div className="relative h-full overflow-hidden">
          <img src={imageSrc} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
          <span
            className={`absolute top-4 z-10 inline-flex h-[18px] items-center bg-[#D4FF00] px-3 font-heading text-[9px] font-bold uppercase tracking-[0.08em] text-[#111714] ${
              reverse ? 'right-4' : 'left-4'
            }`}
          >
            Destaque
          </span>
        </div>

        <div className="flex h-full flex-col justify-center px-8 py-10 sm:px-10 lg:px-14 lg:py-12">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-accent-bright" style={{ fontFamily: 'Exo, sans-serif' }}>
            {eyebrow}
          </span>
          <h3 className="mt-3 max-w-[520px] font-heading text-[30px] font-bold leading-[1.08] text-white">
            {title}
          </h3>
          <p className="mt-4 max-w-[520px] font-body text-[16px] leading-6 text-[#AAB2AD]">
            {description}
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 font-body text-[16px] leading-5 text-[#B7BCB8]">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-accent-bright" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="mt-8 inline-flex w-fit items-center gap-2 font-heading text-[16px] font-bold text-accent-bright transition hover:text-white"
          >
            {cta}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ResponseDeliverablesSection() {
  return (
    <section className="bg-[#F9F9F7] px-5 pt-[40px] pb-[44px] md:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="space-y-0">
          {responseDeliverablesCards.map((card) => (
            <ResponseDeliverableCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResponseContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#5B5F5C] px-5 py-14 md:px-8 md:py-16 min-h-[905px]">
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <img src={logoFundoImage} alt="" aria-hidden="true" className="absolute right-[-30px] top-[-10px] h-[420px] w-auto object-contain" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1080px] items-center gap-10 lg:grid-cols-[420px_580px] lg:gap-[80px]">
        <div className="flex h-[540.73px] flex-col justify-center text-white">
          <span className="font-heading text-[11px] font-bold uppercase tracking-[2.4px] text-accent-bright" style={{ fontFamily: 'Exo, sans-serif' }}>
            Fale com a Solveri Response
          </span>
          <h2 className="mt-4 max-w-[360px] font-heading text-[38px] font-bold leading-[1.06] text-white">
            Pronto para estruturar sua gestão de emergências?
          </h2>
          <p className="mt-4 max-w-[310px] font-body text-[15px] leading-6 text-[#B1B7B2]">
            Conte seu cenário. Nossa equipe analisa e apresenta a solução mais aderente à sua operação.
          </p>

          <ul className="mt-8 space-y-[11px]">
            {[
              'Proposta personalizada para o seu cenário',
              'Retorno em até 24 horas úteis',
              'Sem compromisso na primeira conversa',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-[14px] leading-5 text-white/90">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2F4A16] bg-[#111714]">
                  <img src={checkImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="my-8 h-px w-full max-w-[300px] bg-white/8" />

          <div className="space-y-[11px] font-body text-[14px] text-[#E7EBE7]">
            <div className="flex items-center gap-3">
              <img src={telefoneImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
              <span>(31) 97114-2878</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={emailImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
              <span>contato@solverisolutions.com</span>
            </div>
          </div>
        </div>

        <div className="relative h-[766px] rounded-[16px] bg-[#1E2420] px-8 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
          <h3 className="font-heading text-[18px] font-bold text-white">Solicite uma proposta</h3>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
            {[
              ['Nome completo *', 'Seu nome'],
              ['Empresa *', 'Nome da empresa'],
              ['Cargo *', 'Seu cargo'],
              ['Telefone *', '(00) 00000-0000'],
              ['E-mail corporativo *', 'email@empresa.com.br'],
            ].map(([label, placeholder], index) => (
              <label key={label} className={`flex flex-col ${index === 4 ? 'col-span-2' : ''}`}>
                <span className="mb-2 font-body text-[11px] text-[#7F8A84]">{label}</span>
                <div className="flex h-[52px] items-center rounded-[8px] border border-white/5 bg-[#262D29] px-4 font-body text-[13px] text-[#8E9792]">
                  {placeholder}
                </div>
              </label>
            ))}

            <label className="col-span-2 flex flex-col">
              <span className="mb-2 font-body text-[11px] text-[#7F8A84]">Qual serviço te interessa? *</span>
              <div className="flex h-[52px] items-center justify-between rounded-[8px] border border-white/5 bg-[#262D29] px-4 font-body text-[13px] text-[#E7EBE7]">
                <span>Selecione uma opção</span>
                <span className="text-[#7F8A84]">⌄</span>
              </div>
            </label>

            <label className="col-span-2 flex flex-col">
              <span className="mb-2 font-body text-[11px] text-[#7F8A84]">Descreva brevemente seu cenário ou necessidade</span>
              <div className="flex min-h-[122px] items-start rounded-[8px] border border-white/5 bg-[#262D29] px-4 py-4 font-body text-[13px] text-[#8E9792]">
                Conte-nos um pouco sobre o que busca...
              </div>
            </label>
          </div>

          <button
            type="button"
            className="mt-8 flex h-[34px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#A8E63D] font-heading text-[12px] font-bold uppercase text-[#111714] transition hover:bg-[#b8f24f]"
          >
            Enviar solicitação
            <ArrowRight size={14} />
          </button>

          <p className="mt-5 text-center font-body text-[11px] text-[#7F8A84]">
            Seus dados são tratados com segurança e sigilo total.
          </p>
        </div>
      </div>
    </section>
  );
}

function AcademyHero() {
  const handleCoursesClick = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSpecialistClick = () => {
    window.location.href = 'mailto:contato@solverisolutions.com?subject=Contato%20Solveri%20Academy';
  };

  return (
    <section id="academy" className="relative overflow-hidden bg-[#0D1B14] px-5 pt-[159px] pb-[79px] md:px-8 min-h-[848px]">
      <div className="mx-auto w-full max-w-[1344px]">
        <div className="relative h-[610px] w-full overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
          <img
            src={cardHeroAcademyImage}
            alt="Solveri Academy"
            className="pointer-events-none h-full w-full object-cover object-center"
          />

          <button
            type="button"
            aria-label="Conheça os cursos"
            title="Conheça os cursos"
            onClick={handleCoursesClick}
            className="absolute bottom-[50px] left-[59px] h-[50px] w-[260px] rounded-[7px] border-0 bg-transparent p-0 outline-none transition focus-visible:ring-2 focus-visible:ring-accent-bright/70"
          />

          <button
            type="button"
            aria-label="Fale com um especialista"
            title="Fale com um especialista"
            onClick={handleSpecialistClick}
            className="absolute bottom-[50px] left-[350px] h-[50px] w-[260px] rounded-[7px] border-0 bg-transparent p-0 outline-none transition focus-visible:ring-2 focus-visible:ring-accent-bright/70"
          />
        </div>
      </div>
    </section>
  );
}

function AcademyOverviewSection() {
  const strategicItems = [
    'Formação de profissionais para atuação em Estruturas Organizacionais de Resposta (EOR)',
    'Cursos livres, capacitações corporativas e programas in company',
    'Credenciamento e recertificação periódica de profissionais',
    'Desenvolvimento de academias corporativas para clientes',
    'Elaboração de matrizes de competência e trilhas de formação',
    'Aplicação de avaliações teóricas, práticas e simulados operacionais',
    'Emissão de certificados, credenciais e registros de qualificação',
  ];

  const stats = [
    { value: '+2.000', label: 'profissionais capacitados' },
    { value: '11', label: 'áreas de formação' },
    { value: '3', label: 'modalidades de ensino' },
  ];

  return (
    <section className="bg-[#F9F9F7] px-5 pb-0 pt-[88px] md:px-8">
      <div className="mx-auto w-full max-w-[1340px]">
        <article className="overflow-hidden rounded-[24px] bg-[#111714] px-6 py-10 text-white shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:px-10 sm:py-12 lg:h-[731.5px] lg:px-[110px] lg:py-[72px]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[92px]">
            <div className="flex flex-col justify-between">
              <div className="max-w-[444px]">
                <span className="font-heading text-[11px] font-bold uppercase tracking-[2.4px] text-[#A8E63D]" style={{ fontFamily: 'Exo, sans-serif' }}>
                  A UNIDADE
                </span>
                <h2 className="mt-4 max-w-[430px] font-heading text-[44px] font-bold leading-[1.02] text-white" style={{ fontFamily: 'Exo, sans-serif' }}>
                  O braço educacional e de credenciamento do Grupo Solveri
                </h2>
                <p className="mt-5 max-w-[445px] font-body text-[15px] leading-7 text-[#B7BCB8]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  A Solveri Academy transforma conhecimento técnico em competência operacional validada. Cursos, trilhas de formação, credenciamento e recertificação de profissionais nas áreas de emergência, ICS/SCI, telecomunicações, SSMA e gestão de crises.
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-8">
                <div className="grid max-w-[486px] grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex h-[110px] w-[150.67px] flex-col justify-center rounded-[10px] border border-[#2C3C25] bg-[#162018] px-4 py-3">
                      <div className="font-heading text-[28px] font-bold leading-none text-[#A8E63D]" style={{ fontFamily: 'Exo, sans-serif' }}>
                        {stat.value}
                      </div>
                      <div className="mt-1 max-w-[90px] font-body text-[12px] leading-[1.2] text-[#B7BCB8]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="mt-8 inline-flex h-[47px] w-[187.13px] items-center justify-center gap-2 rounded-[4px] bg-[#A8E63D] px-5 font-heading text-[14px] font-bold text-[#111714] transition hover:bg-[#c8f000]"
                  style={{ fontFamily: 'Exo, sans-serif' }}
                >
                  Conheça os cursos
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="pt-[4px]">
                <span className="font-heading text-[11px] font-bold uppercase tracking-[2.4px] text-[#A8E63D]" style={{ fontFamily: 'Exo, sans-serif' }}>
                  Atribuições estratégicas
                </span>

                <ul className="mt-5 space-y-5">
                  {strategicItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] border border-[#314529] bg-[#1D2818]">
                        <span className="h-[8px] w-[8px] rounded-[2px] bg-[#A8E63D]" />
                      </span>
                      <span className="pt-[6px] font-body text-[14px] leading-[1.45] text-white/[0.88]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 border-t border-white/[0.08] pt-7">
                <span className="font-heading text-[11px] font-bold uppercase tracking-[2.4px] text-[#A8E63D]" style={{ fontFamily: 'Exo, sans-serif' }}>
                  Parceria e credenciamentos
                </span>

                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { label: 'IRCA Global Brasil', width: 'w-[148.05px]' },
                    { label: 'NFPA', width: 'w-[65.98px]' },
                    { label: 'IAEM', width: 'w-[63.83px]' },
                    { label: 'ICS/SCI', width: 'w-[81.92px]' },
                  ].map((badge) => (
                    <span
                      key={badge.label}
                      className={`inline-flex h-[34px] items-center justify-center rounded-full border border-[#2F4A16] bg-[#162018] px-3 font-body text-[13px] leading-none text-[#A8E63D] ${badge.width}`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

const academyCourseCards = [
  {
    eyebrow: 'Estratégia Operacional',
    title: 'ICS / SCI - Sistema de Comando de Incidentes',
    description:
      'O Sistema de Comando de Incidentes (ICS) é uma ferramenta de gerenciamento padronizada para preencher as demandas de situações de emergência ou não emergenciais de qualquer tamanho. O uso do ICS permite que seus usuários adotem uma estrutura organizacional integrada para suprir as complexidades e demandas de incidentes únicos ou múltiplos, sem serem prejudicados por limites jurisdicionais. Metodologia padronizada para o gerenciamento de resposta a incidentes críticos, garantindo comando único e eficiência operacional sob pressão extrema.',
    bulletsLeft: ['ICS 100 / 200', 'ICS 400 / 402'],
    bulletsRight: ['ICS 300 / 320', 'Planos de Ação'],
    modalities: ['Presencial', 'Híbrido'],
    cta: 'Solicitar informações',
    imageSrc: monitoresImage,
    imageAlt: 'Monitores com sistemas de comando',
    reverse: false,
  },
  {
    eyebrow: 'Comunicação Crítica',
    title: 'Telecomunicações e Centrais de Emergência',
    description:
      'A estrutura de comunicação é a espinha dorsal de qualquer resposta a emergência. Este módulo foca na operação técnica e tática de centrais de despacho, integração de sistemas de rádio e protocolos de comunicação crítica. Instruímos sobre fluxos de informação entre o campo e a central, garantindo que a tomada de decisão seja baseada em dados precisos e em tempo real. Essencial para operadores de central, supervisores e equipes de resposta que dependem de coordenação remota eficiente.',
    bulletsLeft: ['OTE & Despacho', 'Sistemas Digitais'],
    bulletsRight: ['Protocolos de Voz', 'Gestão de Estresse'],
    modalities: ['EAD', 'Híbrido'],
    cta: 'Solicitar informações',
    imageSrc: olhandoMonitoresImage,
    imageAlt: 'Operador olhando monitores',
    reverse: true,
  },
  {
    eyebrow: 'Conformidade Técnica',
    title: 'Cursos Técnicos, Operacionais e Normas Regulamentadoras',
    description:
      'Treinamentos técnicos especializados com foco total na conformidade legal (NRs) e excelência operacional. Cobrimos desde a formação de brigadas de incêndio até resgates de alta complexidade em espaços confinados e altura. O foco é a capacitação prática rigorosa, utilizando simuladores e cenários reais para garantir que o profissional esteja apto a executar suas funções com o máximo de segurança e eficiência técnica exigida pelo mercado industrial moderno.',
    bulletsLeft: ['NR-33 & NR-35', 'Brigada de Incêndio'],
    bulletsRight: ['Resgate Vertical', 'Primeiros Socorros'],
    modalities: ['Presencial'],
    cta: 'Solicitar informações',
    imageSrc: mochilasImage,
    imageAlt: 'Equipe com mochilas de treinamento',
    reverse: false,
  },
  {
    eyebrow: 'Excelência Operacional',
    title: 'Gestão SHEQ / SSMA',
    description:
      'Desenvolvimento de uma cultura robusta de Segurança, Saúde, Meio Ambiente e Qualidade. Este curso preparar líderes e gestores para implementar sistemas de gestão integrados que não apenas cumpram normas, mas elevem o desempenho operacional. Abordamos a liderança servidora, ferramentas de auditoria comportamental e a gestão de KPIs de segurança, transformando o SSMA em um centro de custo em um pilar de valor estratégico para a organização.',
    bulletsLeft: ['ISO 45001 & 14001', 'Gestão de Desempenho'],
    bulletsRight: ['Liderança em SSMA', 'Cultura de Segurança'],
    modalities: ['EAD', 'Presencial'],
    cta: 'Solicitar informações',
    imageSrc: mesaECadeirasImage,
    imageAlt: 'Mesa e cadeiras em ambiente corporativo',
    reverse: true,
  },
  {
    eyebrow: 'Governança e Controle',
    title: 'Auditorias, Conformidade e Melhoria de Processos',
    description:
      'Um mergulho profundo nos mecanismos de verificação e planos de ação necessários para manter a integridade organizacional. Este treinamento foca no desenvolvimento de auditores internos capazes de identificar desvios sistêmicos e propor melhorias contínuas. Trabalhamos com frameworks de compliance para garantir a conformidade legal e o aumento gradual da maturidade operacional, assegurando que os processos internos sejam resilientes e auditáveis a qualquer momento.',
    bulletsLeft: ['Auditoria Interna', 'Planos de Ação (PDCA)'],
    bulletsRight: ['Compliance Legal', 'Maturidade de Processos'],
    modalities: ['Híbrido'],
    cta: 'Solicitar informações',
    imageSrc: graficosImage,
    imageAlt: 'Gráficos e análise corporativa',
    reverse: false,
  },
  {
    eyebrow: 'Prevenção e Prontidão',
    title: 'Análise de Riscos e Preparação para Emergências',
    description:
      'Identificação proativa e mitigação de perigos operacionais. Este módulo ensina as metodologias de análise de risco mais avançadas (APR, HAZOP, What-If) e como transformá-las em planos de emergência eficazes. Focamos no desenvolvimento de cenários de crise e na organização de simulados que testam a real capacidade de resposta da equipe. A prevenção é tratada como um processo dinâmico de antecipação do erro, salvaguardando vidas e ativos críticos.',
    bulletsLeft: ['APR & HAZOP', 'Planos de Contingência'],
    bulletsRight: ['Gestão de Mudanças', 'Simulados Práticos'],
    modalities: ['EAD'],
    cta: 'Solicitar informações',
    imageSrc: analiseImage,
    imageAlt: 'Análise de riscos em tela',
    reverse: true,
  },
  {
    eyebrow: 'Aprendizado Organizacional',
    title: 'Investigação e Análise de Incidentes',
    description:
      'Transformando falhas em oportunidades de aprendizado e crescimento. Ensinamos técnicas forenses e metodologias de análise de causa raiz (Fishbone, 5 Whys, Árvore de Falhas) para desvendar a cadeia de eventos de um incidente. O foco não é culpar, mas entender as defesas do sistema que falharam. Ao final, o aluno estará apto a redigir relatórios técnicos precisos e implementar barreiras robustas que evitam a recorrência de incidentes similares no futuro.',
    bulletsLeft: ['Causa Raiz', 'Lições Aprendidas'],
    bulletsRight: ['Fatores Humanos', 'Relatórios Técnicos'],
    modalities: ['Híbrido'],
    cta: 'Solicitar informações',
    imageSrc: droneImage,
    imageAlt: 'Drone em operação de monitoramento',
    reverse: false,
  },
  {
    eyebrow: 'Compliance Jurídico',
    title: 'Responsabilidades, Impactos Jurídicos e Governança',
    description:
      'O conhecimento jurídico é fundamental para a proteção de gestores e da organização em casos de incidentes críticos. Este curso aborda as esferas de responsabilidade civil, criminal e administrativa no contexto industrial. Discutimos a importância da geração de evidências, a governança de dados de segurança e como se preparar juridicamente para auditorias externas e processos judiciais. Segurança jurídica é tratada como um componente estratégico da continuidade de negócios.',
    bulletsLeft: ['Resp. Civil e Penal', 'Provas e Perícias'],
    bulletsRight: ['Direito Ambiental', 'Compliance Interno'],
    modalities: ['EAD'],
    cta: 'Solicitar informações',
    imageSrc: livrosImage,
    imageAlt: 'Livros e mesa de estudo',
    reverse: true,
  },
  {
    eyebrow: 'Sustentabilidade',
    title: 'Meio Ambiente e Resposta a Eventos Ambientais',
    description:
      'Gestão integrada de riscos ambientais com foco na prevenção de vazamentos, contaminações e impactos à biodiversidade. Preparamos equipes para a primeira resposta a incidentes ambientais, utilizando protocolos de contenção e remediação. Além do técnico, abordamos a conscientização ambiental como valor corporativo, integrando os objetivos de ESG (Environmental, Social, and Governance) à rotina operacional diária para garantir uma operação sustentável e de baixo impacto.',
    bulletsLeft: ['Resíduos e Efluentes', 'Legislação Ambiental'],
    bulletsRight: ['Contenção de Spill', 'Monitoramento'],
    modalities: ['Presencial'],
    cta: 'Solicitar informações',
    imageSrc: tanquesImage,
    imageAlt: 'Tanques industriais e meio ambiente',
    reverse: false,
  },
  {
    eyebrow: 'Desenvolvimento Humano',
    title: 'Habilidades, Liderança e Desenvolvimento Profissional',
    description:
      'O fator humano é o elo mais importante em qualquer sistema de segurança. Este curso foca nas "soft skills" necessárias para a gestão de crises: comunicação assertiva, tomada de decisão sob pressão, gestão de conflitos e inteligência emocional. Trabalhamos o conceito de accountability (responsabilização), inspirando profissionais a serem donos de seus processos e líderes natos, independentemente de seus cargos, criando uma rede de confiança técnica e comportamental.',
    bulletsLeft: ['Inteligência Emocional', 'Postura Profissional'],
    bulletsRight: ['Gestão de Crise', 'Accountability'],
    modalities: ['Híbrido'],
    cta: 'Solicitar informações',
    imageSrc: reuniaoMonitoresImage,
    imageAlt: 'Reunião com monitores e telas',
    reverse: true,
  },
  {
    eyebrow: 'Cultura Organizacional',
    title: 'Conscientização Corporativa',
    description:
      'A disseminação de uma cultura de segurança requer consistência e criatividade. Este programa desenvolve campanhas de conscientização personalizadas que ressaltam com a realidade da operação. Focamos na percepção de riscos aplicada ao dia a dia, transformando o conceito abstrato de "segurança" em hábitos tangíveis e observáveis. Trabalhamos a comunicação interna para que a cultura de segurança seja vista como um valor compartilhado por todos, do chão de fábrica à alta diretoria.',
    bulletsLeft: ['Campanhas de Segurança', 'Engajamento Operacional'],
    bulletsRight: ['Percepção de Risco', 'Mindset Preventivo'],
    modalities: ['Presencial', 'EAD'],
    cta: 'Solicitar informações',
    imageSrc: telaoImage,
    imageAlt: 'Telão em auditório',
    reverse: false,
  },
];

function AcademyCoursesIntro() {
  return (
    <section className="bg-[#F9F9F7] px-5 pt-[40px] md:px-8">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
          Cursos
        </span>
        <h2 className="mt-4 max-w-[540px] font-heading text-[42px] font-bold leading-[1.04] text-[#0F2017]">
          Formação técnica para cada nível de atuação
        </h2>
        <p className="mt-4 max-w-[520px] font-body text-[16px] font-normal leading-7 text-[#6F7370]">
          Programas presenciais, EAD e híbridos com foco em aplicação real e alto padrão técnico.
        </p>
      </div>
    </section>
  );
}

function AcademyCourseCard({
  eyebrow,
  title,
  description,
  bulletsLeft,
  bulletsRight,
  modalities,
  cta,
  imageSrc,
  imageAlt,
  reverse,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bulletsLeft: string[];
  bulletsRight: string[];
  modalities: string[];
  cta: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
}) {
  return (
    <article className="overflow-hidden border-b border-white/10 bg-[#111714] shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
      <div className={`grid h-[774.72px] lg:grid-cols-2 ${reverse ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''}`}>
        <div className="relative min-h-[320px] overflow-hidden">
          <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover object-center" />
        </div>

        <div className="flex flex-col justify-between px-[58px] py-[56px] lg:px-[64px] lg:py-[56px]">
          <div>
            <span className="font-heading text-[12px] font-bold uppercase tracking-[2.4px] text-[#A8E63D]" style={{ fontFamily: 'Exo, sans-serif' }}>
              {eyebrow}
            </span>
            <h3 className="mt-4 max-w-[530px] font-heading text-[42px] font-bold leading-[1.03] text-white" style={{ fontFamily: 'Exo, sans-serif' }}>
              {title}
            </h3>
            <p className="mt-5 max-w-[585px] font-body text-[16px] leading-7 text-[#B7BCB8]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {description}
            </p>

            <div className="mt-8">
              <span className="font-body text-[11px] font-medium uppercase tracking-[1.8px] text-[#98A5A0]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Conteúdo Programático Completo
              </span>

              <div className="mt-5 grid gap-x-12 gap-y-3 sm:grid-cols-2">
                {[bulletsLeft, bulletsRight].map((column, columnIndex) => (
                  <ul key={columnIndex} className="space-y-4">
                    {column.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-[#A8E63D]" />
                        <span className="font-body text-[14px] leading-6 text-[#DDE2DE]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="font-body text-[11px] font-medium uppercase tracking-[1.8px] text-[#98A5A0]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Modalidades Disponíveis
              </span>

              <div className="mt-4 flex flex-wrap gap-3">
                {modalities.map((item) => {
                  const widthClass =
                    item === 'Presencial'
                      ? 'w-[96.78px]'
                      : item === 'Híbrido'
                        ? 'w-[77.39px]'
                        : item === 'EAD'
                          ? 'w-[48px]'
                          : 'w-auto';
                  return (
                    <span
                      key={item}
                      className={`inline-flex h-[29px] items-center justify-center rounded-full border border-[#2F4A16] bg-[#1B231A] px-3 font-body text-[10px] font-medium uppercase tracking-[0.9px] text-[#D9E2DB] ${widthClass}`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <a
            href="#contato"
            className="mt-8 inline-flex w-fit items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-[0.7px] text-white transition hover:text-[#A8E63D]"
            style={{ fontFamily: 'Exo, sans-serif' }}
          >
            {cta}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

function AcademyCoursesSection() {
  return (
    <section className="bg-[#F9F9F7] px-5 pb-[44.24px] md:px-8">
      <AcademyCoursesIntro />

      <div className="mx-auto mt-[40px] w-full max-w-[1631px]">
        {academyCourseCards.map((card) => (
          <AcademyCourseCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

function SegmentCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <article className="flex h-[190px] flex-col justify-between rounded-[8px] bg-[#111714] px-6 py-5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
      <img src={icon} alt="" aria-hidden="true" className="h-12 w-12 object-contain" />
      <div className="max-w-[340px]">
        <h3 className="font-sans text-[20px] font-bold leading-[1.05]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {title}
        </h3>
        <p className="mt-2 font-body text-[14px] leading-6 text-[#AAB2AD]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          {description}
        </p>
      </div>
    </article>
  );
}

function SegmentSection() {
  return (
    <section id="segmento" className="bg-[#DEE4DD] px-5 pt-[100px] pb-[25px] md:px-8 min-h-[950px]">
      <div className="mx-auto w-full max-w-[1344px]">
        <img
          src={cardHeroSegmentoImage}
          alt="Solveri Segmento"
          className="block h-[610px] w-full rounded-[24px] object-cover object-center shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
        />

        <div className="mt-[25px] grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
          <SegmentCard
            icon={mineracaoIcon}
            title="Mineração"
            description="Protocolos de segurança críticos para operações subterrâneas e a céu aberto."
          />
          <SegmentCard
            icon={energiaIcon}
            title="Energia"
            description="Gestão de riscos em infraestruturas de alta tensão e plantas de geração."
          />
          <SegmentCard
            icon={logisticaIcon}
            title="Logística"
            description="Otimização de rotas e segurança operacional em grandes fluxos de carga."
          />
        </div>
      </div>
    </section>
  );
}

const segmentCards = [
  {
    image: segmentoImage1,
    title: 'Mineração',
    description: 'Controle rigoroso de perigos e protocolos de segurança em minas subterrâneas.',
    tags: ['Consult', 'Response'],
  },
  {
    image: segmentoImage2,
    title: 'Óleo e Gás',
    description: 'Planos de emergência para exploração offshore e refinarias de alta complexidade.',
    tags: ['Response', 'Academy'],
  },
  {
    image: segmentoImage3,
    title: 'Química',
    description: 'Gestão de produtos perigosos e prevenção contra incidentes químicos industriais.',
    tags: ['Consult', 'Response'],
  },
  {
    image: segmentoImage4,
    title: 'Siderurgia',
    description: 'Segurança ocupacional e resposta em ambientes de alta temperatura e fundição.',
    tags: ['Academy'],
  },
  {
    image: segmentoImage5,
    title: 'Energia',
    description: 'Proteção de ativos críticos e gestão de crises em redes de distribuição.',
    tags: ['Consult', 'Response'],
  },
  {
    image: segmentoImage6,
    title: 'Logística',
    description: 'Segurança no transporte multimodal de cargas sensíveis e gestão portuária.',
    tags: ['Consult', 'Response'],
  },
  {
    image: segmentoImage7,
    title: 'Papel e Celulose',
    description: 'Compliance ambiental e prevenção de incêndios em grandes complexos industriais.',
    tags: ['Consult', 'Academy'],
  },
  {
    image: segmentoImage8,
    title: 'Ferrovias',
    description: 'Prontidão operacional e resposta a descarrilamentos e emergências em via férrea.',
    tags: ['Response'],
  },
  {
    image: segmentoImage9,
    title: 'Agronegócio',
    description: 'Continuidade de negócios e segurança em silos e plantas de processamento.',
    tags: ['Consult', 'Academy'],
  },
  {
    image: segmentoImage10,
    title: 'Órgãos Públicos',
    description: 'Consultoria em defesa civil e estruturação de centros de comando de crises.',
    tags: ['Consult', 'Response', 'Academy'],
  },
];

function SegmentTag({ label }: { label: string }) {
  const width = label === 'Academy' ? '58.66px' : label === 'Response' ? '61.06px' : '55.52px';

  return (
    <span
      className="inline-flex h-[19px] shrink-0 items-center justify-center whitespace-nowrap rounded-[2px] border border-[#4B5731] bg-[#222A1F] p-0 text-[10px] font-bold uppercase leading-none tracking-[0.9px] text-[#BFFF54]"
      style={{ width, fontFamily: 'Space Grotesk, sans-serif' }}
    >
      {label}
    </span>
  );
}

function SegmentGridSection() {
  return (
    <section className="bg-[#0F2017] px-5 pb-[44.24px] pt-[64px] md:px-8">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#A8E63D]">
          ONDE ATUAMOS
        </span>
        <h2 className="mt-[27px] max-w-[620px] font-heading text-[42px] font-bold leading-[1.05] text-white">
          Segmentos de atuação do Grupo Solveri
        </h2>
        <p className="mt-[27px] max-w-[620px] font-body text-[16px] font-normal leading-7 text-[#B0B8B4]">
          Soluções em gestão de riscos, emergências e crises para os setores que mais exigem preparo operacional, conformidade e capacidade de resposta.
        </p>
      </div>

      <div className="mx-auto mt-[138px] grid w-fit max-w-full grid-cols-1 gap-x-[25px] gap-y-[25px] sm:grid-cols-2 xl:grid-cols-5">
        {segmentCards.map((card) => (
          <article key={card.title} className="flex h-[434.2px] w-[243.8px] flex-col overflow-hidden rounded-[16px] bg-[#1A2218] shadow-[0_16px_36px_rgba(0,0,0,0.2)]">
            <img src={card.image} alt={card.title} className="h-[200px] w-full object-cover" />
            <div className="flex flex-1 flex-col px-[25px] pt-5 pb-4">
              <h3 className="font-sans text-[20px] font-bold leading-[1.1] text-[#DEE4DD]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {card.title}
              </h3>
              <p className="mt-[11.2px] max-w-[200px] font-body text-[13px] leading-[1.45] text-[#A7ACA9]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {card.description}
              </p>
              <div className="mt-[23.4px] flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <SegmentTag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-[64px] w-full max-w-[1344px] rounded-[20px] bg-[#DEE4DD] px-6 py-10 text-center text-[#0F2017] shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:px-8 sm:py-12">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#6BA900]">
          Seu segmento não está aqui?
        </span>
        <h2 className="mx-auto mt-4 max-w-[640px] font-heading text-[42px] font-bold leading-[1.06]">
          A Solveri atende operações de qualquer porte e setor
        </h2>
        <p className="mx-auto mt-[27px] max-w-[520px] font-body text-[16px] font-normal leading-7 text-[#6F7370]">
          Se a sua operação exige preparo real em gestão de riscos, emergências ou crises, nossa equipe analisa o seu cenário e apresenta a solução mais aderente.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#contato"
            className="inline-flex h-[40px] items-center justify-center rounded-[4px] bg-[#A8E63D] px-5 font-heading text-[15px] font-bold text-[#0F2017] transition hover:bg-[#c7f500]"
          >
            Fale com nossa equipe
          </a>
          <a
            href="#servicos"
            className="inline-flex h-[40px] items-center justify-center rounded-[4px] border border-[#0F2017]/25 px-5 font-heading text-[15px] font-bold text-[#0F2017] transition hover:bg-[#0F2017] hover:text-white"
          >
            Conheça nossas soluções
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactHero() {
  return (
    <section id="contato" className="bg-[#F9F9F7] px-5 pt-[140px] pb-[60px] md:px-8">
      <div className="mx-auto w-full max-w-[1344px]">
        <img
          src={cardHeroContatoImage}
          alt="Solveri Contato"
          className="block h-[610px] w-full rounded-[24px] object-cover object-center shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
        />
      </div>
    </section>
  );
}

function ContactSection() {
  const contactItems = [
    { label: 'Telefone', value: '+55 (31) 97114-2878', icon: Phone },
    { label: 'Email', value: 'contato@solverigroup.com', icon: Mail },
    { label: 'Endereço', value: 'Av. Alberto Lima, 3001 - sala 12 - João Monlevade - MG', icon: Building2 },
    { label: 'Site', value: 'www.solverigroup.com', icon: ArrowRight },
  ];

  const units = [
    { title: 'Consult', description: 'Consultoria estratégica em riscos industriais e operacionais.' },
    { title: 'Response', description: 'Gestão de crises e resposta rápida a incidentes críticos.' },
    { title: 'Academy', description: 'Treinamento técnico e certificações de alta performance.' },
  ];

  return (
    <section className="bg-[#0A0E0C] px-5 py-0 text-white md:px-8">
      <div className="mx-auto grid h-[1087px] w-full max-w-[1344px] items-start gap-12 py-[140px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="max-w-[420px]">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[2.6px] text-[#A8E63D]">
            Informações de contato
          </span>

          <div className="mt-8 space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] border border-[#314529] bg-[#141A16] text-[#A8E63D]">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="font-body text-[10px] font-medium uppercase tracking-[1.8px] text-[#7F8A84]">
                      {item.label}
                    </div>
                    <div className="mt-1 max-w-[320px] font-heading text-[14px] font-bold leading-5 text-white">
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14">
            <span className="font-heading text-[10px] font-bold uppercase tracking-[2.6px] text-[#A8E63D]">
              Nossas unidades
            </span>

            <div className="mt-6 space-y-3">
              {units.map((unit) => (
                <div key={unit.title} className="rounded-[4px] border-l-2 border-[#A8E63D] bg-[#141A16] px-4 py-4">
                  <strong className="block font-heading text-[14px] font-bold text-white">
                    {unit.title}
                  </strong>
                  <p className="mt-1 max-w-[280px] font-body text-[12px] leading-5 text-[#AAB2AD]">
                    {unit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[10px] border border-white/10 bg-[#1E2420] px-6 py-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:px-8 sm:py-8">
          <h3 className="font-heading text-[18px] font-bold text-white">Solicite um atendimento</h3>
          <p className="mt-2 max-w-[340px] font-body text-[12px] leading-5 text-[#7F8A84]">
            Preencha o formulário e nossa equipe retorna em até 24 horas úteis.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ['Nome completo', 'Ex: João Silva'],
              ['Empresa', 'Nome da sua organização'],
              ['Cargo', 'Sua função'],
              ['Telefone', '(00) 00000-0000'],
            ].map(([label, placeholder]) => (
              <label key={label} className="block">
                <span className="mb-2 block font-body text-[10px] uppercase tracking-[1.3px] text-[#7F8A84]">{label}</span>
                <div className="flex h-[52px] items-center rounded-[2px] border border-white/5 bg-[#262D29] px-4 font-body text-[13px] text-[#8E9792]">
                  {placeholder}
                </div>
              </label>
            ))}
          </div>

          <div className="mt-4">
            <label className="block">
              <span className="mb-2 block font-body text-[10px] uppercase tracking-[1.3px] text-[#7F8A84]">E-mail corporativo</span>
              <div className="flex h-[52px] items-center rounded-[2px] border border-white/5 bg-[#262D29] px-4 font-body text-[13px] text-[#8E9792]">
                seuemail@empresa.com.br
              </div>
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              ['Qual unidade te interessa?', 'Selecione uma opção'],
              ['Como podemos ajudar?', 'Selecione o motivo'],
            ].map(([label, placeholder]) => (
              <label key={label} className="block">
                <span className="mb-2 block font-body text-[10px] uppercase tracking-[1.3px] text-[#7F8A84]">{label}</span>
                <div className="flex h-[52px] items-center justify-between rounded-[2px] border border-white/5 bg-[#262D29] px-4 font-body text-[13px] text-[#E7EBE7]">
                  <span>{placeholder}</span>
                  <span className="text-[#7F8A84]">⌄</span>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-4">
            <label className="block">
              <span className="mb-2 block font-body text-[10px] uppercase tracking-[1.3px] text-[#7F8A84]">
                Descreva brevemente seu cenário ou necessidade
              </span>
              <div className="flex min-h-[96px] items-start rounded-[2px] border border-white/5 bg-[#262D29] px-4 py-4 font-body text-[13px] text-[#8E9792]">
                Conte-nos um pouco mais sobre o seu projeto...
              </div>
            </label>
          </div>

          <button
            type="button"
            className="mt-6 flex h-[34px] w-full items-center justify-center rounded-[2px] bg-[#BFFF54] font-heading text-[12px] font-bold uppercase text-[#0F2017] transition hover:bg-[#c8f86b]"
          >
            Enviar mensagem
          </button>
        </div>
      </div>
    </section>
  );
}

function ServicesIntro() {
  return (
    <section className="bg-[#F9F9F7] px-5 pb-14 pt-0 md:px-8 md:pb-16">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
          Serviços
        </span>
        <h2 className="mt-4 max-w-[520px] font-heading text-[28px] font-bold leading-[1.08] text-[#0F2017] sm:text-[36px] lg:text-[42px]">
          Três frentes, uma atuação integrada
        </h2>
        <p className="mt-4 max-w-[430px] font-body text-[14px] leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
          Consultoria estratégica, resposta operacional e capacitação técnica conectadas para fortalecer a preparação da sua operação.
        </p>
      </div>
    </section>
  );
}

const serviceShowcaseCards = [
  {
    eyebrow: 'Consult',
    title: 'Estruturação estratégica de sistemas de emergência e crise',
    description:
      'Diagnóstico, planejamento e reestruturação de sistemas de gestão de emergências e crises para empresas e instituições que precisam estruturar ou aperfeiçoar seus mecanismos de prevenção, preparação, resposta e recuperação.',
    bulletsLeft: [
      'PAE / PEV / PEVO / PAEBM',
      'Planos de contingência e gestão de crises',
      'Análise e reestruturação de processos',
      'Modelagem de estruturas de resposta',
    ],
    bulletsRight: [
      'Centrais de atendimento protocolar',
      'Protocolos e matrizes de acionamento',
      'Integração com órgãos públicos e equipes internas',
      'Visão de ciclo completo: prevenção a recuperação',
    ],
    cta: 'Conheça a Solveri Consult',
    imageSrc: sentadosImage,
    imageAlt: 'Sala de reunião e planejamento de emergência',
    reverse: false,
  },
  {
    eyebrow: 'Response',
    title: 'Prontidão operacional para ambientes de alta criticidade',
    description:
      'Equipes, estruturas e apoio técnico especializado para resposta a eventos críticos em ambientes industriais, minerários, petroquímicos, logísticos e portuários.',
    bulletsLeft: [
      'Emergências industriais',
      'Telecomunicações de emergência',
      'Simulados e exercícios',
      'Atendimento pré-hospitalar e combate a incêndio',
    ],
    bulletsRight: [
      'Centrais de atendimento protocolar',
      'Mobilização de equipes de resposta',
      'Postos de comando e salas de situação',
      'Profissionais credenciados para EORs',
    ],
    cta: 'Conheça a Solveri Response',
    imageSrc: bombeirosInicioImage,
    imageAlt: 'Equipe em operação de resposta',
    reverse: true,
  },
  {
    eyebrow: 'Academy',
    title: 'Formação técnica, aplicação real',
    description:
      'Programas presenciais, EAD e híbridos em ICS/SCI, Normas Regulamentadoras, SSMA e gestão de emergências para equipes operacionais e lideranças.',
    bulletsLeft: [
      'ICS / SCI no-402',
      'NR-10 / 20 / 22 / 33 / 35',
      'Análise de riscos',
      'Responsabilidades jurídicas',
    ],
    bulletsRight: [
      'OTE - Telecomunicações em Emergência',
      'Gestão SHEQ / SSMA',
      'Investigação de incidentes',
      'Parceria IRCA Global Brasil',
    ],
    cta: 'Conheça a Solveri Academy',
    imageSrc: socorrendoImage,
    imageAlt: 'Equipe em treinamento técnico',
    reverse: false,
  },
];

function ServiceCard({
  eyebrow,
  title,
  description,
  bulletsLeft,
  bulletsRight,
  cta,
  imageSrc,
  imageAlt,
  reverse,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bulletsLeft: string[];
  bulletsRight: string[];
  cta: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-[28px] bg-[#0A0E0C] shadow-[0_20px_50px_rgba(15,32,23,0.12)]">
      <div className={`grid h-auto min-h-[550px] gap-0 lg:grid-cols-2 ${reverse ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''}`}>
        <div className="relative min-h-[260px] overflow-hidden lg:min-h-full lg:px-0 lg:py-[45px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover lg:left-0 lg:top-[45px] lg:h-[460px] lg:w-[530px]"
          />
          <div className="absolute inset-0 bg-black/12" />
        </div>

        <div className="flex flex-col justify-between px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-10">
          <div>
            <span className="inline-flex h-[25px] w-[157.63px] items-center rounded-[2px] border border-[#2F4A16] px-2 font-heading text-[10px] font-bold uppercase tracking-[1.3px] text-accent-bright" style={{ fontFamily: 'Exo, sans-serif' }}>
              {eyebrow}
            </span>
            <h3 className="mt-3 max-w-[560px] font-heading text-[30px] font-bold leading-[1.08] text-white" style={{ fontFamily: 'Exo, sans-serif' }}>
              {title}
            </h3>
            <p className="mt-4 max-w-[650px] font-body text-[16px] leading-6 text-[#AAB2AD]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {description}
            </p>

            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[bulletsLeft, bulletsRight].map((column, index) => (
                <ul key={index} className="space-y-2">
                  {column.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-[14px] leading-5 text-[#B7BCB8]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-accent-bright" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <a
            href="#contato"
            className="mt-8 inline-flex h-[50px] w-[287.66px] items-center justify-center gap-2 rounded-[2px] border border-[#2F4A16] px-5 font-heading text-[16px] font-bold text-accent-bright transition hover:border-accent-bright hover:bg-accent-bright hover:text-accent-foreground"
            style={{ fontFamily: 'Exo, sans-serif' }}
          >
            {cta}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-[#F9F9F7] px-5 pb-20 pt-0 md:px-8 md:pb-24">
      <div className="mx-auto w-full max-w-[1344px] space-y-8">
        {serviceShowcaseCards.map((card) => (
          <ServiceCard key={card.eyebrow} {...card} />
        ))}
      </div>
    </section>
  );
}

function EsgBanner() {
  return (
    <section className="bg-[#0A0E0C] px-5 py-0 text-white md:px-8">
      <div className="mx-auto grid h-[544px] w-full max-w-[1344px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="max-w-[520px]">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[2.6px] text-accent-bright">
            Compromisso ESG
          </span>
          <h2 className="mt-4 max-w-[460px] font-heading text-[28px] font-bold leading-[1.08] text-white sm:text-[36px] lg:text-[40px]">
            Gestão de riscos com responsabilidade ambiental
          </h2>
          <p className="mt-4 max-w-[450px] font-body text-[14px] leading-6 text-[#AAB2AD] sm:text-[15px] sm:leading-7">
            A Solveri integra governança, sustentabilidade e segurança operacional em cada solução. Proteger pessoas, preservar o meio ambiente e garantir a continuidade do negócio são pilares inegociáveis da nossa atuação.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['Gestão de riscos', 'Governança', 'Continuidade operacional', 'Proteção ambiental'].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#294014] bg-[#111712] px-4 py-2 font-body text-[12px] text-[#B5CC3B]"
              >
                {pill}
              </span>
            ))}
          </div>

          <a
            href="#contato"
            className="mt-8 inline-flex items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-[0.48px] text-accent-bright transition hover:text-white"
          >
            Conheça nossa atuação ESG
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="relative h-[320px] overflow-hidden lg:h-[440px]">
          <img
            src={paisagemImage}
            alt="Paisagem natural com rio e vegetação"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Presence() {
  return (
    <section id="segmentos" className="bg-[#F9F9F7] px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
          Presença nacional
        </span>
        <h2 className="mt-4 max-w-[620px] font-heading text-[28px] font-bold leading-[1.08] text-[#0F2017] sm:text-[36px] lg:text-[42px]">
          Atuação em 10 estados brasileiros
        </h2>
        <p className="mt-4 max-w-[600px] font-body text-[14px] leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
          Presença em estados estratégicos para operações industriais, minerárias, energéticas e logísticas, com capacidade de expansão nacional.
        </p>
      </div>

      <div className="mx-auto mt-10 h-auto w-full max-w-[1340px] overflow-hidden rounded-[28px] bg-[#0A0E0C] px-6 py-6 text-white shadow-[0_20px_50px_rgba(15,32,23,0.12)] sm:px-8 sm:py-8 lg:h-[640px] lg:px-10 lg:py-10">
        <div className="grid h-full gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="relative flex items-center justify-center overflow-hidden rounded-[22px] bg-[#0E1310] p-4">
            <img
              src={mapaBrasilImage}
              alt="Mapa do Brasil com estados atendidos"
              className="h-full w-full max-h-[536px] object-contain"
            />
          </div>

          <div className="flex h-full flex-col justify-between py-1">
            <div>
              <h3 className="font-heading text-[20px] font-bold leading-tight text-white sm:text-[22px]">
                O que entregamos nesses estados
              </h3>
              <ul className="mt-7 space-y-4">
                {[
                  'Treinamentos especializados',
                  'Consultorias prestadas',
                  'Gestão de crises',
                  'Desenvolvimento de planos e protocolos',
                  'Estruturação de centrais de emergência',
                  'Capacitação de equipes e lideranças',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 font-body text-[15px] leading-5 text-[#D9DDD9]">
                    <img src={overlayBorderImage} alt="" aria-hidden="true" className="h-7 w-7 shrink-0 object-contain" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 max-w-[434px] self-start">
              <img
                src={statCardImage}
                alt="10 estados da federação com capacidade de expansão nacional"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerShowcase() {
  const cards = [
    {
      logo: ircaLogo,
      title: 'IRCA Global Brasil',
      description:
        'Parceria educacional para formação e credenciamento de profissionais em gestão de riscos, auditorias e SSMA.',
    },
    {
      logo: advancedLogo,
      title: 'Advanced',
      description:
        'Parceria estratégica para fortalecimento de capacidades operacionais em gestão de emergências de grande porte.',
    },
  ];

  return (
    <section className="bg-[#111714] px-5 py-20 text-white md:px-8 md:py-24">
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-accent-bright">
          Parceiros
        </span>
        <h2 className="mt-4 max-w-[780px] font-heading text-[28px] font-bold leading-[1.08] text-white sm:text-[36px] lg:text-[42px]">
          Conexões que ampliam a nossa entrega
        </h2>
        <p className="mt-4 max-w-[670px] font-body text-[14px] leading-6 text-[#B1B7B2] sm:text-[16px] sm:leading-7">
          Parcerias estratégicas que reforçam a capacidade técnica, educacional e consultiva da Solveri.
        </p>

        <div className="mt-10 grid w-full max-w-[520px] gap-5 lg:max-w-[760px] lg:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title} className="rounded-[14px] bg-[#232A25] p-5 text-left shadow-[0_14px_30px_rgba(0,0,0,0.18)]">
              <img src={card.logo} alt={card.title} className="h-12 w-auto object-contain opacity-90" />
              <h3 className="mt-6 font-heading text-[16px] font-bold text-white">{card.title}</h3>
              <p className="mt-3 font-body text-[12px] leading-5 text-[#B1B7B2]">{card.description}</p>
              <a className="mt-4 inline-flex items-center gap-2 font-heading text-[11px] font-bold text-accent-bright" href="#contato">
                Visitar site <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 h-px w-full max-w-[820px] bg-white/10" />

        <div className="mt-6 max-w-[780px]">
          <p className="font-body text-[15px] leading-6 text-[#C7CDC8] sm:text-[16px]">
            Quer fazer parte da nossa rede de parceiros e ampliar o impacto das suas soluções?
          </p>
          <p className="mt-1 font-body text-[14px] leading-6 text-[#AAB2AD] sm:text-[15px]">
            Entre em contato e vamos conversar sobre como podemos atuar juntos.
          </p>
          <a
            href="#contato"
            className="mx-auto mt-6 inline-flex h-[40px] items-center justify-center rounded-[4px] border border-accent-bright px-5 font-heading text-[11px] font-bold text-accent-bright transition hover:bg-accent-bright hover:text-accent-foreground"
          >
            Quero ser parceiro da Solveri
          </a>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqItems = [
    'Como a Solveri pode ajudar minha empresa a estar realmente preparada para emergências?',
    'Quais tipos de treinamentos a Solveri oferece?',
    'A Solveri desenvolve ou revisa planos e procedimentos de emergência?',
    'Vocês também apoiam a implantação de processos, centrais e rotinas operacionais?',
    'Como funciona a contratação dos serviços da Solveri?',
  ];

  return (
    <section className="bg-[#F9F9F7] px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
          FAQ
        </span>
        <h2 className="mt-4 max-w-[620px] font-heading text-[28px] font-bold leading-[1.08] text-[#0F2017] sm:text-[36px] lg:text-[42px]">
          Respostas para decisões mais claras
        </h2>
        <p className="mt-4 max-w-[540px] font-body text-[14px] leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
          As perguntas mais comuns de quem está avaliando nossas soluções.
        </p>
      </div>

      <div className="mx-auto mt-12 w-full max-w-[754px]">
        <div className="divide-y divide-[#0F2017]/15 border-y border-[#0F2017]/15">
          {faqItems.map((question, index) => (
            <div key={question}>
              <button
                type="button"
                className="flex min-h-[58px] w-full items-center justify-between gap-6 py-4 text-left"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span className="font-heading text-[14px] font-bold leading-5 text-[#0F2017] sm:text-[15px]">
                  {question}
                </span>
                <span className="font-heading text-[18px] font-bold leading-none text-accent-bright">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="pb-4 pr-10 font-body text-[14px] leading-6 text-[#6F7370]">
                  {faqs[index].answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-[754px] rounded-[10px] bg-[#232A25] px-6 py-10 text-center text-white sm:px-8 sm:py-12">
        <p className="font-body text-[15px] text-[#B1B7B2] sm:text-[16px]">
          Não encontrou o que procura?
        </p>
        <a
          href="#contato"
          className="mx-auto mt-5 inline-flex h-[40px] items-center justify-center rounded-[4px] bg-accent-bright px-5 font-heading text-[11px] font-bold text-accent-foreground transition hover:bg-[#c8f000]"
        >
          Fale diretamente com nossa equipe
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[#F9F9F7] px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto w-full max-w-[1344px] text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
          Depoimentos
        </span>
        <h2 className="mt-4 font-heading text-[28px] font-bold leading-[1.08] text-[#0F2017] sm:text-[36px] lg:text-[42px]">
          O que dizem sobre a Solveri
        </h2>
        <p className="mt-3 font-body text-[14px] leading-6 text-[#6F7370] sm:text-[16px]">
          Avaliações reais de clientes e alunos no Google.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="min-h-[160px] rounded-[10px] bg-[#232A25] p-5 text-left shadow-[0_14px_34px_rgba(15,32,23,0.12)]">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img key={index} src={starImage} alt="" aria-hidden="true" className="h-3 w-3" />
                ))}
              </div>
              <p className="mt-4 max-w-[300px] font-body text-[13px] leading-5 text-[#E6E9E6]">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <strong className="block font-heading text-[12px] font-bold text-white">
                    {testimonial.author}
                  </strong>
                </div>
                <span className="font-body text-[11px] text-[#8E958F]">{testimonial.source}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <p className="font-heading text-[16px] font-medium text-[#0F2017]">
            Quer deixar sua avaliação?
          </p>
          <a
            href="#contato"
            className="mx-auto mt-4 inline-flex h-[34px] items-center justify-center rounded-[4px] border border-[#0F2017]/35 px-5 font-heading text-[11px] font-bold text-[#0F2017] transition hover:bg-[#0F2017] hover:text-white"
          >
            Avaliar no Google <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-[#111714] pt-16 text-white">
      <div className="mx-auto grid w-full max-w-[1344px] gap-12 px-5 pb-10 md:grid-cols-[1.1fr_0.8fr_0.8fr_1fr] md:px-8">
        <div>
          <img src={logoSolveriHorizontal} alt="Solveri Group" className="h-16 w-auto object-contain" />
          <p className="mt-5 max-w-[270px] font-body text-[13px] leading-6 text-[#B1B7B2]">
            Gestão de riscos, emergências e crises com visão estratégica, método e capacidade operacional.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/10 bg-[#232A25] transition hover:border-accent-bright" href="#contato" aria-label="Instagram Solveri">
              <img src={instagramIcon} alt="" aria-hidden="true" className="h-4 w-4" />
            </a>
            <a className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/10 bg-[#232A25] transition hover:border-accent-bright" href="#contato" aria-label="LinkedIn Solveri">
              <img src={linkedinIcon} alt="" aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterColumn title="Navegação" links={navLinks} />
        <FooterColumn
          title="Serviços"
          links={[
            { label: 'Solveri Group', href: '#empresa' },
            { label: 'Solveri Consult', href: '#consult' },
            { label: 'Solveri Response', href: '#response' },
            { label: 'Solveri Academy', href: '#academy' },
          ]}
        />

        <div>
          <h3 className="font-heading text-[12px] font-bold uppercase tracking-[2.4px] text-accent-bright">Contato</h3>
          <div className="mt-5 space-y-4 font-body text-[13px] leading-6 text-[#B1B7B2]">
            <p className="flex gap-3"><Phone className="shrink-0 text-accent-bright" size={16} /> (31) 97114-2878</p>
            <p className="flex gap-3"><Mail className="shrink-0 text-accent-bright" size={16} /> contato@solverisolutions.com</p>
            <p className="flex gap-3"><Building2 className="shrink-0 text-accent-bright" size={16} /> Av. Alberto Lima, 3001 - sala 12, João Monlevade - MG</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex min-h-16 w-full max-w-[1344px] flex-col gap-3 px-5 py-5 font-body text-[12px] text-[#8F948F] md:flex-row md:items-center md:justify-between md:px-8">
          <span>Copyright 2026 Solveri Group. Todos os direitos reservados.</span>
          <span>Desenvolvido por <span className="text-accent-bright">Águia Digital</span></span>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#inicio">Política de Privacidade</a>
            <a className="hover:text-white" href="#inicio">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-heading text-base font-bold text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a className="font-body text-sm text-muted-foreground transition hover:text-accent" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState<'home' | 'consult' | 'response' | 'academy' | 'segmento' | 'contato'>(() => {
    if (window.location.hash === '#consult') return 'consult';
    if (window.location.hash === '#response') return 'response';
    if (window.location.hash === '#academy') return 'academy';
    if (window.location.hash === '#segmento') return 'segmento';
    if (window.location.hash === '#contato') return 'contato';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#consult') {
        setRoute('consult');
      } else if (window.location.hash === '#response') {
        setRoute('response');
      } else if (window.location.hash === '#academy') {
        setRoute('academy');
      } else if (window.location.hash === '#segmento') {
        setRoute('segmento');
      } else if (window.location.hash === '#contato') {
        setRoute('contato');
      } else {
        setRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  const handleNavigate = (section: 'home' | 'consult' | 'response' | 'academy' | 'segmento' | 'contato') => {
    window.location.hash = section === 'consult' ? '#consult' : section === 'response' ? '#response' : section === 'academy' ? '#academy' : section === 'segmento' ? '#segmento' : section === 'contato' ? '#contato' : '#inicio';
  };

  return (
    <div
      className={`min-h-screen text-foreground ${
        route === 'academy' ? 'bg-[#0D1B14]' : route === 'segmento' ? 'bg-[#DEE4DD]' : route === 'contato' ? 'bg-[#F9F9F7]' : route === 'consult' ? 'bg-[#5B5F5C]' : route === 'response' ? 'bg-[#A8E63D]' : 'bg-[#F9F9F7]'
      }`}
    >
      <Header activeSection={route} onNavigate={handleNavigate} />
      <main>
        {route === 'home' ? (
          <>
            <Hero />
            <Units />
            <Company />
            <Clients />
            <ServicesIntro />
            <Services />
            <EsgBanner />
            <Presence />
            <PartnerShowcase />
            <Faq />
            <Testimonials />
          </>
        ) : (
          <>
            {route === 'consult' ? (
              <>
                <ConsultHero />
                <ConsultUnitCard />
                <ConsultTextIntro />
                <ConsultProcessSection />
                <ConsultContactSection />
              </>
            ) : route === 'academy' ? (
              <>
                <AcademyHero />
                <AcademyOverviewSection />
                <AcademyCoursesSection />
              </>
            ) : route === 'segmento' ? (
              <>
                <SegmentSection />
                <SegmentGridSection />
              </>
            ) : route === 'contato' ? (
              <>
                <ContactHero />
                <ContactSection />
              </>
            ) : (
              <>
                <ResponseHero />
                <ResponseHighlightCard />
                <ResponseActionSection />
                <ResponseDeliverablesIntro />
                <ResponseDeliverablesSection />
                <ResponseContactSection />
              </>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
