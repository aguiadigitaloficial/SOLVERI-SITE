import {
  ArrowRight,
  Building2,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import heroWomanImage from './assets/foto-mulher.jpg';
import heroCirclesImage from './assets/circulos.png';
import logoAcademy from './assets/logo-academy.jpg';
import logoConsulty from './assets/logo-consulty.jpg';
import solveriBrancaImage from './assets/solveri branca.png';
import logoSolveriHorizontal from './assets/logo solveri horizontal.png';
import logoResponse from './assets/logo-response.jpg';
import logoCardResponse from './assets/logo card response.png';
import logoSolveri from './assets/logo-solveri.png';
import solveriGroupPortalLogo from './assets/solveri-group-portal.png';
import logoPreta from './assets/logo preta.png';
import heroConsultImage from './assets/hero consult.png';
import academyHeroBackground from './assets/fundo hero academy.png';
import academyHeroLogo from './assets/logo hero academy.png';
import academyHeroCircles from './assets/circulos hero academy.png';
import segmentHeroRiverImage from './assets/segment-hero-river-optimized.jpg';
import contactHeroBackground from './assets/contact-hero-background-optimized.jpg';
import responseHeroBackground from './assets/response-hero-background-optimized.jpg';
import alcoaClientLogo from './assets/clients/alcoa.png';
import alumarClientLogo from './assets/clients/alumar.png';
import anchietaClientLogo from './assets/clients/anchieta-alimentos.png';
import cenibraClientLogo from './assets/clients/cenibra.png';
import dofSubseaClientLogo from './assets/clients/dof-subsea.png';
import embraterrClientLogo from './assets/clients/embraterr.png';
import equinoxGoldClientLogo from './assets/clients/equinox-gold.png';
import hiperClientLogo from './assets/clients/hiper-comercial.png';
import hydroClientLogo from './assets/clients/hydro.png';
import jaguarMiningClientLogo from './assets/clients/jaguar-mining.png';
import mooveClientLogo from './assets/clients/moove.png';
import petrobrasClientLogo from './assets/clients/petrobras.png';
import vectorSaudeClientLogo from './assets/clients/vector-saude.png';
import veracelClientLogo from './assets/clients/veracel.png';
import paisagemImage from './assets/paisagem.png';
import ircaLogo from './assets/irca.png';
import advancedLogo from './assets/advanced.png';
import starImage from './assets/estrela.png';
import instagramIcon from './assets/instagram.png';
import linkedinIcon from './assets/linkedin.png';
import sombraImage from './assets/sombra.png';
import logoFundoImage from './assets/logo fundo.png';
import circulosHeroConsultImage from './assets/circulos hero consult.png';
import sentadosImage from './assets/sentados.png';
import novoCardResponseImage from './assets/novo card response.jpg';
import novoCardAcademyImage from './assets/novo card academy.jpeg';
import thumbnail2Image from './assets/thumbnail 2.png';
import sombraThumbnailImage from './assets/sombra thumbnail.png';
import sombraBotaoImage from './assets/sombra botao.png';
import setaImage from './assets/seta.png';
import iconeImage from './assets/icone.png';
import playButtonImage from './assets/play-button.png';
import planejandoImage from './assets/planejando.png';
import centraisAtendimentoProtocolarImage from './assets/centrais-atendimento-protocolar-optimized.jpg';
import fluxogramaImage from './assets/fluxograma.png';
import escrevendoImage from './assets/escrevendo.png';
import centroControleOperacionalImage from './assets/centro-controle-operacional.webp';
import escrevendo2Image from './assets/escrevendo 2.png';
import verificadoImage from './assets/verificado.png';
import checkImage from './assets/check.png';
import telefoneImage from './assets/telefone.png';
import emailImage from './assets/email.png';
import thumbnailResponseImage from './assets/thumbnail response.png';
import sombraThumbnailResponseImage from './assets/sombra thumbnail response.png';
import apagandoFogoImage from './assets/apagando fogo.png';
import salaReuniaoImage from './assets/sala reuniao.png';
import novaImagemResponseImage from './assets/nova imagem.jpeg';
import bombeiros2Image from './assets/bombeiros 2.png';
import cadeirasSalaImage from './assets/cadeiras sala.png';
import salaReuniao2Image from './assets/sala reuniao 2.png';
import monitoresImage from './assets/monitores.png';
import olhandoMonitoresImage from './assets/olhando monitores.png';
import mochilasImage from './assets/mochilas-optimized.jpg';
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
import brazilMap from './data/brazilMap';

type AppRoute = 'portal' | 'home' | 'consult' | 'response' | 'academy' | 'segmento' | 'contato';
type InternalRoute = Exclude<AppRoute, 'portal'>;

const routePaths: Record<AppRoute, string> = {
  portal: '/',
  home: '/inicio',
  consult: '/consult',
  response: '/response',
  academy: '/academy',
  segmento: '/segmentos',
  contato: '/contato',
};

const siteUrl = 'https://solverigroup.com';

const pathRoutes = new Map<string, AppRoute>(
  Object.entries(routePaths).map(([route, path]) => [path, route as AppRoute]),
);

const legacyHashDestinations: Record<string, { route: InternalRoute; url: string }> = {
  '#inicio': { route: 'home', url: routePaths.home },
  '#empresa': { route: 'home', url: `${routePaths.home}#empresa` },
  '#servicos': { route: 'home', url: `${routePaths.home}#servicos` },
  '#consult': { route: 'consult', url: routePaths.consult },
  '#response': { route: 'response', url: routePaths.response },
  '#academy': { route: 'academy', url: routePaths.academy },
  '#segmento': { route: 'segmento', url: routePaths.segmento },
  '#contato': { route: 'contato', url: routePaths.contato },
};

const navLinks = [
  { label: 'Inicio', href: routePaths.home, route: 'home' as const },
  { label: 'Consult', href: routePaths.consult, route: 'consult' as const },
  { label: 'Response', href: routePaths.response, route: 'response' as const },
  { label: 'Academy', href: routePaths.academy, route: 'academy' as const },
  { label: 'Segmento', href: routePaths.segmento, route: 'segmento' as const },
  { label: 'Contato', href: routePaths.contato, route: 'contato' as const },
];

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords: string;
};

const seoByRoute: Record<AppRoute, SeoConfig> = {
  portal: {
    title: 'Solveri Group | Gestão de Riscos, Emergências e Crises',
    description:
      'Escolha entre Solveri Group, Consult, Response, Academy e contato para conhecer soluções em gestão de riscos, emergências, crises e capacitação.',
    path: routePaths.portal,
    keywords:
      'Solveri, Solveri Group, gestão de riscos, emergências, crises, consultoria, resposta operacional, treinamentos',
  },
  home: {
    title: 'Solveri Group | Soluções Integradas em Riscos, Emergências e Crises',
    description:
      'Soluções integradas em gestão de riscos, emergências e crises para proteger pessoas, planeta e reputação em operações críticas.',
    path: routePaths.home,
    keywords:
      'Solveri Group, gestão de riscos corporativos, emergências empresariais, gestão de crises, continuidade operacional',
  },
  consult: {
    title: 'Solveri Consult | Consultoria em Gestão de Emergências e Crises',
    description:
      'Consultoria estratégica para estruturação de sistemas de emergência, planos, protocolos, centrais e gestão de crises em operações industriais.',
    path: routePaths.consult,
    keywords:
      'Solveri Consult, consultoria em emergências, PAE, PEI, PEVO, PAEBM, gestão de crises, protocolos de emergência',
  },
  response: {
    title: 'Solveri Response | Resposta Operacional para Emergências Industriais',
    description:
      'Equipes, estruturas e apoio técnico especializado para resposta a eventos críticos em ambientes industriais, minerários, logísticos e portuários.',
    path: routePaths.response,
    keywords:
      'Solveri Response, emergência industrial, resposta operacional, EOR, centrais protocolares, postos de comando',
  },
  academy: {
    title: 'Solveri Academy | Cursos, ICS/SCI e Capacitação Técnica',
    description:
      'Treinamentos presenciais, EAD e híbridos em ICS/SCI, normas regulamentadoras, SSMA e gestão de emergências para equipes operacionais.',
    path: routePaths.academy,
    keywords:
      'Solveri Academy, cursos ICS, SCI, treinamentos de emergência, normas regulamentadoras, SSMA, capacitação técnica',
  },
  segmento: {
    title: 'Segmentos de Atuação | Solveri Group',
    description:
      'Atuação integrada para mineração, energia, logística, portos, florestal, indústria, saneamento e outros setores de alta criticidade.',
    path: routePaths.segmento,
    keywords:
      'segmentos Solveri, mineração, energia, logística, portuário, saneamento, petroquímico, emergências industriais',
  },
  contato: {
    title: 'Contato | Fale com a Solveri Group',
    description:
      'Entre em contato com a Solveri Group para solicitar propostas, cursos, parcerias ou atendimento especializado em riscos e emergências.',
    path: routePaths.contato,
    keywords:
      'contato Solveri, proposta Solveri, consultoria em riscos, atendimento emergências, cursos Solveri',
  },
};

type NavbarTheme = {
  logo: string;
  logoAlt: string;
  logoClassName: string;
  headerClassName: string;
  textClassName: string;
  hoverClassName: string;
  activeTextClassName: string;
  underlineClassName: string;
  menuBorderClassName: string;
  menuButtonClassName: string;
  mobilePanelClassName: string;
  contactButtonClassName: string;
};

const navbarThemes: Record<InternalRoute, NavbarTheme> = {
  home: {
    logo: logoSolveri,
    logoAlt: 'Solveri Group',
    logoClassName: 'max-h-[46px] max-w-[160px]',
    headerClassName: 'bg-[#F9F9F7]',
    textClassName: 'text-[#0F2017]',
    hoverClassName: 'hover:text-[#050806]',
    activeTextClassName: 'text-[#050806]',
    underlineClassName: 'bg-accent-bright',
    menuBorderClassName: 'border-[#0F2017]/15',
    menuButtonClassName: 'border-[#0F2017]/15 text-[#0F2017]',
    mobilePanelClassName: 'border-[#0F2017]/10 bg-[#F9F9F7]',
    contactButtonClassName: 'bg-accent-bright text-accent-foreground hover:bg-[#c8f000]',
  },
  consult: {
    logo: logoPreta,
    logoAlt: 'Solveri Consult',
    logoClassName: 'max-h-[54px] max-w-[72px] brightness-0 invert',
    headerClassName: 'bg-[#5B5F5C]',
    textClassName: 'text-white/85',
    hoverClassName: 'hover:text-white',
    activeTextClassName: 'text-white',
    underlineClassName: 'bg-accent-bright',
    menuBorderClassName: 'border-white/20',
    menuButtonClassName: 'border-white/25 text-white',
    mobilePanelClassName: 'border-white/10 bg-[#5B5F5C]',
    contactButtonClassName: 'bg-accent-bright text-accent-foreground hover:bg-[#c8f000]',
  },
  response: {
    logo: logoCardResponse,
    logoAlt: 'Solveri Response',
    logoClassName: 'max-h-[54px] max-w-[72px]',
    headerClassName: 'bg-[#A8E63D]',
    textClassName: 'text-[#111714]',
    hoverClassName: 'hover:text-black',
    activeTextClassName: 'text-black',
    underlineClassName: 'bg-[#111714]',
    menuBorderClassName: 'border-[#111714]/20',
    menuButtonClassName: 'border-[#111714]/20 text-[#111714]',
    mobilePanelClassName: 'border-[#111714]/10 bg-[#A8E63D]',
    contactButtonClassName: 'bg-[#D4FF00] text-[#111714] hover:bg-[#c7f500]',
  },
  academy: {
    logo: academyHeroLogo,
    logoAlt: 'Solveri Academy',
    logoClassName: 'max-h-[54px] max-w-[72px] brightness-0 invert',
    headerClassName: 'bg-[#0D1B14]',
    textClassName: 'text-white/85',
    hoverClassName: 'hover:text-[#D4FF00]',
    activeTextClassName: 'text-white',
    underlineClassName: 'bg-accent-bright',
    menuBorderClassName: 'border-white/20',
    menuButtonClassName: 'border-white/25 text-white',
    mobilePanelClassName: 'border-white/10 bg-[#0D1B14]',
    contactButtonClassName: 'bg-accent-bright text-accent-foreground hover:bg-[#c8f000]',
  },
  segmento: {
    logo: logoSolveri,
    logoAlt: 'Solveri Group',
    logoClassName: 'max-h-[46px] max-w-[160px]',
    headerClassName: 'bg-[#DEE4DD]',
    textClassName: 'text-[#111714]',
    hoverClassName: 'hover:text-black',
    activeTextClassName: 'text-black',
    underlineClassName: 'bg-accent-bright',
    menuBorderClassName: 'border-[#111714]/15',
    menuButtonClassName: 'border-[#111714]/15 text-[#111714]',
    mobilePanelClassName: 'border-[#111714]/10 bg-[#DEE4DD]',
    contactButtonClassName: 'bg-accent-bright text-accent-foreground hover:bg-[#c8f000]',
  },
  contato: {
    logo: logoSolveri,
    logoAlt: 'Solveri Group',
    logoClassName: 'max-h-[46px] max-w-[160px]',
    headerClassName: 'bg-[#F9F9F7]',
    textClassName: 'text-[#111714]',
    hoverClassName: 'hover:text-black',
    activeTextClassName: 'text-black',
    underlineClassName: 'bg-accent-bright',
    menuBorderClassName: 'border-[#111714]/15',
    menuButtonClassName: 'border-[#111714]/15 text-[#111714]',
    mobilePanelClassName: 'border-[#111714]/10 bg-[#F9F9F7]',
    contactButtonClassName: 'bg-accent-bright text-accent-foreground hover:bg-[#c8f000]',
  },
};

const units = [
  { logo: logoConsulty, alt: 'Solveri Consult', text: 'Consultoria especializada', href: routePaths.consult },
  { logo: logoResponse, alt: 'Solveri Response', text: 'Gestão de emergências', href: routePaths.response },
  { logo: logoAcademy, alt: 'Solveri Academy', text: 'Capacitação e treinamento', href: routePaths.academy },
];

const clients = [
  { name: 'Alcoa', logo: alcoaClientLogo },
  { name: 'Alumar', logo: alumarClientLogo },
  { name: 'Anchieta Alimentos', logo: anchietaClientLogo },
  { name: 'Cenibra', logo: cenibraClientLogo },
  { name: 'DOF Subsea', logo: dofSubseaClientLogo },
  { name: 'Embraterr', logo: embraterrClientLogo },
  { name: 'Equinox Gold', logo: equinoxGoldClientLogo },
  { name: 'Hiper Comercial Monlevade', logo: hiperClientLogo },
  { name: 'Hydro', logo: hydroClientLogo },
  { name: 'Jaguar Mining', logo: jaguarMiningClientLogo },
  { name: 'Moove', logo: mooveClientLogo },
  { name: 'Petrobras', logo: petrobrasClientLogo },
  { name: 'Vector Saúde', logo: vectorSaudeClientLogo },
  { name: 'Veracel', logo: veracelClientLogo },
];

const faqs = [
  {
    question: 'Como a Solveri pode ajudar minha empresa a estar realmente preparada para emergências?',
    answer:
      'A Solveri atua de forma estratégica para transformar a preparação da sua empresa em um sistema sólido, organizado e eficiente de prevenção, resposta e continuidade. Desenvolvemos soluções sob medida em gestão de emergências, protocolos operacionais, estruturação de centrais, treinamentos especializados e fortalecimento da capacidade de resposta, reduzindo vulnerabilidades e elevando o nível de segurança, governança e confiabilidade do seu negócio.',
  },
  {
    question: 'Quais tipos de treinamentos a Solveri oferece?',
    answer:
      'Oferecemos treinamentos corporativos e técnicos voltados para equipes operacionais, lideranças e estruturas de gestão de crise e emergência. Nossos programas incluem capacitação em resposta a emergências, sistemas de comando de incidentes, operação de centrais de atendimento, protocolos de telecomunicações em emergência, simulados, formações para bombeiros civis e programas customizados conforme a realidade e os riscos de cada organização. Tudo com foco prático, aplicabilidade real e alto padrão técnico.',
  },
  {
    question: 'A Solveri desenvolve ou revisa planos e procedimentos de emergência?',
    answer:
      'Sim. A Solveri desenvolve, revisa e aperfeiçoa planos, protocolos e procedimentos com base nas necessidades operacionais e estratégicas de cada cliente. Atuamos na elaboração e atualização de planos de emergência, contingência, crise e resposta, sempre alinhando exigências legais, boas práticas do mercado e metodologias reconhecidas internacionalmente. O objetivo é garantir que sua organização tenha documentos realmente úteis, executáveis e aderentes à sua operação.',
  },
  {
    question: 'Vocês também apoiam a implantação de processos, centrais e rotinas operacionais?',
    answer:
      'Sim. Mais do que entregar documentos e treinamentos, a Solveri apoia a implantação prática das soluções. Estruturamos processos, fluxos, protocolos, rotinas de atendimento e modelos operacionais para centrais e equipes de resposta, promovendo ganho real de organização, agilidade, padronização e segurança na tomada de decisão. Nosso compromisso é fazer com que a solução funcione na prática, e não apenas no papel.',
  },
  {
    question: 'Como funciona a contratação dos serviços da Solveri?',
    answer:
      'A contratação é simples, consultiva e personalizada. Primeiro entendemos o cenário, os riscos, as necessidades e os objetivos da sua organização. A partir disso, estruturamos uma proposta sob medida, que pode envolver consultoria, treinamentos, desenvolvimento de protocolos, simulados, credenciamento de equipes ou apoio operacional. Assim, sua empresa recebe exatamente a solução de que precisa, com foco em resultado, eficiência e valor agregado.',
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
  activeSection: InternalRoute;
  onNavigate: (section: InternalRoute) => void;
}) {
  const [open, setOpen] = useState(false);
  const theme = navbarThemes[activeSection];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${theme.headerClassName}`}>
      <nav className="mx-auto flex h-[80px] w-full max-w-[1180px] items-center justify-between px-5 md:px-8 xl:px-0">
        <a
          href={routePaths.home}
          className="flex h-14 w-[170px] shrink-0 items-center justify-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-bright"
          aria-label={`${theme.logoAlt} - ir para o início`}
          onClick={(event) => {
            event.preventDefault();
            onNavigate('home');
            setOpen(false);
          }}
        >
          <img
            key={theme.logo}
            src={theme.logo}
            alt={theme.logoAlt}
            className={`block h-auto w-auto object-contain transition-opacity duration-300 ${theme.logoClassName}`}
          />
        </a>

        <ul className={`hidden items-center gap-7 font-body text-[16px] font-medium lg:flex xl:gap-[34px] ${theme.textClassName}`}>
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                className={`relative inline-flex min-h-11 items-center transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright ${
                  link.route === activeSection ? theme.activeTextClassName : theme.hoverClassName
                }`}
                href={link.href}
                aria-current={link.route === activeSection ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(link.route);
                }}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-[4px] left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-250 ${
                    link.route === activeSection ? `w-full opacity-100 ${theme.underlineClassName}` : 'w-0 opacity-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          className={`hidden min-h-9 min-w-[112px] items-center justify-center rounded-full px-5 font-heading text-[11px] font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-bright lg:flex ${theme.contactButtonClassName}`}
          href={routePaths.contato}
          onClick={(event) => {
            event.preventDefault();
            onNavigate('contato');
          }}
        >
          Fale Conosco
        </a>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-button border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-bright lg:hidden ${theme.menuButtonClassName}`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className={`border-t px-5 py-5 shadow-lg lg:hidden ${theme.mobilePanelClassName}`}>
          <div className="mx-auto flex max-w-[1180px] flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`flex min-h-11 items-center rounded-[4px] px-3 font-body text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-bright ${
                  link.route === activeSection
                    ? `${theme.activeTextClassName} bg-current/[0.06]`
                    : `${theme.textClassName} ${theme.hoverClassName}`
                }`}
                href={link.href}
                aria-current={link.route === activeSection ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(link.route);
                  setOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              className={`mt-2 flex min-h-[50px] items-center justify-center rounded-button font-heading text-xs font-bold uppercase tracking-[0.52px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-bright ${theme.contactButtonClassName}`}
              href={routePaths.contato}
              onClick={(event) => {
                event.preventDefault();
                onNavigate('contato');
                setOpen(false);
              }}
            >
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

type PortalDestination = {
  route: InternalRoute;
  name: string;
  shortLabel: string;
  description: [string, string, string];
  logo?: string;
  logoAlt?: string;
  markClassName: string;
  markOffsetX?: number;
  markOffsetY?: number;
  iconSize?: number;
  angle: number;
};

const portalDestinations: PortalDestination[] = [
  {
    route: 'home',
    name: 'Solveri Group',
    shortLabel: 'Group',
    description: ['Conheça a Solveri', 'gestão integrada', 'para riscos críticos'],
    logo: solveriGroupPortalLogo,
    logoAlt: 'Solveri Group',
    markClassName: 'h-[72%] w-[72%]',
    iconSize: 21,
    angle: -90,
  },
  {
    route: 'response',
    name: 'Solveri Response',
    shortLabel: 'Response',
    description: ['Resposta operacional', 'para emergências', 'de alta criticidade'],
    logo: logoCardResponse,
    logoAlt: 'Solveri Response',
    markClassName: 'h-[76%] w-[76%]',
    iconSize: 19,
    angle: -18,
  },
  {
    route: 'academy',
    name: 'Solveri Academy',
    shortLabel: 'Academy',
    description: ['Formação técnica', 'para equipes', 'mais preparadas'],
    logo: academyHeroLogo,
    logoAlt: 'Solveri Academy',
    markClassName: 'h-[82%] w-[78%]',
    iconSize: 19,
    angle: 54,
  },
  {
    route: 'contato',
    name: 'Contato',
    shortLabel: 'Contato',
    description: ['Fale diretamente', 'com nossa equipe', 'sobre seu cenário'],
    markClassName: 'h-[64%] w-[64%]',
    iconSize: 18,
    angle: 126,
  },
  {
    route: 'consult',
    name: 'Solveri Consult',
    shortLabel: 'Consult',
    description: ['Estratégia e prevenção', 'gestão de riscos', 'e crises'],
    logo: logoPreta,
    logoAlt: 'Solveri Consult',
    markClassName: 'h-[82%] w-[82%]',
    iconSize: 19,
    angle: 198,
  },
];

function polarPoint(center: number, radius: number, angle: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: center + radius * Math.cos(radians),
    y: center + radius * Math.sin(radians),
  };
}

function createRingSegmentPath(startAngle: number, endAngle: number, outerRadius = 47, innerRadius = 29) {
  const center = 50;
  const outerStart = polarPoint(center, outerRadius, endAngle);
  const outerEnd = polarPoint(center, outerRadius, startAngle);
  const innerStart = polarPoint(center, innerRadius, startAngle);
  const innerEnd = polarPoint(center, innerRadius, endAngle);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerRadius} ${outerRadius} 0 0 0 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerRadius} ${innerRadius} 0 0 1 ${innerEnd.x} ${innerEnd.y}`,
    'Z',
  ].join(' ');
}

function PortalLanding({ onNavigate }: { onNavigate: (route: InternalRoute) => void }) {
  const [selectedRoute, setSelectedRoute] = useState<InternalRoute>('home');
  const selectedDestination =
    portalDestinations.find((destination) => destination.route === selectedRoute) ?? portalDestinations[0];

  return (
    <section className="portal-landing relative flex min-h-screen overflow-hidden bg-[#F9F9F7] px-4 py-8 text-[#0F2017] sm:px-8 sm:py-10">
      <div className="portal-grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center justify-center">
        <div className="portal-intro text-center">
          <img
            src={logoSolveri}
            alt="Solveri Group"
            className="mx-auto h-auto w-[150px] object-contain sm:w-[170px]"
          />
          <p className="mt-5 font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-[#66805F] sm:text-[11px]">
            Ecossistema Solveri
          </p>
          <h1 className="mt-3 font-heading text-[27px] font-bold leading-[1.08] text-[#0F2017] sm:text-[34px] lg:text-[40px]">
            Por onde você quer começar?
          </h1>
          <p className="mx-auto mt-3 max-w-[520px] font-body text-[13px] leading-5 text-[#687169] sm:text-[15px] sm:leading-6">
            Escolha uma área para conhecer a atuação da Solveri.
          </p>
        </div>

        <nav className="portal-radar relative mt-5 aspect-square w-full max-w-[360px] sm:mt-7 sm:max-w-[580px] lg:max-w-[760px]" aria-label="Escolha uma área da Solveri">
          <svg
            className="absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            aria-label="Navegador circular das áreas da Solveri"
          >
            <circle className="portal-ring-guide" cx="50" cy="50" r="49" aria-hidden="true" />
            <circle className="portal-ring-guide portal-ring-guide--inner" cx="50" cy="50" r="27" aria-hidden="true" />

            {portalDestinations.map((destination, index) => {
              const isSelected = destination.route === selectedRoute;
              const baseIconPoint = polarPoint(50, 38, destination.angle);
              const iconPoint = {
                x: baseIconPoint.x + (destination.markOffsetX ?? 0),
                y: baseIconPoint.y + (destination.markOffsetY ?? 0),
              };
              const iconSize = destination.iconSize ?? 19;

              return (
                <a
                  key={destination.route}
                  href={routePaths[destination.route]}
                  aria-label={`Abrir ${destination.name}`}
                  className="portal-ring-sector"
                  onMouseEnter={() => setSelectedRoute(destination.route)}
                  onFocus={() => setSelectedRoute(destination.route)}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedRoute(destination.route);
                    onNavigate(destination.route);
                  }}
                >
                  <path
                    d={createRingSegmentPath(destination.angle - 36, destination.angle + 36)}
                    className={`portal-ring-sector-shape ${index % 2 ? 'is-alternate' : ''} ${
                      isSelected ? 'is-active' : ''
                    }`}
                  />
                  <foreignObject
                    x={iconPoint.x - iconSize / 2}
                    y={iconPoint.y - iconSize / 2}
                    width={iconSize}
                    height={iconSize}
                    className="pointer-events-none overflow-visible"
                    aria-hidden="true"
                  >
                    <div className={`portal-ring-logo h-full w-full rounded-full ${isSelected ? 'is-active' : ''}`}>
                      <span className={`portal-ring-logo-mark ${destination.markClassName}`} aria-hidden="true">
                        {destination.logo ? (
                          <img
                            src={destination.logo}
                            alt=""
                            className={`portal-ring-logo-image ${isSelected ? 'brightness-0' : 'brightness-0 invert'}`}
                          />
                        ) : (
                          <Phone
                            className={`portal-ring-logo-icon ${isSelected ? 'text-[#0F2017]' : 'text-white'}`}
                            strokeWidth={1.9}
                          />
                        )}
                      </span>
                    </div>
                  </foreignObject>
                </a>
              );
            })}
          </svg>

          <div
            className="portal-center absolute left-1/2 top-1/2 flex aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#BCD0B7] bg-[#F2F7EF] p-4 text-center shadow-[0_18px_45px_rgba(15,32,23,0.14)] sm:w-[46%] sm:p-8"
            aria-live="polite"
            aria-atomic="true"
          >
            <div key={selectedDestination.route} className="portal-center-content flex flex-col items-center">
              <span className="font-heading text-[8px] font-bold uppercase tracking-[0.22em] text-[#5B8B11] sm:text-[10px]">
                Destino selecionado
              </span>
              <h2 className="mt-2 font-heading text-[17px] font-bold leading-tight text-[#0F2017] sm:mt-3 sm:text-[26px] lg:text-[30px]">
                {selectedDestination.name}
              </h2>
              <p className="mt-2 font-body text-[9px] leading-[1.55] text-[#687169] sm:mt-3 sm:text-[13px] lg:text-[14px]">
                {selectedDestination.description.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={routePaths[selectedDestination.route]}
                className="mt-3 inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full bg-[#D4FF00] px-3 font-heading text-[8px] font-bold uppercase tracking-[0.05em] text-[#0F2017] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#D4FF00] sm:mt-5 sm:min-h-11 sm:gap-2 sm:px-5 sm:text-[10px] lg:text-[11px]"
              >
                Entrar em {selectedDestination.shortLabel}
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

        </nav>

        <p className="portal-hint mt-4 flex items-center gap-2 font-body text-[11px] text-[#687169] sm:mt-2 sm:text-[12px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A8E63D]" aria-hidden="true" />
          Passe o mouse para visualizar ou clique para entrar
        </p>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="inicio" className="bg-[#F9F9F7] px-5 pb-0 pt-[89px] md:px-8">
      <div className="relative mx-auto flex w-full max-w-[1344px] flex-col overflow-hidden rounded-[18px] bg-[#0A0E0C] shadow-[0_18px_45px_rgba(15,32,23,0.12)] lg:min-h-[610px] lg:justify-center lg:rounded-[24px]">
        <div className="relative z-20 px-6 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-10 lg:w-[57%] lg:px-[60px] lg:py-[60px]">
          <div className="inline-flex min-h-10 items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-body text-[11px] leading-4 text-white/75 sm:text-[13px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent-bright" aria-hidden="true" />
            Gestão integrada de riscos corporativos
          </div>

          <h1 className="mt-7 max-w-[650px] font-heading text-[32px] font-bold leading-[1.08] text-white sm:text-[42px] lg:mt-12 lg:max-w-[760px] lg:text-[44px] xl:max-w-[780px] xl:text-[46px]">
            <span className="lg:block lg:whitespace-nowrap">Cuidando dos maiores</span>
            <span className="lg:block lg:whitespace-nowrap">patrimônios empresariais:</span>
            <span className="mt-1 block text-accent lg:whitespace-nowrap">Pessoas, Planeta e Reputação</span>
          </h1>

          <p className="mt-5 max-w-[590px] font-body text-[16px] leading-7 text-white/65 lg:text-[19px] lg:leading-8">
            Soluções integradas em gestão de riscos, emergências e crises para operações que exigem preparo real.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10">
            <a
              href="/inicio#servicos"
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] bg-accent-bright px-6 text-center font-heading text-[12px] font-bold uppercase tracking-[0.03em] text-accent-foreground transition hover:bg-[#c8f000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright sm:min-w-[260px]"
            >
              Conheça nossas soluções
            </a>
            <a
              href="/contato"
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] border border-white/35 bg-black/10 px-6 text-center font-heading text-[12px] font-bold text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-w-[260px]"
            >
              Fale com um especialista
            </a>
          </div>
        </div>

        <div className="relative min-h-[390px] overflow-hidden sm:min-h-[470px] lg:absolute lg:inset-0 lg:min-h-0">
          <img
            src={heroWomanImage}
            alt="Profissional da Solveri com uniforme de resposta a emergências e capacete"
            className="absolute inset-0 h-full w-full object-cover object-[66%_center] sm:object-[68%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#07100B] lg:via-[#07100B]/65 lg:to-transparent" />
          <img
            src={heroCirclesImage}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-4%] w-[128%] max-w-[570px] -translate-x-1/2 opacity-90 sm:left-[68%] sm:w-[76%] lg:left-[76%] lg:top-[-10%] lg:w-[48%] lg:max-w-none"
          />

          <div className="absolute bottom-0 right-0 z-10 grid w-full grid-cols-2 border-t border-white/15 bg-black/35 backdrop-blur-md sm:bottom-5 sm:right-5 sm:w-auto sm:overflow-hidden sm:rounded-[16px] sm:border lg:bottom-0 lg:right-0 lg:rounded-br-[24px] lg:rounded-tl-[18px]">
            <div className="flex min-h-[92px] min-w-[138px] flex-col items-center justify-center border-r border-white/15 px-5 text-center">
              <strong className="font-heading text-[30px] font-bold leading-none text-accent-bright">15+</strong>
              <span className="mt-2 font-body text-[11px] leading-4 text-white/65">Anos de experiência</span>
            </div>
            <div className="flex min-h-[92px] min-w-[138px] flex-col items-center justify-center px-5 text-center">
              <strong className="font-heading text-[30px] font-bold leading-none text-accent-bright">200+</strong>
              <span className="mt-2 font-body text-[11px] leading-4 text-white/65">Operações atendidas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Units() {
  return (
    <section className="bg-[#F9F9F7] px-5 pb-[22px] pt-[24px] md:px-8">
      <div className="mx-auto w-full max-w-[1340px] overflow-hidden rounded-[12px] bg-white shadow-[0_14px_30px_rgba(15,32,23,0.08)] lg:grid lg:min-h-[163px] lg:grid-cols-4">
        <div className="flex min-h-[82px] items-center justify-center border-b border-[#EEF0EC] px-6 text-center lg:min-h-0 lg:border-b-0 lg:border-r">
          <span className="font-body text-[15px] font-medium uppercase leading-tight tracking-[1.15px] text-[#AEB4B0] lg:text-[16px]">
            Nossas Unidades
          </span>
        </div>

        <div className="grid sm:grid-cols-3 lg:contents">
          {units.map((unit, index) => (
            <a
              key={unit.alt}
              href={unit.href}
              className={`flex min-h-[174px] flex-col items-center justify-center px-5 py-5 text-center transition hover:bg-[#F9F9F7]/70 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0F2017] ${
                index < units.length - 1
                  ? 'border-b border-[#EEF0EC] sm:border-b-0 sm:border-r'
                  : ''
              }`}
            >
              <img src={unit.logo} alt={unit.alt} className="h-[97px] w-[114px] object-contain mix-blend-multiply" />
              <span className="mt-2 max-w-[190px] font-body text-[15px] font-normal leading-5 text-[#8F9691] lg:text-[16px]">
                {unit.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Company() {
  return (
    <section id="empresa" className="bg-[#F9F9F7] px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1344px]">
        <div className="rounded-[24px] bg-[#0A0E0C] px-6 py-8 sm:px-8 sm:py-10 lg:rounded-[28px] lg:px-10 lg:py-12">
          <div className="grid gap-9 lg:grid-cols-[0.96fr_1.04fr] lg:items-start lg:gap-10">
            <div className="pt-1">
              <SectionLabel>A empresa</SectionLabel>
              <h2 className="mt-4 max-w-[520px] font-heading text-[30px] font-bold leading-[1.08] text-white sm:text-[32px] md:text-[36px] lg:text-[40px]">
                Estrutura, método e resposta para cenários críticos
              </h2>
              <p className="mt-4 max-w-[560px] font-body text-[15px] leading-6 text-[#AAB2AD] sm:text-[16px] sm:leading-7">
                Soluções integradas em gestão de riscos, emergências e crises. Prevenção, preparação e resposta para organizações que operam em ambientes de alta complexidade.
              </p>

              <div className="mt-7 grid w-full grid-cols-2 gap-3 sm:max-w-[340px]">
                <div className="min-w-0 rounded-[10px] border border-white/5 bg-[#232A23] px-4 py-4">
                  <strong className="block font-heading text-[28px] font-bold leading-none text-accent-bright">+2.000</strong>
                  <span className="mt-2 block font-body text-[11px] leading-4 text-[#AAB2AD]">Profissionais capacitados</span>
                </div>
                <div className="min-w-0 rounded-[10px] border border-white/5 bg-[#232A23] px-4 py-4">
                  <strong className="block font-heading text-[28px] font-bold leading-none text-accent-bright">10</strong>
                  <span className="mt-2 block font-body text-[11px] leading-4 text-[#AAB2AD]">Estados de atuação</span>
                </div>
              </div>
            </div>

            <div className="lg:pt-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] border border-white/5 bg-[#121815] sm:aspect-video">
                <img
                  src={videoThumbnail}
                  alt="Equipe Solveri em treinamento operacional"
                  className="h-full w-full object-cover grayscale contrast-90 brightness-90"
                />
                <div className="absolute inset-0 bg-black/18" />
                <button
                  type="button"
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px] border border-accent-bright/80 bg-black/15 backdrop-blur-[2px] transition hover:bg-black/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright"
                  aria-label="Assistir vídeo institucional"
                >
                  <img src={playButtonImage} alt="" className="h-9 w-9" />
                </button>
                <button
                  type="button"
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-[8px] bg-black/65 backdrop-blur-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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

          <div className="mt-12 text-center">
            <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-accent-bright">
              Referências e vínculos institucionais
            </span>
            <p className="mx-auto mt-3 max-w-[620px] font-body text-[15px] leading-6 text-[#C7CDC8]">
              Nossa atuação reúne vínculos com instituições internacionais e referências técnicas reconhecidas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[12px] border border-accent-bright/15 bg-[#1F2520] px-4 py-5 sm:px-6">
              <h3 className="text-center font-heading text-[11px] font-bold uppercase tracking-[1.8px] text-accent-bright">
                Vínculos institucionais
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { logo: nfpaLogo, name: 'NFPA' },
                  { logo: iaemLogo, name: 'IAEM' },
                ].map((institution) => (
                  <div
                    key={institution.name}
                    className="flex min-h-[132px] min-w-0 flex-col items-center justify-center rounded-[10px] border border-white/5 bg-[#171D19] px-3 py-4 text-center"
                  >
                    <img
                      src={institution.logo}
                      alt={`${institution.name}, instituição da qual a Solveri é membro colaborador`}
                      className="h-12 max-w-full object-contain brightness-0 invert opacity-90 sm:h-14"
                    />
                    <span className="mt-3 inline-flex min-h-6 items-center rounded-full border border-accent-bright/25 bg-accent-bright/10 px-3 font-heading text-[9px] font-bold uppercase tracking-[0.08em] text-accent-bright sm:text-[10px]">
                      Membro colaborador
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[12px] border border-white/5 bg-[#1F2520] px-4 py-5 sm:px-6">
              <h3 className="text-center font-heading text-[11px] font-bold uppercase tracking-[1.8px] text-[#C7CDC8]">
                Referências técnicas
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { logo: iso31000Logo, name: 'ISO 31000', description: 'Gestão de riscos' },
                  { logo: iso45001Logo, name: 'ISO 45001', description: 'Saúde e segurança ocupacional' },
                ].map((reference) => (
                  <div
                    key={reference.name}
                    className="flex min-h-[132px] min-w-0 flex-col items-center justify-center rounded-[10px] border border-white/5 bg-[#171D19] px-3 py-4 text-center"
                  >
                    <img
                      src={reference.logo}
                      alt={`${reference.name}, referência técnica em ${reference.description.toLowerCase()}`}
                      className="h-12 max-w-full object-contain brightness-0 invert opacity-90 sm:h-14"
                    />
                    <span className="mt-3 font-body text-[10px] leading-4 text-[#AAB2AD] sm:text-[11px]">
                      {reference.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const speedFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (speedFrameRef.current !== null) {
        cancelAnimationFrame(speedFrameRef.current);
      }
    };
  }, []);

  const easeMarqueeSpeed = (targetRate: number, duration: number) => {
    const animation = marqueeRef.current
      ?.querySelector<HTMLElement>('.client-marquee-track')
      ?.getAnimations()[0];

    if (!animation) return;

    if (speedFrameRef.current !== null) {
      cancelAnimationFrame(speedFrameRef.current);
    }

    const initialRate = animation.playbackRate;
    const startedAt = performance.now();

    const updateRate = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      animation.updatePlaybackRate(initialRate + (targetRate - initialRate) * easedProgress);

      if (progress < 1) {
        speedFrameRef.current = requestAnimationFrame(updateRate);
      } else {
        speedFrameRef.current = null;
      }
    };

    speedFrameRef.current = requestAnimationFrame(updateRate);
  };

  const renderClientLogos = (isDuplicate = false) => (
    <div className="client-marquee-group" aria-hidden={isDuplicate || undefined}>
      {clients.map((client) => (
        <div
          key={`${isDuplicate ? 'duplicate-' : ''}${client.name}`}
          className="client-logo-item flex h-[76px] w-[130px] shrink-0 items-center justify-center px-2 sm:h-[86px] sm:w-[150px] lg:h-[96px] lg:w-[170px]"
        >
          <img
            src={client.logo}
            alt={isDuplicate ? '' : client.name}
            className="max-h-[62px] max-w-[118px] object-contain sm:max-h-[70px] sm:max-w-[138px] lg:max-h-[76px] lg:max-w-[158px]"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-[#F9F9F7] px-5 pb-16 pt-0 md:px-8 md:pb-20">
      <div className="mx-auto w-full max-w-[1344px]">
        <div className="overflow-hidden rounded-[24px] bg-white px-0 py-10 text-center shadow-[0_14px_34px_rgba(15,32,23,0.06)] sm:rounded-[28px] sm:py-14 lg:py-16">
          <div className="px-6 sm:px-10 lg:px-16">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[2.6px] text-[#6A6F6C]">
            Clientes
          </span>
          <h2 className="mx-auto mt-4 max-w-[760px] font-heading text-[28px] font-bold leading-[1.1] text-[#0F2017] sm:text-[34px] lg:text-[42px]">
            Empresas que confiam na Solveri
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] font-body text-[15px] leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
            Atuação junto a operações de grande porte em setores estratégicos, com foco em segurança, continuidade e capacidade de resposta.
          </p>
          </div>

          <div
            ref={marqueeRef}
            className="client-marquee relative mt-10 overflow-hidden sm:mt-12"
            role="region"
            aria-label="Empresas clientes da Solveri"
            tabIndex={0}
            onMouseEnter={() => easeMarqueeSpeed(0.55, 500)}
            onMouseLeave={() => easeMarqueeSpeed(1, 700)}
            onFocus={() => easeMarqueeSpeed(0.55, 500)}
            onBlur={() => easeMarqueeSpeed(1, 700)}
          >
            <div className="client-marquee-track">
              {renderClientLogos()}
              {renderClientLogos(true)}
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-20 lg:w-28"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-20 lg:w-28"
              aria-hidden="true"
            />
          </div>

          <div className="px-6 sm:px-10 lg:px-16">
            <p className="mt-9 font-body text-[14px] leading-6 text-[#6F7370] sm:mt-10 sm:text-[15px]">
              E muitas outras operações de grande porte
            </p>

            <a
              href="/contato"
              className="mx-auto mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] bg-accent-bright px-6 font-heading text-[11px] font-bold text-accent-foreground transition hover:bg-[#c8f000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2017]"
            >
              Fale com nossa equipe
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const consultHubItems = [
  { label: 'Visão Geral', targetId: 'consult-visao-geral' },
  { label: 'Planos e Protocolos', targetId: 'consult-planos-protocolos' },
  { label: 'Centrais de Emergência', targetId: 'consult-centrais-emergencia' },
  { label: 'Estruturas de Resposta', targetId: 'consult-estruturas-resposta' },
  { label: 'Gestão de Crises', targetId: 'consult-gestao-crises' },
  { label: 'Diagnóstico e Auditoria', targetId: 'consult-diagnostico-auditoria' },
] as const;

function ConsultTopicsHub() {
  const [activeTargetId, setActiveTargetId] = useState<string>(consultHubItems[0].targetId);

  const handleTopicClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    setActiveTargetId(targetId);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      aria-label="Assuntos da Solveri Consult"
      className="bg-[#5B5F5C] px-5 pb-8 pt-2 md:px-8 md:pb-10 md:pt-3"
    >
      <div className="mx-auto grid w-full max-w-[1344px] grid-cols-2 overflow-hidden rounded-[10px] bg-white shadow-[0_14px_30px_rgba(15,32,23,0.10)] sm:grid-cols-3 lg:grid-cols-6">
        {consultHubItems.map((item, index) => {
          const isActive = activeTargetId === item.targetId;
          const hasMobileRightBorder = index % 2 === 0;
          const hasTabletRightBorder = index % 3 !== 2;

          return (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              aria-current={isActive ? 'location' : undefined}
              onClick={(event) => handleTopicClick(event, item.targetId)}
              className={`group relative flex min-h-[76px] items-center justify-center border-b border-[#1E2B23]/10 px-3 py-4 text-center font-heading text-[13px] font-bold leading-[1.15] outline-none transition duration-300 sm:min-h-[82px] sm:px-5 sm:text-[14px] lg:min-h-[90px] lg:border-b-0 lg:text-[15px] ${
                hasMobileRightBorder ? 'border-r' : ''
              } ${
                hasTabletRightBorder ? 'sm:border-r' : 'sm:border-r-0'
              } ${
                index < consultHubItems.length - 1 ? 'lg:border-r' : 'lg:border-r-0'
              } ${
                index >= consultHubItems.length - 2 ? 'border-b-0' : ''
              } sm:[&:nth-last-child(-n+3)]:border-b-0 ${
                isActive
                  ? 'bg-[#A8E63D]/[0.07] text-[#6B9E1D]'
                  : 'text-[#1E2B23] hover:bg-[#F6F8F4] hover:text-[#4D691D]'
              } focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#7DBA1D]`}
            >
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                {item.label}
              </span>
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#8BCB2A] transition-all duration-300 ${
                  isActive ? 'w-14 opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function ConsultHero() {
  return (
    <>
      <section id="consult" className="relative overflow-hidden bg-[#5B5F5C] px-5 pb-8 pt-[105px] md:px-8 md:pb-10">
        <img
          src={logoFundoImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-86px] top-[28px] h-[760px] w-[760px] opacity-[0.12] md:right-[-58px] md:top-[32px] md:h-[820px] md:w-[820px]"
        />

        <div className="relative mx-auto grid w-full max-w-[1344px] grid-rows-[auto_auto] gap-6 overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:gap-8 lg:min-h-[610px] lg:grid-cols-[0.55fr_0.45fr] lg:grid-rows-1 lg:gap-0 lg:rounded-[24px]">
          <div className="relative z-20 flex flex-col justify-center px-6 pb-0 pt-8 sm:px-10 sm:pb-0 sm:pt-10 lg:px-14 lg:py-14">
            <img src={logoPreta} alt="Solveri Consult" className="h-auto w-[132px] object-contain sm:w-[150px] lg:w-[165px]" />

            <div className="mt-8 lg:mt-10">
              <h1 className="max-w-[500px] font-heading text-[30px] font-bold leading-[1.06] text-[#1E2B23] sm:text-[34px] lg:max-w-[660px] lg:text-[41px]">
                <span className="lg:whitespace-nowrap">
                  Estruturação <span className="text-accent">estratégica</span>
                </span>{' '}
                <span className="lg:block lg:whitespace-nowrap">de sistemas de emergência</span>
              </h1>
              <p className="mt-4 max-w-[440px] font-body text-[15px] leading-7 text-[#616766] sm:text-[16px]">
                Diagnóstico, planejamento e modelagem de sistemas de gestão de emergências e crises sob medida para cada operação industrial de alto risco.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-10">
              <a
                href="/contato"
                className="inline-flex min-h-12 items-center justify-center rounded-[3px] bg-accent-bright px-6 text-center font-heading text-[13px] font-bold uppercase text-accent-foreground transition hover:bg-[#c8f000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7DBA1D] sm:min-w-[210px]"
              >
                Solicitar proposta
              </a>
              <a
                href="#consult-planos-protocolos"
                className="inline-flex min-h-12 items-center justify-center rounded-[3px] border border-[#6F7673]/60 px-6 text-center font-heading text-[13px] font-bold text-[#1E2B23] transition hover:border-[#1E2B23] hover:bg-[#F4F5F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1E2B23] sm:min-w-[210px]"
              >
                Conheça os serviços
              </a>
            </div>
          </div>

          <div className="relative mx-4 mb-4 aspect-[4/3] overflow-hidden rounded-[16px] sm:mx-6 sm:mb-6 sm:aspect-[16/10] lg:absolute lg:inset-0 lg:m-0 lg:aspect-auto lg:rounded-none">
            <img
              src={heroConsultImage}
              alt="Reunião de planejamento de emergência"
              className="absolute inset-0 h-full w-full object-cover object-[64%_center] sm:object-[68%_center] lg:object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/18 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/90 lg:via-[42%] lg:to-transparent" />
            <img
              src={sombraImage}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover opacity-70 lg:block"
            />
            <img
              src={circulosHeroConsultImage}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-12%] top-[-10%] h-auto w-[82%] max-w-[590px] object-contain opacity-80 sm:right-[-5%] sm:w-[68%] lg:right-[-22px] lg:top-[-8px] lg:w-[590px]"
            />
          </div>
        </div>
      </section>
      <ConsultTopicsHub />
    </>
  );
}

function ConsultUnitCard() {
  return (
    <section id="consult-visao-geral" className="scroll-mt-[164px] bg-[#F9F9F7] px-5 pb-20 pt-10 md:px-8 md:pb-24 md:pt-12">
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
                      href="/contato"
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
    sectionId: 'consult-planos-protocolos',
    eyebrow: 'PLANOS E PROTOCOLOS',
    badge: 'DESTAQUE',
    title: 'PAE / PEI / PEVO / PAEBM',
    description:
      'Desenvolvimento integral de planos de ação emergenciais e intervenção individual para cenários críticos industriais.',
    bullets: [
      'PAE - Plano de Ação de Emergência',
      'PEI - Plano de Emergência Individual',
      'PEVO - Plano de Emergência para Vazamento de Óleo',
      'PAEBM - Plano de Ação de Emergência para Barragens de Mineração',
    ],
    cta: 'Solicitar proposta',
    imageSrc: planejandoImage,
    imageAlt: 'Equipe planejando operação',
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: false,
  },
  {
    sectionId: 'consult-centrais-emergencia',
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
    imageSrc: centraisAtendimentoProtocolarImage,
    imageAlt: 'Centro integrado de operações com equipe monitorando câmeras, mapas e indicadores em tempo real',
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: true,
  },
  {
    sectionId: 'consult-estruturas-resposta',
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
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: false,
  },
  {
    sectionId: 'consult-gestao-crises',
    eyebrow: 'PLANOS DE CONTINGÊNCIA',
    badge: 'DESTAQUE',
    title: 'Planos de Contingência e Gestão de Crises',
    description:
      'Estratégias de continuidade de negócios e proteção reputacional para eventos de alta gravidade.',
    bullets: [
      'Contingência operacional robusta',
      'Gestão de crises e comunicação estratégica',
      'Atendimento pleno a exigências legais',
      'Metodologias internacionais (ICS/APELL)',
    ],
    cta: 'Solicitar proposta',
    imageSrc: escrevendoImage,
    imageAlt: 'Pessoa elaborando plano e gráficos',
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: true,
  },
  {
    sectionId: undefined,
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
    imageSrc: centroControleOperacionalImage,
    imageAlt: 'Centro de controle operacional com equipe monitorando telas e indicadores',
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: false,
  },
  {
    sectionId: 'consult-diagnostico-auditoria',
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
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: true,
  },
];

function ConsultProcessCard({
  sectionId,
  eyebrow,
  badge,
  title,
  description,
  bullets,
  cta,
  imageSrc,
  imageAlt,
  imageFit,
  imagePosition,
  reverse,
}: {
  sectionId?: string;
  eyebrow: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  imageSrc: string;
  imageAlt: string;
  imageFit: 'cover' | 'contain';
  imagePosition: string;
  reverse: boolean;
}) {
  return (
    <article
      id={sectionId}
      className={`overflow-hidden bg-[#0A0E0C] shadow-[0_20px_50px_rgba(15,32,23,0.12)] ${
        sectionId ? 'scroll-mt-[164px]' : ''
      }`}
    >
      <div className={`grid lg:min-h-[548px] lg:grid-cols-2 ${reverse ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111714] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[548px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`block h-full w-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,34,24,0.08)_0%,rgba(26,34,24,0.38)_100%)]" />
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
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
            <p className="mt-4 max-w-[500px] font-body text-[14px] leading-6 text-[#AAB2AD]">
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
            href="/contato"
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] border border-accent-bright/30 px-5 font-heading text-[12px] font-bold uppercase text-accent-bright transition hover:bg-accent-bright/10 hover:opacity-90 sm:w-fit"
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
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 sm:gap-6 lg:gap-0">
        {consultProcessCards.map((card) => (
          <ConsultProcessCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

type ConsultFormData = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  service: string;
  description: string;
};

type ConsultFormErrors = Partial<Record<keyof ConsultFormData, string>>;

const consultServiceOptions = [
  'PAE / PEI / PEVO / PAEBM',
  'Centrais de Atendimento Protocolar',
  'Modelagem de Estruturas Organizacionais de Resposta',
  'Planos de Contingência e Gestão de Crises',
  'Protocolos, Procedimentos e Matrizes de Acionamento',
  'Diagnóstico, Auditoria e Reestruturação de Processos',
];

function ConsultContactSection() {
  const [formData, setFormData] = useState<ConsultFormData>({
    name: '',
    company: '',
    role: '',
    phone: '',
    email: '',
    service: '',
    description: '',
  });
  const [errors, setErrors] = useState<ConsultFormErrors>({});

  const updateField = (field: keyof ConsultFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const validateForm = () => {
    const nextErrors: ConsultFormErrors = {};
    const requiredFields: Array<keyof ConsultFormData> = [
      'name',
      'company',
      'role',
      'phone',
      'email',
      'service',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        nextErrors[field] = 'Preencha este campo.';
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Informe um e-mail válido.';
    }

    if (formData.phone && formData.phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = 'Informe um telefone com DDD.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidField = Object.keys(nextErrors)[0] as keyof ConsultFormData;
      document.getElementById(`consult-${firstInvalidField}`)?.focus();
      return;
    }

    setErrors({});

    const message = [
      'Olá, equipe Solveri Consult!',
      '',
      'Gostaria de solicitar uma proposta.',
      '',
      `Nome: ${formData.name}`,
      `Empresa: ${formData.company}`,
      `Cargo: ${formData.role}`,
      `Telefone: ${formData.phone}`,
      `E-mail: ${formData.email}`,
      `Serviço de interesse: ${formData.service}`,
      '',
      'Cenário ou necessidade:',
      formData.description.trim() || 'Não informado.',
    ].join('\n');

    window.open(
      `https://wa.me/553138503510?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const fieldClass = (field: keyof ConsultFormData) =>
    `min-h-[52px] w-full rounded-[8px] border bg-[#262D29] px-4 font-body text-[13px] text-[#E7EBE7] outline-none transition placeholder:text-[#8E9792] ${
      errors[field]
        ? 'border-red-400/80 focus:border-red-300 focus:ring-2 focus:ring-red-400/20'
        : 'border-white/10 focus:border-[#A8E63D] focus:ring-2 focus:ring-[#A8E63D]/20'
    }`;

  return (
    <section className="relative overflow-hidden bg-[#2F3330] px-5 py-14 md:px-8 md:py-20 lg:py-24">
      <img
        src={logoFundoImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[40px] h-[620px] w-[620px] opacity-[0.08] md:right-[-100px] md:h-[760px] md:w-[760px] lg:right-[-60px] lg:h-[820px] lg:w-[820px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1180px] gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center lg:gap-16 xl:gap-20">
          <div className="flex flex-col justify-center text-white">
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
              <a href="tel:+553138503510" className="flex w-fit items-center gap-3 transition hover:text-[#A8E63D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8E63D]">
                <img src={telefoneImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                <span>+55 31 3850-3510</span>
              </a>
              <a href="mailto:contato@solverigroup.com" className="flex w-fit items-center gap-3 transition hover:text-[#A8E63D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8E63D]">
                <img src={emailImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                <span>contato@solverigroup.com</span>
              </a>
            </div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="relative rounded-[16px] bg-[#1E2420] px-5 py-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:px-8 sm:py-8"
          >
            <h3 className="font-heading text-[18px] font-bold text-white">Solicite uma proposta</h3>

            <div className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {([
                ['name', 'Nome completo *', 'Seu nome', 'name'],
                ['company', 'Empresa *', 'Nome da empresa', 'organization'],
                ['role', 'Cargo *', 'Seu cargo', 'organization-title'],
                ['phone', 'Telefone *', '(00) 00000-0000', 'tel'],
                ['email', 'E-mail corporativo *', 'email@empresa.com.br', 'email'],
              ] as const).map(([field, label, placeholder, autoComplete]) => (
                <label key={field} htmlFor={`consult-${field}`} className={`flex min-w-0 flex-col ${field === 'email' ? 'sm:col-span-2' : ''}`}>
                  <span className="mb-2 font-body text-[11px] text-[#9AA49E]">{label}</span>
                  <input
                    id={`consult-${field}`}
                    name={field}
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    value={formData[field]}
                    onChange={(event) => updateField(field, event.target.value)}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    aria-invalid={Boolean(errors[field])}
                    aria-describedby={errors[field] ? `consult-${field}-error` : undefined}
                    className={fieldClass(field)}
                  />
                  {errors[field] && (
                    <span id={`consult-${field}-error`} className="mt-1.5 font-body text-[11px] text-red-300">
                      {errors[field]}
                    </span>
                  )}
                </label>
              ))}

              <label htmlFor="consult-service" className="flex min-w-0 flex-col sm:col-span-2">
                <span className="mb-2 font-body text-[11px] text-[#9AA49E]">Qual serviço te interessa? *</span>
                <select
                  id="consult-service"
                  name="service"
                  value={formData.service}
                  onChange={(event) => updateField('service', event.target.value)}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? 'consult-service-error' : undefined}
                  className={`${fieldClass('service')} appearance-none bg-[linear-gradient(45deg,transparent_50%,#7F8A84_50%),linear-gradient(135deg,#7F8A84_50%,transparent_50%)] bg-[position:calc(100%-18px)_22px,calc(100%-13px)_22px] bg-[size:5px_5px,5px_5px] bg-no-repeat pr-10`}
                >
                  <option value="">Selecione uma opção</option>
                  {consultServiceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span id="consult-service-error" className="mt-1.5 font-body text-[11px] text-red-300">
                    {errors.service}
                  </span>
                )}
              </label>

              <label htmlFor="consult-description" className="flex min-w-0 flex-col sm:col-span-2">
                <span className="mb-2 font-body text-[11px] text-[#9AA49E]">Descreva brevemente seu cenário ou necessidade</span>
                <textarea
                  id="consult-description"
                  name="description"
                  value={formData.description}
                  onChange={(event) => updateField('description', event.target.value)}
                  placeholder="Conte-nos um pouco sobre o que busca..."
                  rows={5}
                  className={`${fieldClass('description')} min-h-[140px] resize-y py-4`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-[6px] bg-[#A8E63D] px-5 font-heading text-[12px] font-bold uppercase text-[#111714] transition hover:bg-[#b8f24f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FF00]"
            >
              Enviar solicitação
              <ArrowRight size={14} />
            </button>

            <p className="mt-5 text-center font-body text-[11px] text-[#7F8A84]">
              Seus dados são tratados com segurança e sigilo total.
            </p>
          </form>
      </div>
    </section>
  );
}

function ResponseHero() {
  return (
    <section id="response" className="bg-[#A8E63D] px-5 pb-8 pt-[101px] md:px-8 md:pb-10">
      <div className="relative mx-auto grid w-full max-w-[1344px] grid-rows-[auto_auto] gap-6 overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:gap-8 lg:min-h-[610px] lg:grid-cols-[0.55fr_0.45fr] lg:grid-rows-1 lg:gap-0 lg:rounded-[24px]">
        <div className="relative z-20 flex flex-col justify-center px-6 pb-0 pt-8 sm:px-10 sm:pb-0 sm:pt-10 lg:px-14 lg:py-14">
          <img src={logoResponse} alt="Solveri Response" className="h-auto w-[132px] object-contain sm:w-[150px] lg:w-[165px]" />

          <div className="mt-8 lg:mt-10">
            <h1 className="max-w-[570px] font-heading text-[30px] font-bold leading-[1.06] text-[#1E2B23] sm:text-[34px] lg:text-[41px]">
              Prontidão operacional para ambientes de alta <span className="text-[#A8E63D]">criticidade</span>
            </h1>
            <p className="mt-4 max-w-[540px] font-body text-[15px] leading-7 text-[#616766] sm:text-[16px]">
              Equipes, estruturas e apoio técnico especializado para resposta a eventos críticos em ambientes industriais, minerários, petroquímicos, logísticos e portuários.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-10">
            <a
              href="/contato"
              className="inline-flex min-h-12 items-center justify-center rounded-[3px] bg-[#D4FF00] px-6 text-center font-heading text-[13px] font-bold uppercase text-[#111714] transition hover:bg-[#c7f500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#78A81D] sm:min-w-[230px]"
            >
              Solicitar proposta
            </a>
            <a
              href="#response-emergencias-industriais"
              className="inline-flex min-h-12 items-center justify-center rounded-[3px] border border-[#111714]/60 px-6 text-center font-heading text-[13px] font-bold text-[#111714] transition hover:border-[#111714] hover:bg-[#F4F5F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#111714] sm:min-w-[230px]"
            >
              Conheça os serviços
            </a>
          </div>
        </div>

        <div className="relative mx-4 mb-4 aspect-[4/3] overflow-hidden rounded-[16px] sm:mx-6 sm:mb-6 sm:aspect-[16/10] lg:absolute lg:inset-0 lg:m-0 lg:aspect-auto lg:rounded-none">
          <img
            src={responseHeroBackground}
            alt="Profissionais com roupas de proteção química realizando descontaminação operacional"
            className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[70%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent lg:bg-gradient-to-r lg:from-white/70 lg:via-white/10 lg:to-transparent" />
          <img
            src={circulosHeroConsultImage}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-12%] top-[-10%] h-auto w-[82%] max-w-[590px] object-contain opacity-80 sm:right-[-5%] sm:w-[68%] lg:right-[-22px] lg:top-[-8px] lg:w-[590px]"
          />
        </div>
      </div>
    </section>
  );
}

const responseHubItems = [
  { label: 'Visão Geral', targetId: 'response-visao-geral' },
  { label: 'Emergências Industriais', targetId: 'response-emergencias-industriais' },
  { label: 'Centrais Protocolares', targetId: 'response-centrais-protocolares' },
  { label: 'Mobilização de Equipes', targetId: 'response-mobilizacao-equipes' },
  { label: 'Simulados e Exercícios', targetId: 'response-simulados-exercicios' },
  { label: 'Postos de Comando', targetId: 'response-postos-comando' },
  { label: 'Profissionais para EORs', targetId: 'response-profissionais-eors' },
] as const;

function ResponseHighlightCard() {
  const [activeTargetId, setActiveTargetId] = useState<string>(responseHubItems[0].targetId);

  const handleTopicClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    setActiveTargetId(targetId);
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav aria-label="Assuntos da Solveri Response" className="bg-[#A8E63D] px-5 pb-[52px] pt-2 md:px-8 md:pt-3">
      <div className="mx-auto grid w-full max-w-[1353px] grid-cols-2 overflow-hidden rounded-[10px] bg-white shadow-[0_14px_30px_rgba(15,32,23,0.10)] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {responseHubItems.map((item, index) => {
          const isActive = activeTargetId === item.targetId;
          const hasMobileRightBorder = index % 2 === 0;
          const hasTabletRightBorder = index % 3 !== 2;
          const hasMediumRightBorder = index % 4 !== 3;

          return (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              aria-current={isActive ? 'location' : undefined}
              onClick={(event) => handleTopicClick(event, item.targetId)}
              className={`group relative flex min-h-[76px] items-center justify-center border-b border-[#111714]/10 px-3 py-4 text-center font-heading text-[13px] font-bold leading-[1.15] outline-none transition duration-300 sm:min-h-[82px] sm:px-4 sm:text-[14px] lg:min-h-[90px] lg:border-b-0 lg:text-[15px] ${
                hasMobileRightBorder ? 'border-r' : ''
              } ${hasTabletRightBorder ? 'sm:border-r' : 'sm:border-r-0'} ${
                hasMediumRightBorder ? 'md:border-r' : 'md:border-r-0'
              } ${index < responseHubItems.length - 1 ? 'lg:border-r' : 'lg:border-r-0'} ${
                index >= responseHubItems.length - 1 ? 'border-b-0' : ''
              } ${
                isActive
                  ? 'bg-[#A8E63D]/[0.08] text-[#5E9401]'
                  : 'text-[#111714] hover:bg-[#F6F8F4] hover:text-[#4D691D]'
              } focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#5E9401]`}
            >
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5">{item.label}</span>
              <span
                aria-hidden="true"
                className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#7DBA1D] transition-all duration-300 ${
                  isActive ? 'w-14 opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function ResponseActionSection() {
  return (
    <section id="response-visao-geral" className="scroll-mt-[100px] bg-[#F9F9F7] px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-[1340px] overflow-hidden rounded-[20px] bg-[#1A2218] px-6 py-8 shadow-[0_24px_60px_rgba(15,32,23,0.16)] sm:rounded-[24px] sm:px-10 sm:py-10 md:px-12 md:py-12 lg:min-h-[610px] lg:rounded-[28px] lg:px-16 lg:py-14 xl:px-24">
        <div className="grid gap-10 sm:gap-12 lg:min-h-[498px] lg:grid-cols-[0.46fr_0.54fr] lg:items-center lg:gap-16">
          <div className="flex flex-col justify-center">
            <span className="font-heading text-[10px] font-bold uppercase tracking-[2.6px] text-accent-bright">
              A Unidade
            </span>

            <h2 className="mt-4 max-w-[430px] font-heading text-[28px] font-bold leading-[1.06] text-white sm:text-[34px] lg:text-[40px]">
              Execução prática e prontidão operacional em campo
            </h2>

            <p className="mt-4 max-w-[430px] font-body text-[15px] leading-6 text-[#B7BCB8] lg:text-[16px]">
              Unidade operacional do grupo para resposta a eventos críticos com equipes, estruturas e apoio técnico especializado em ambientes de alta complexidade.
            </p>

            <a
              href="/contato"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[3px] bg-[#A8E63D] px-5 font-heading text-[12px] font-bold uppercase text-[#111714] transition hover:bg-[#b5f04e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FF00] sm:w-fit sm:min-w-[214px]"
            >
              Solicitar proposta
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex min-w-0 flex-col justify-center lg:justify-self-end">
            <div className="relative aspect-video w-full overflow-hidden rounded-[16px] sm:rounded-[18px] lg:max-w-[528px]">
              <img
                src={thumbnailResponseImage}
                alt="Thumbnail de operação em campo"
                className="block h-full w-full object-cover"
              />
              <img
                src={sombraThumbnailResponseImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label="Assistir apresentação da Solveri Response"
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FF00]"
              >
                <img src={playButtonImage} alt="" aria-hidden="true" className="h-[42px] w-[42px] object-contain" />
              </button>
            </div>

            <div className="mt-3 flex items-start gap-2 text-[12px] leading-5 text-[#B7BCB8]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Conheça a Solveri Response em ação</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['IAEM', 'NFPA', 'EOR', 'ICS/SCI'].map((item) => (
                <span
                  key={item}
                  className="inline-flex min-h-7 items-center rounded-[999px] border border-[#2F4A16] px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.08em] text-[#A8E63D]"
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
                    className="inline-flex min-h-7 items-center rounded-[999px] border border-[#2F4A16] px-3 py-1 font-body text-[11px] text-[#A8E63D]"
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
    sectionId: 'response-emergencias-industriais',
    eyebrow: 'Emergências Industriais',
    title: 'Atendimento a Emergências Industriais',
    description:
      'Resposta a ocorrências de diferentes perfis e complexidade, garantindo a integridade dos ativos e a continuidade operacional.',
    bullets: [
      'Resposta rápida e protocolos de contenção',
      'Integração com planos de emergência das empresas',
      'Proteção ambiental e de infraestrutura',
      'Adaptável a diferentes cenários críticos',
    ],
    cta: 'Solicitar proposta',
    imageSrc: apagandoFogoImage,
    imageAlt: 'Equipe atuando em combate a incêndio industrial',
    imageFit: 'cover' as const,
    imagePosition: 'center 58%',
    reverse: false,
  },
  {
    sectionId: 'response-centrais-protocolares',
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
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: true,
  },
  {
    sectionId: 'response-mobilizacao-equipes',
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
    imageSrc: novaImagemResponseImage,
    imageAlt: 'Equipe de resposta mobilizada em campo',
    imageFit: 'cover' as const,
    imagePosition: '45% center',
    reverse: false,
  },
  {
    sectionId: 'response-simulados-exercicios',
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
    imageFit: 'cover' as const,
    imagePosition: 'center 45%',
    reverse: true,
  },
  {
    sectionId: 'response-postos-comando',
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
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: false,
  },
  {
    sectionId: 'response-profissionais-eors',
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
    imageFit: 'cover' as const,
    imagePosition: 'center',
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
  sectionId,
  eyebrow,
  title,
  description,
  bullets,
  cta,
  imageSrc,
  imageAlt,
  imageFit,
  imagePosition,
  reverse,
}: {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  imageSrc: string;
  imageAlt: string;
  imageFit: 'cover' | 'contain';
  imagePosition: string;
  reverse: boolean;
}) {
  return (
    <article
      id={sectionId}
      className="scroll-mt-[100px] overflow-hidden bg-[#111714] shadow-[0_20px_50px_rgba(15,32,23,0.12)]"
    >
      <div className={`grid lg:min-h-[544px] lg:grid-cols-2 ${reverse ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D130F] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[544px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`block h-full w-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-black/10" />
          <span
            className={`absolute left-4 top-4 z-10 inline-flex min-h-[22px] items-center bg-[#D4FF00] px-3 font-heading text-[9px] font-bold uppercase tracking-[0.08em] text-[#111714] ${
              reverse ? 'lg:left-auto lg:right-4' : ''
            }`}
          >
            Destaque
          </span>
        </div>

        <div className="flex flex-col justify-center px-6 pb-8 pt-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-14">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-accent-bright" style={{ fontFamily: 'Exo, sans-serif' }}>
            {eyebrow}
          </span>
          <h3 className="mt-3 max-w-[520px] font-heading text-[24px] font-bold leading-[1.08] text-white sm:text-[28px] lg:text-[30px]">
            {title}
          </h3>
          <p className="mt-4 max-w-[520px] font-body text-[14px] leading-6 text-[#AAB2AD] lg:text-[16px]">
            {description}
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 font-body text-[14px] leading-5 text-[#B7BCB8] lg:text-[16px]">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-accent-bright" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <a
            href="/contato"
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] border border-accent-bright/30 px-5 font-heading text-[14px] font-bold text-accent-bright transition hover:bg-accent-bright/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-[#111714] sm:w-fit lg:border-transparent lg:px-0 lg:text-[16px] lg:hover:bg-transparent"
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
        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-0">
          {responseDeliverablesCards.map((card) => (
            <ResponseDeliverableCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ResponseFormData = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  service: string;
  description: string;
};

type ResponseFormErrors = Partial<Record<keyof ResponseFormData, string>>;

const responseServiceOptions = [
  'Atendimento a Emergências Industriais',
  'Operação de Centrais de Atendimento Protocolar',
  'Composição e Mobilização de Equipes de Resposta',
  'Suporte Operacional em Simulados e Exercícios',
  'Postos de Comando, Salas de Situação e Centros de Coordenação',
  'Profissionais Credenciados para EORs Públicas e Privadas',
];

function ResponseContactSection() {
  const [formData, setFormData] = useState<ResponseFormData>({
    name: '',
    company: '',
    role: '',
    phone: '',
    email: '',
    service: '',
    description: '',
  });
  const [errors, setErrors] = useState<ResponseFormErrors>({});

  const updateField = (field: keyof ResponseFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const validateForm = () => {
    const nextErrors: ResponseFormErrors = {};
    const requiredFields: Array<keyof ResponseFormData> = [
      'name',
      'company',
      'role',
      'phone',
      'email',
      'service',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        nextErrors[field] = 'Preencha este campo.';
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Informe um e-mail válido.';
    }

    if (formData.phone && formData.phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = 'Informe um telefone com DDD.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidField = Object.keys(nextErrors)[0] as keyof ResponseFormData;
      document.getElementById(`response-contact-${firstInvalidField}`)?.focus();
      return;
    }

    setErrors({});

    const message = [
      'Olá, equipe Solveri Response!',
      '',
      'Gostaria de solicitar uma proposta.',
      '',
      `Nome: ${formData.name}`,
      `Empresa: ${formData.company}`,
      `Cargo: ${formData.role}`,
      `Telefone: ${formData.phone}`,
      `E-mail: ${formData.email}`,
      `Serviço de interesse: ${formData.service}`,
      '',
      'Cenário ou necessidade:',
      formData.description.trim() || 'Não informado.',
    ].join('\n');

    window.open(
      `https://wa.me/553138503510?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const fieldClass = (field: keyof ResponseFormData) =>
    `min-h-[52px] w-full rounded-[8px] border bg-[#262D29] px-4 font-body text-[13px] text-[#E7EBE7] outline-none transition placeholder:text-[#8E9792] ${
      errors[field]
        ? 'border-red-400/80 focus:border-red-300 focus:ring-2 focus:ring-red-400/20'
        : 'border-white/10 focus:border-[#A8E63D] focus:ring-2 focus:ring-[#A8E63D]/20'
    }`;

  return (
    <section className="relative overflow-hidden bg-[#5B5F5C] px-5 py-14 md:px-8 md:py-20 lg:py-24">
      <img
        src={logoFundoImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[40px] h-[620px] w-[620px] opacity-[0.08] md:right-[-100px] md:h-[760px] md:w-[760px] lg:right-[-60px] lg:h-[820px] lg:w-[820px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1180px] gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center lg:gap-16 xl:gap-20">
        <div className="flex flex-col justify-center text-white">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-accent-bright">
            Fale com a Solveri Response
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
                  <img src={checkImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="my-8 h-px w-full max-w-[300px] bg-white/8" />

          <div className="space-y-[11px] font-body text-[13px] text-[#E7EBE7]">
            <a
              href="tel:+553138503510"
              className="flex w-fit items-center gap-3 transition hover:text-[#A8E63D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8E63D]"
            >
              <img src={telefoneImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
              <span>+55 31 3850-3510</span>
            </a>
            <a
              href="mailto:contato@solverigroup.com"
              className="flex w-fit items-center gap-3 transition hover:text-[#A8E63D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8E63D]"
            >
              <img src={emailImage} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
              <span>contato@solverigroup.com</span>
            </a>
          </div>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="relative rounded-[16px] bg-[#1E2420] px-5 py-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:px-8 sm:py-8"
        >
          <h3 className="font-heading text-[18px] font-bold text-white">Solicite uma proposta</h3>

          <div className="mt-7 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {([
              ['name', 'Nome completo *', 'Seu nome', 'name'],
              ['company', 'Empresa *', 'Nome da empresa', 'organization'],
              ['role', 'Cargo *', 'Seu cargo', 'organization-title'],
              ['phone', 'Telefone *', '(00) 00000-0000', 'tel'],
              ['email', 'E-mail corporativo *', 'email@empresa.com.br', 'email'],
            ] as const).map(([field, label, placeholder, autoComplete]) => (
              <label
                key={field}
                htmlFor={`response-contact-${field}`}
                className={`flex min-w-0 flex-col ${field === 'email' ? 'sm:col-span-2' : ''}`}
              >
                <span className="mb-2 font-body text-[11px] text-[#9AA49E]">{label}</span>
                <input
                  id={`response-contact-${field}`}
                  name={field}
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  value={formData[field]}
                  onChange={(event) => updateField(field, event.target.value)}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  aria-invalid={Boolean(errors[field])}
                  aria-describedby={errors[field] ? `response-contact-${field}-error` : undefined}
                  className={fieldClass(field)}
                />
                {errors[field] && (
                  <span
                    id={`response-contact-${field}-error`}
                    className="mt-1.5 font-body text-[11px] text-red-300"
                  >
                    {errors[field]}
                  </span>
                )}
              </label>
            ))}

            <label htmlFor="response-contact-service" className="flex min-w-0 flex-col sm:col-span-2">
              <span className="mb-2 font-body text-[11px] text-[#9AA49E]">Qual serviço te interessa? *</span>
              <select
                id="response-contact-service"
                name="service"
                value={formData.service}
                onChange={(event) => updateField('service', event.target.value)}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? 'response-contact-service-error' : undefined}
                className={`${fieldClass('service')} appearance-none bg-[linear-gradient(45deg,transparent_50%,#7F8A84_50%),linear-gradient(135deg,#7F8A84_50%,transparent_50%)] bg-[position:calc(100%-18px)_22px,calc(100%-13px)_22px] bg-[size:5px_5px,5px_5px] bg-no-repeat pr-10`}
              >
                <option value="">Selecione uma opção</option>
                {responseServiceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span id="response-contact-service-error" className="mt-1.5 font-body text-[11px] text-red-300">
                  {errors.service}
                </span>
              )}
            </label>

            <label htmlFor="response-contact-description" className="flex min-w-0 flex-col sm:col-span-2">
              <span className="mb-2 font-body text-[11px] text-[#9AA49E]">
                Descreva brevemente seu cenário ou necessidade
              </span>
              <textarea
                id="response-contact-description"
                name="description"
                value={formData.description}
                onChange={(event) => updateField('description', event.target.value)}
                placeholder="Conte-nos um pouco sobre o que busca..."
                rows={5}
                className={`${fieldClass('description')} min-h-[140px] resize-y py-4`}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-7 flex min-h-12 w-full items-center justify-center gap-2 rounded-[6px] bg-[#A8E63D] px-5 font-heading text-[12px] font-bold uppercase text-[#111714] transition hover:bg-[#b8f24f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FF00]"
          >
            Enviar solicitação
            <ArrowRight size={14} />
          </button>

          <p className="mt-5 text-center font-body text-[11px] text-[#7F8A84]">
            Seus dados são tratados com segurança e sigilo total.
          </p>
        </form>
      </div>
    </section>
  );
}

function AcademyHero() {
  return (
    <section id="academy" className="relative overflow-hidden bg-[#0D1B14] px-5 pb-10 pt-[101px] md:px-8 md:pb-14">
      <div className="relative mx-auto grid w-full max-w-[1344px] grid-rows-[auto_auto] gap-6 overflow-hidden rounded-[20px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:gap-8 lg:min-h-[610px] lg:grid-cols-[0.55fr_0.45fr] lg:grid-rows-1 lg:gap-0 lg:rounded-[24px]">
        <div className="relative z-20 flex flex-col justify-center px-6 pb-0 pt-8 sm:px-10 sm:pb-0 sm:pt-10 lg:px-[60px] lg:py-14">
          <img
            src={academyHeroLogo}
            alt="Solveri Academy"
            className="h-auto w-[132px] object-contain sm:w-[150px] lg:w-[165px]"
          />

          <div className="mt-8 lg:mt-9">
            <h1 className="max-w-[610px] font-heading text-[30px] font-bold leading-[1.08] text-[#0F2017] sm:text-[34px] lg:text-[43px]">
              Formação técnica que transforma conhecimento em{' '}
              <span className="text-[#A8E63D]">competência operacional</span>
            </h1>
            <p className="mt-4 max-w-[610px] font-body text-[15px] leading-7 text-[#616766] sm:text-[16px] lg:text-[18px]">
              Programas presenciais, EAD e híbridos em ICS/SCI, Normas Regulamentadoras, SSMA e gestão de
              emergências para equipes operacionais e lideranças.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-9">
            <a
              href="#academy-cursos"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-[3px] bg-[#D4FF00] px-6 text-center font-heading text-[13px] font-bold uppercase text-[#111714] transition hover:bg-[#c7f500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#78A81D] sm:w-auto sm:min-w-[260px]"
            >
              Conheça os cursos
            </a>
            <a
              href="/contato"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-[#111714]/60 px-6 text-center font-heading text-[13px] font-bold text-[#111714] transition hover:border-[#111714] hover:bg-[#F4F5F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#111714] sm:w-auto sm:min-w-[260px]"
            >
              Fale com um especialista
            </a>
          </div>
        </div>

        <div className="relative mx-4 mb-4 aspect-[4/3] overflow-hidden rounded-[16px] sm:mx-6 sm:mb-6 sm:aspect-[16/10] lg:absolute lg:inset-0 lg:m-0 lg:aspect-auto lg:rounded-none">
          <img
            src={academyHeroBackground}
            alt="Equipe participando de treinamento prático de resposta a emergências da Solveri Academy"
            className="absolute inset-0 h-full w-full object-cover object-[76%_center] sm:object-[74%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent lg:bg-gradient-to-r lg:from-white/70 lg:via-white/10 lg:to-transparent" />
          <img
            src={academyHeroCircles}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[-12%] top-[-10%] h-auto w-[82%] max-w-[590px] object-contain opacity-80 sm:right-[-5%] sm:w-[68%] lg:right-[-22px] lg:top-[-8px] lg:w-[590px]"
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
    'Credenciadora de  profissionais de gerenciamento de  crises e emergências de acordo com as certificações e registros de  qualificação',
  ];

  const stats = [
    { value: '+2.000', label: 'profissionais capacitados' },
    { value: '11', label: 'áreas de formação' },
    { value: '3', label: 'modalidades de ensino' },
  ];

  return (
    <section className="bg-[#F9F9F7] px-5 pb-0 pt-14 md:px-8 md:pt-20">
      <div className="mx-auto w-full max-w-[1340px]">
        <article className="overflow-hidden rounded-[20px] bg-[#111714] px-6 py-10 text-white shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:rounded-[24px] sm:px-10 sm:py-12 lg:min-h-[732px] lg:px-16 lg:py-16 xl:px-[110px] xl:py-[72px]">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-[92px]">
            <div className="flex min-w-0 flex-col">
              <div className="max-w-[444px]">
                <span className="font-heading text-[11px] font-bold uppercase tracking-[2.4px] text-[#A8E63D]" style={{ fontFamily: 'Exo, sans-serif' }}>
                  A UNIDADE
                </span>
                <h2 className="mt-4 max-w-[430px] font-heading text-[28px] font-bold leading-[1.05] text-white sm:text-[36px] lg:text-[40px] xl:text-[44px]" style={{ fontFamily: 'Exo, sans-serif' }}>
                  O braço educacional e de credenciamento do Grupo Solveri
                </h2>
                <p className="mt-5 max-w-[445px] font-body text-[15px] leading-7 text-[#B7BCB8]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  A Solveri Academy transforma conhecimento técnico em competência operacional validada. Cursos, trilhas de formação, credenciamento e recertificação de profissionais nas áreas de emergência, ICS/SCI, telecomunicações, SSMA e gestão de crises.
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-8">
                <div className="grid max-w-[486px] grid-cols-1 gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex min-h-[104px] min-w-0 flex-col justify-center rounded-[10px] border border-[#2C3C25] bg-[#162018] px-4 py-3">
                      <div className="font-heading text-[28px] font-bold leading-none text-[#A8E63D]" style={{ fontFamily: 'Exo, sans-serif' }}>
                        {stat.value}
                      </div>
                      <div className="mt-1 font-body text-[12px] leading-[1.3] text-[#B7BCB8]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#academy-cursos"
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-[#A8E63D] px-5 font-heading text-[14px] font-bold text-[#111714] transition hover:bg-[#c8f000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FF00] sm:w-fit sm:min-w-[187px]"
                  style={{ fontFamily: 'Exo, sans-serif' }}
                >
                  Conheça os cursos
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="flex min-w-0 flex-col">
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
                  Parcerias e credenciamentos
                </span>

                <div className="mt-5 space-y-5">
                  <div>
                    <span
                      className="font-heading text-[10px] font-bold uppercase tracking-[2.2px] text-white/55"
                      style={{ fontFamily: 'Exo, sans-serif' }}
                    >
                      Parcerias
                    </span>

                    <div className="mt-3 flex flex-wrap gap-3">
                      {[
                        { src: ircaLogo, alt: 'IRCA Global Brasil', className: 'h-[22px]' },
                        { src: advancedLogo, alt: 'Advanced', className: 'h-[26px]' },
                      ].map((logo) => (
                        <div
                          key={logo.alt}
                          className="flex min-h-[58px] min-w-[168px] items-center justify-center rounded-[12px] border border-[#2F4A16] bg-[#162018] px-5 py-3"
                        >
                          <img src={logo.src} alt={logo.alt} className={`${logo.className} w-auto object-contain`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span
                      className="font-heading text-[10px] font-bold uppercase tracking-[2.2px] text-white/55"
                      style={{ fontFamily: 'Exo, sans-serif' }}
                    >
                      Credenciamentos
                    </span>

                    <div className="mt-3 flex flex-wrap gap-3">
                      {[
                        { src: nfpaLogo, alt: 'NFPA', className: 'h-[30px]', helper: 'Membro colaborador' },
                        { src: iaemLogo, alt: 'IAEM', className: 'h-[30px]', helper: 'Membro colaborador' },
                        { src: iso31000Logo, alt: 'ISO 31000', className: 'h-[32px]' },
                        { src: iso45001Logo, alt: 'ISO 45001', className: 'h-[32px]' },
                      ].map((logo) => (
                        <div
                          key={logo.alt}
                          className="flex min-h-[58px] min-w-[120px] flex-col items-center justify-center rounded-[12px] border border-[#2F4A16] bg-[#162018] px-4 py-3"
                        >
                          <img src={logo.src} alt={logo.alt} className={`${logo.className} w-auto object-contain`} />
                          {logo.helper ? (
                            <span
                              className="mt-2 text-center font-body text-[10px] leading-4 text-white/58"
                              style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                              {logo.helper}
                            </span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
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
    bulletsRight: ['ICS 300 / 320', 'PAI – Plano de Ação do\nIncidente'],
    modalities: ['Presencial', 'Híbrido', 'EAD'],
    cta: 'Solicitar informações',
    imageSrc: monitoresImage,
    imageAlt: 'Monitores com sistemas de comando',
    imageFit: 'cover' as const,
    imagePosition: 'center',
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
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: true,
  },
  {
    eyebrow: 'Conformidade Técnica',
    title: 'Cursos Técnicos, Operacionais e Normas Regulamentadoras',
    description:
      'Treinamentos técnicos especializados com foco total na conformidade legal (NRs) e excelência operacional. Cobrimos desde a formação de brigadas de incêndio até resgates de alta complexidade em espaços confinados e altura. O foco é a capacitação prática rigorosa, utilizando simuladores e cenários reais para garantir que o profissional esteja apto a executar suas funções com o máximo de segurança e eficiência técnica exigida pelo mercado industrial moderno.',
    bulletsLeft: [
      'NR-01, NR-02,NR-03, NR-04, NR-05, NR-06, NR07, NR-08, NR-09, NR-10, NR-11, NR-12, NR-13, NR-14, NR-15, NR16, NR-17, NR-18, NR-19, NR-20, NR-21, NR-22, NR-23, NR-24, NR25, NR-26, NR-27, NR-28, NR-29, NR-30, NR-31, NR-32, NR-33, NR34, NR-35, NR-36, NR-37, NR-38.',
      'Brigada de Incêndio',
    ],
    bulletsRight: ['Resgate Vertical', 'Primeiros Socorros'],
    modalities: ['Presencial', 'EAD'],
    cta: 'Solicitar informações',
    imageSrc: mochilasImage,
    imageAlt: 'Equipe com mochilas de treinamento',
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: false,
  },
  {
    eyebrow: 'Excelência Operacional',
    title: 'Gestão SHERQ / SSMA',
    description:
      'Desenvolvimento de uma cultura robusta de Segurança, Saúde, Meio Ambiente e Qualidade. Este curso preparar líderes e gestores para implementar sistemas de gestão integrados que não apenas cumpram normas, mas elevem o desempenho operacional. Abordamos a liderança servidora, ferramentas de auditoria comportamental e a gestão de KPIs de segurança, transformando o SSMA em um centro de custo em um pilar de valor estratégico para a organização.',
    bulletsLeft: ['ISO9001, ISO31000, ISO45001,  & 14001', 'Gestão de Desempenho'],
    bulletsRight: ['Liderança em SSMA', 'Cultura de Segurança'],
    modalities: ['EAD', 'Presencial'],
    cta: 'Solicitar informações',
    imageSrc: mesaECadeirasImage,
    imageAlt: 'Mesa e cadeiras em ambiente corporativo',
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: true,
  },
  {
    eyebrow: 'Governança e Controle',
    title: 'Auditorias, Conformidade e Melhoria de Processos',
    description:
      'Um mergulho profundo nos mecanismos de verificação e planos de ação necessários para manter a integridade organizacional. Este treinamento foca no desenvolvimento de auditores internos capazes de identificar desvios sistêmicos e propor melhorias contínuas. Trabalhamos com frameworks de compliance para garantir a conformidade legal e o aumento gradual da maturidade operacional, assegurando que os processos internos sejam resilientes e auditáveis a qualquer momento.',
    bulletsLeft: ['Auditoria Interna', 'Planos de Ação (PDCA)'],
    bulletsRight: ['Compliance Legal', 'Maturidade de Processos'],
    modalities: ['Híbrido', 'Presencial', 'EAD'],
    cta: 'Solicitar informações',
    imageSrc: graficosImage,
    imageAlt: 'Gráficos e análise corporativa',
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: false,
  },
  {
    eyebrow: 'Prevenção e Prontidão',
    title: 'Análise de Riscos e Preparação para Emergências',
    description:
      'Identificação proativa e mitigação de perigos operacionais. Este módulo ensina as metodologias de análise de risco mais avançadas (APR, HAZOP, What-If) e como transformá-las em planos de emergência eficazes. Focamos no desenvolvimento de cenários de crise e na organização de simulados que testam a real capacidade de resposta da equipe. A prevenção é tratada como um processo dinâmico de antecipação do erro, salvaguardando vidas e ativos críticos.',
    bulletsLeft: ['APR, HAZOP e Bowtie', 'Planos de Emergência,\nContingência e Crise'],
    bulletsRight: ['Gestão de Mudanças', 'Simulados Práticos'],
    modalities: ['EAD', 'Presencial'],
    cta: 'Solicitar informações',
    imageSrc: analiseImage,
    imageAlt: 'Análise de riscos em tela',
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: true,
  },
  {
    eyebrow: 'Aprendizado Organizacional',
    title: 'Investigação e Análise de Incidentes',
    description:
      'Transformando falhas em oportunidades de aprendizado e crescimento. Ensinamos técnicas forenses e metodologias de análise de causa raiz (Fishbone, 5 Whys, Árvore de Falhas) para desvendar a cadeia de eventos de um incidente. O foco não é culpar, mas entender as defesas do sistema que falharam. Ao final, o aluno estará apto a redigir relatórios técnicos precisos e implementar barreiras robustas que evitam a recorrência de incidentes similares no futuro.',
    bulletsLeft: ['Causa Raiz', 'Lições Aprendidas'],
    bulletsRight: ['Fatores Humanos', 'Relatórios Técnicos'],
    modalities: ['Híbrido', 'Presencial', 'EAD'],
    cta: 'Solicitar informações',
    imageSrc: droneImage,
    imageAlt: 'Drone em operação de monitoramento',
    imageFit: 'cover' as const,
    imagePosition: 'center',
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
    imageFit: 'cover' as const,
    imagePosition: 'center',
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
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: false,
  },
  {
    eyebrow: 'Desenvolvimento Humano',
    title: 'Habilidades, Liderança e Desenvolvimento Profissional',
    description:
      'O fator humano é o elo mais importante em qualquer sistema de segurança. Este curso foca nas "soft skills" necessárias para a gestão de crises: comunicação assertiva, tomada de decisão sob pressão, gestão de conflitos e inteligência emocional. Trabalhamos o conceito de accountability (responsabilização), inspirando profissionais a serem donos de seus processos e líderes natos, independentemente de seus cargos, criando uma rede de confiança técnica e comportamental.',
    bulletsLeft: ['Inteligência Emocional', 'Postura Profissional'],
    bulletsRight: ['Gestão de Crise', 'Accountability'],
    modalities: ['Híbrido', 'Presencial', 'EAD'],
    cta: 'Solicitar informações',
    imageSrc: reuniaoMonitoresImage,
    imageAlt: 'Reunião com monitores e telas',
    imageFit: 'cover' as const,
    imagePosition: 'center',
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
    imageFit: 'cover' as const,
    imagePosition: 'center',
    reverse: false,
  },
];

function AcademyCoursesIntro() {
  return (
    <header className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
      <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
        Cursos
      </span>
      <h2 className="mt-4 max-w-[540px] font-heading text-[28px] font-bold leading-[1.06] text-[#0F2017] sm:text-[36px] lg:text-[42px]">
        Formação técnica para cada nível de atuação
      </h2>
      <p className="mt-4 max-w-[520px] font-body text-[14px] font-normal leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
        Programas presenciais, EAD e híbridos com foco em aplicação real e alto padrão técnico.
      </p>
    </header>
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
  imageFit,
  imagePosition,
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
  imageFit: 'cover' | 'contain';
  imagePosition: string;
  reverse: boolean;
}) {
  return (
    <article className="overflow-hidden border-b border-white/10 bg-[#111714] shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
      <div className={`grid lg:min-h-[780px] lg:grid-cols-2 ${reverse ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0D130F] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[780px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`block h-full w-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            style={{ objectPosition: imagePosition }}
          />
        </div>

        <div className="flex min-w-0 flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-14">
          <div>
            <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#A8E63D] sm:text-[11px] lg:text-[12px]" style={{ fontFamily: 'Exo, sans-serif' }}>
              {eyebrow}
            </span>
            <h3 className="mt-4 max-w-[560px] break-words font-heading text-[24px] font-bold leading-[1.08] text-white sm:text-[28px] lg:text-[34px] xl:text-[38px]" style={{ fontFamily: 'Exo, sans-serif' }}>
              {title}
            </h3>
            <p className="mt-5 max-w-[600px] font-body text-[14px] leading-6 text-[#B7BCB8] sm:text-[15px] sm:leading-7 lg:text-[16px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {description}
            </p>

            <div className="mt-8">
              <span className="font-body text-[11px] font-medium uppercase tracking-[1.8px] text-[#98A5A0]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Conteúdo Programático Completo
              </span>

              <div className="mt-5 grid min-w-0 gap-x-8 gap-y-3 sm:grid-cols-2 xl:gap-x-12">
                {[bulletsLeft, bulletsRight].map((column, columnIndex) => (
                  <ul key={columnIndex} className="min-w-0 space-y-4">
                    {column.map((item) => (
                      <li key={item} className="flex min-w-0 items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-[#A8E63D]" />
                        <span className="min-w-0 break-words whitespace-pre-line font-body text-[13px] leading-5 text-[#DDE2DE] sm:text-[14px] sm:leading-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
                {modalities.map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-[30px] items-center justify-center rounded-full border border-[#2F4A16] bg-[#1B231A] px-4 py-1.5 font-body text-[10px] font-medium uppercase tracking-[0.9px] text-[#D9E2DB]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href="/contato"
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[4px] border border-[#A8E63D]/30 px-5 font-heading text-[11px] font-bold uppercase tracking-[0.7px] text-white transition hover:border-[#A8E63D] hover:bg-[#A8E63D]/10 hover:text-[#A8E63D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8E63D] sm:w-fit"
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
    <section id="academy-cursos" className="scroll-mt-[100px] bg-[#F9F9F7] px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-16">
      <AcademyCoursesIntro />

      <div className="mx-auto mt-10 flex w-full max-w-[1340px] flex-col gap-5 sm:gap-6 lg:gap-0">
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
  const segmentStats = [
    { value: '10', label: 'Segmentos atendidos' },
    { value: '200+', label: 'Operações atendidas' },
    { value: '15+', label: 'Anos de experiência' },
  ];

  return (
    <section id="segmento" className="bg-[#DEE4DD] px-5 pb-8 pt-[101px] md:px-8 md:pb-10">
      <div className="mx-auto w-full max-w-[1344px]">
        <div className="relative grid grid-rows-[auto_auto] gap-6 overflow-hidden rounded-[20px] bg-[#0D2418] shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:gap-8 lg:min-h-[610px] lg:grid-cols-[0.52fr_0.48fr] lg:grid-rows-1 lg:gap-0 lg:rounded-[24px]">
          <div className="relative z-20 flex min-w-0 flex-col justify-center px-6 pb-0 pt-8 text-white sm:px-10 sm:pb-0 sm:pt-10 lg:px-[60px] lg:py-14">
            <img
              src={solveriBrancaImage}
              alt="Solveri Group"
              className="h-auto w-[150px] object-contain sm:w-[175px] lg:w-[190px]"
            />

            <div className="mt-8 lg:mt-10">
              <h1 className="max-w-[590px] font-heading text-[30px] font-bold leading-[1.06] text-white sm:text-[36px] lg:text-[43px]">
                Setores onde a <span className="text-[#A8E63D]">Solveri</span> atua
              </h1>
              <p className="mt-4 max-w-[560px] font-body text-[15px] leading-7 text-[#B7C0BA] sm:text-[16px] lg:text-[18px]">
                Atuação integrada em consultoria, capacitação e resposta operacional para os setores industriais
                que mais exigem preparo, segurança e conformidade.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 lg:mt-9">
              {segmentStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`min-w-0 px-3 first:pl-0 sm:px-5 sm:first:pl-0 ${
                    index < segmentStats.length - 1 ? 'border-r border-[#A8E63D]/55' : ''
                  }`}
                >
                  <strong className="block font-heading text-[27px] font-bold leading-none text-[#A8E63D] sm:text-[34px]">
                    {stat.value}
                  </strong>
                  <span className="mt-2 block max-w-[108px] font-body text-[9px] uppercase leading-4 text-white/80 sm:text-[10px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-4 mb-4 aspect-[4/3] overflow-hidden rounded-[16px] sm:mx-6 sm:mb-6 sm:aspect-[16/10] lg:absolute lg:inset-0 lg:m-0 lg:aspect-auto lg:rounded-none">
            <img
              src={segmentHeroRiverImage}
              alt="Vista aérea de rio sinuoso cercado por floresta"
              className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[65%_center] lg:object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2418]/20 to-transparent lg:bg-gradient-to-r lg:from-[#0D2418] lg:via-[#0D2418]/90 lg:via-[42%] lg:to-transparent" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
    tags: ['Consult', 'Response', 'Academy'],
  },
  {
    image: segmentoImage2,
    title: 'Óleo e Gás',
    description: 'Planos de emergência para exploração offshore e refinarias de alta complexidade.',
    tags: ['Consult', 'Response', 'Academy'],
  },
  {
    image: segmentoImage3,
    title: 'Química',
    description: 'Gestão de produtos perigosos e prevenção contra incidentes químicos industriais.',
    tags: ['Consult', 'Response', 'Academy'],
  },
  {
    image: segmentoImage4,
    title: 'Siderurgia',
    description: 'Segurança ocupacional e resposta em ambientes de alta temperatura e fundição.',
    tags: ['Consult', 'Response', 'Academy'],
  },
  {
    image: segmentoImage5,
    title: 'Energia',
    description: 'Proteção de ativos críticos e gestão de crises em redes de distribuição.',
    tags: ['Consult', 'Response', 'Academy'],
  },
  {
    image: segmentoImage6,
    title: 'Logística',
    description: 'Segurança no transporte multimodal de cargas sensíveis e gestão portuária.',
    tags: ['Consult', 'Response', 'Academy'],
  },
  {
    image: segmentoImage7,
    title: 'Papel e Celulose',
    description: 'Compliance ambiental e prevenção de incêndios em grandes complexos industriais.',
    tags: ['Consult', 'Response', 'Academy'],
  },
  {
    image: segmentoImage8,
    title: 'Ferrovias',
    description: 'Prontidão operacional e resposta a descarrilamentos e emergências em via férrea.',
    tags: ['Consult', 'Response', 'Academy'],
  },
  {
    image: segmentoImage9,
    title: 'Agronegócio',
    description: 'Continuidade de negócios e segurança em silos e plantas de processamento.',
    tags: ['Consult', 'Response', 'Academy'],
  },
  {
    image: segmentoImage10,
    title: 'Órgãos Públicos',
    description: 'Consultoria em defesa civil e estruturação de centros de comando de crises.',
    tags: ['Consult', 'Response', 'Academy'],
  },
];

function SegmentTag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex min-h-7 items-center justify-center whitespace-nowrap rounded-full border border-[#6D8C38]/55 bg-[#A8E63D]/[0.08] px-3 py-1 font-heading text-[10px] font-bold uppercase leading-none tracking-[0.08em] text-[#BFFF54]"
    >
      {label}
    </span>
  );
}

function SegmentGridSection() {
  return (
    <section className="bg-[#0F2017] px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-16">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#A8E63D]">
          ONDE ATUAMOS
        </span>
        <h2 className="mt-4 max-w-[620px] font-heading text-[28px] font-bold leading-[1.06] text-white sm:text-[36px] lg:text-[42px]">
          Segmentos de atuação do Grupo Solveri
        </h2>
        <p className="mt-4 max-w-[620px] font-body text-[14px] font-normal leading-6 text-[#B0B8B4] sm:text-[16px] sm:leading-7">
          Soluções em gestão de riscos, emergências e crises para os setores que mais exigem preparo operacional, conformidade e capacidade de resposta.
        </p>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-[1344px] grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
        {segmentCards.map((card) => (
          <article
            key={card.title}
            className="group mx-auto flex h-full w-full max-w-[390px] flex-col overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#1A2218] shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#A8E63D]/25 hover:shadow-[0_22px_46px_rgba(0,0,0,0.25)] sm:max-w-none"
          >
            <div className="aspect-[6/5] w-full overflow-hidden bg-[#111714]">
              <img
                src={card.image}
                alt={card.title}
                className="block h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.035]"
              />
            </div>
            <div className="flex flex-1 flex-col px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
              <h3 className="font-heading text-[22px] font-bold leading-[1.1] text-[#DEE4DD] sm:text-[24px]">
                {card.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-6 text-[#A7ACA9]">
                {card.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {card.tags.map((tag) => (
                  <SegmentTag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-14 w-full max-w-[1344px] rounded-[20px] bg-[#DEE4DD] px-6 py-10 text-center text-[#0F2017] shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:px-8 sm:py-12 lg:mt-16">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#6BA900]">
          Seu segmento não está aqui?
        </span>
        <h2 className="mx-auto mt-4 max-w-[640px] font-heading text-[28px] font-bold leading-[1.06] sm:text-[36px] lg:text-[42px]">
          A Solveri atende operações de qualquer porte e setor
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] font-body text-[14px] font-normal leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
          Se a sua operação exige preparo real em gestão de riscos, emergências ou crises, nossa equipe analisa o seu cenário e apresenta a solução mais aderente.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="/contato"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-[4px] bg-[#A8E63D] px-5 font-heading text-[14px] font-bold text-[#0F2017] transition hover:bg-[#c7f500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5E9401] sm:w-auto"
          >
            Fale com nossa equipe
          </a>
          <a
            href="/inicio#servicos"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-[4px] border border-[#0F2017]/25 px-5 font-heading text-[14px] font-bold text-[#0F2017] transition hover:bg-[#0F2017] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2017] sm:w-auto"
          >
            Conheça nossas soluções
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactHero() {
  const contactStats = [
    { value: '10', label: 'Segmentos atendidos' },
    { value: '200+', label: 'Operações atendidas' },
    { value: '15+', label: 'Anos de experiência' },
  ];

  return (
    <section id="contato" className="bg-[#F9F9F7] px-5 pb-10 pt-[101px] md:px-8 md:pb-14">
      <div className="relative mx-auto grid w-full max-w-[1344px] grid-rows-[auto_auto] gap-6 overflow-hidden rounded-[20px] bg-[#0D2418] shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:gap-8 lg:min-h-[610px] lg:grid-cols-[0.52fr_0.48fr] lg:grid-rows-1 lg:gap-0 lg:rounded-[24px]">
        <div className="relative z-20 flex min-w-0 flex-col justify-center px-6 pb-0 pt-8 text-white sm:px-10 sm:pb-0 sm:pt-10 lg:px-[60px] lg:py-14">
          <img
            src={solveriBrancaImage}
            alt="Solveri Group"
            className="h-auto w-[150px] object-contain sm:w-[175px] lg:w-[190px]"
          />

          <div className="mt-8 lg:mt-10">
            <h1 className="max-w-[560px] font-heading text-[30px] font-bold leading-[1.06] text-white sm:text-[36px] lg:text-[43px]">
              Vamos conversar sobre o seu <span className="text-[#A8E63D]">cenário</span>
            </h1>
            <p className="mt-4 max-w-[520px] font-body text-[15px] leading-7 text-[#B7C0BA] sm:text-[16px] lg:text-[18px]">
              Nossa equipe está pronta para entender a sua operação e apresentar a solução mais aderente às suas
              necessidades.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 lg:mt-9">
            {contactStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`min-w-0 px-3 first:pl-0 sm:px-5 sm:first:pl-0 ${
                  index < contactStats.length - 1 ? 'border-r border-[#A8E63D]/55' : ''
                }`}
              >
                <strong className="block font-heading text-[27px] font-bold leading-none text-[#A8E63D] sm:text-[34px]">
                  {stat.value}
                </strong>
                <span className="mt-2 block max-w-[108px] font-body text-[9px] uppercase leading-4 text-white/80 sm:text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-4 mb-4 aspect-[4/3] overflow-hidden rounded-[16px] sm:mx-6 sm:mb-6 sm:aspect-[16/10] lg:absolute lg:inset-0 lg:m-0 lg:aspect-auto lg:rounded-none">
          <img
            src={contactHeroBackground}
            alt="Profissional da Solveri diante da identidade visual da empresa"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-[66%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2418]/20 to-transparent lg:bg-gradient-to-r lg:from-[#0D2418] lg:via-[#0D2418]/88 lg:via-[43%] lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}

type ContactFormData = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  unit: string;
  reason: string;
  description: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const contactUnitOptions = ['Grupo Solveri', 'Consult', 'Response', 'Academy'];
const contactReasonOptions = [
  'Solicitar proposta',
  'Informações sobre serviços',
  'Informações sobre cursos',
  'Parcerias institucionais',
  'Outros assuntos',
];

function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    role: '',
    phone: '',
    email: '',
    unit: '',
    reason: '',
    description: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const contactItems = [
    { label: 'Telefone', value: '+55 31 3850-3510', icon: Phone, href: 'tel:+553138503510' },
    { label: 'Email', value: 'contato@solverigroup.com', icon: Mail, href: 'mailto:contato@solverigroup.com' },
    {
      label: 'Endereço',
      value: 'Av. Alberto Lima, 3001 - sala 12 - João Monlevade - MG',
      icon: Building2,
      href: 'https://www.google.com/maps/search/?api=1&query=Av.%20Alberto%20Lima%2C%203001%20Jo%C3%A3o%20Monlevade%20MG',
    },
    { label: 'Site', value: 'solverigroup.com', icon: ArrowRight, href: 'https://solverigroup.com' },
  ];

  const units = [
    { title: 'Consult', description: 'Consultoria estratégica em riscos industriais e operacionais.' },
    { title: 'Response', description: 'Gestão de crises e resposta rápida a incidentes críticos.' },
    { title: 'Academy', description: 'Treinamento técnico e certificações de alta performance.' },
  ];

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const validateForm = () => {
    const nextErrors: ContactFormErrors = {};
    const requiredFields: Array<keyof ContactFormData> = [
      'name',
      'company',
      'role',
      'phone',
      'email',
      'unit',
      'reason',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        nextErrors[field] = 'Preencha este campo.';
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Informe um e-mail válido.';
    }

    if (formData.phone && formData.phone.replace(/\D/g, '').length < 10) {
      nextErrors.phone = 'Informe um telefone com DDD.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalidField = Object.keys(nextErrors)[0] as keyof ContactFormData;
      document.getElementById(`contact-${firstInvalidField}`)?.focus();
      return;
    }

    setErrors({});

    const message = [
      'Olá, equipe Solveri!',
      '',
      'Gostaria de entrar em contato.',
      '',
      `Nome: ${formData.name}`,
      `Empresa: ${formData.company}`,
      `Cargo: ${formData.role}`,
      `Telefone: ${formData.phone}`,
      `E-mail: ${formData.email}`,
      `Unidade de interesse: ${formData.unit}`,
      `Motivo do contato: ${formData.reason}`,
      '',
      'Cenário ou necessidade:',
      formData.description.trim() || 'Não informado.',
    ].join('\n');

    window.open(
      `https://wa.me/553138503510?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const fieldClass = (field: keyof ContactFormData) =>
    `min-h-[52px] w-full rounded-[6px] border bg-[#262D29] px-4 font-body text-[13px] text-[#E7EBE7] outline-none transition placeholder:text-[#8E9792] ${
      errors[field]
        ? 'border-red-400/80 focus:border-red-300 focus:ring-2 focus:ring-red-400/20'
        : 'border-white/10 focus:border-[#A8E63D] focus:ring-2 focus:ring-[#A8E63D]/20'
    }`;

  return (
    <section className="bg-[#0A0E0C] px-5 py-14 text-white md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1180px] items-start gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16 xl:gap-20">
        <div className="min-w-0">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[2.6px] text-[#A8E63D]">
            Informações de contato
          </span>

          <div className="mt-8 space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Endereço' || item.label === 'Site' ? '_blank' : undefined}
                  rel={item.label === 'Endereço' || item.label === 'Site' ? 'noreferrer' : undefined}
                  className="group flex w-fit max-w-full items-start gap-4 rounded-[4px] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8E63D]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] border border-[#314529] bg-[#141A16] text-[#A8E63D]">
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-body text-[10px] font-medium uppercase tracking-[1.8px] text-[#7F8A84]">
                      {item.label}
                    </div>
                    <div className="mt-1 max-w-[320px] break-words font-heading text-[14px] font-bold leading-5 text-white transition group-hover:text-[#A8E63D]">
                      {item.value}
                    </div>
                  </div>
                </a>
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

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-[12px] border border-white/10 bg-[#1E2420] px-5 py-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:px-8 sm:py-8"
        >
          <h3 className="font-heading text-[18px] font-bold text-white">Solicite um atendimento</h3>
          <p className="mt-2 max-w-[340px] font-body text-[12px] leading-5 text-[#7F8A84]">
            Preencha o formulário e nossa equipe retorna em até 24 horas úteis.
          </p>

          <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
            {([
              ['name', 'Nome completo *', 'Ex: João Silva', 'name'],
              ['company', 'Empresa *', 'Nome da sua organização', 'organization'],
              ['role', 'Cargo *', 'Sua função', 'organization-title'],
              ['phone', 'Telefone *', '(00) 00000-0000', 'tel'],
            ] as const).map(([field, label, placeholder, autoComplete]) => (
              <label key={field} htmlFor={`contact-${field}`} className="flex min-w-0 flex-col">
                <span className="mb-2 font-body text-[10px] uppercase tracking-[1.3px] text-[#9AA49E]">
                  {label}
                </span>
                <input
                  id={`contact-${field}`}
                  name={field}
                  type={field === 'phone' ? 'tel' : 'text'}
                  value={formData[field]}
                  onChange={(event) => updateField(field, event.target.value)}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  aria-invalid={Boolean(errors[field])}
                  aria-describedby={errors[field] ? `contact-${field}-error` : undefined}
                  className={fieldClass(field)}
                />
                {errors[field] && (
                  <span id={`contact-${field}-error`} className="mt-1.5 font-body text-[11px] text-red-300">
                    {errors[field]}
                  </span>
                )}
              </label>
            ))}
          </div>

          <div className="mt-5">
            <label htmlFor="contact-email" className="flex min-w-0 flex-col">
              <span className="mb-2 font-body text-[10px] uppercase tracking-[1.3px] text-[#9AA49E]">
                E-mail corporativo *
              </span>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="seuemail@empresa.com.br"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={fieldClass('email')}
              />
              {errors.email && (
                <span id="contact-email-error" className="mt-1.5 font-body text-[11px] text-red-300">
                  {errors.email}
                </span>
              )}
            </label>
          </div>

          <div className="mt-5 grid gap-x-4 gap-y-5 sm:grid-cols-2">
            {([
              ['unit', 'Qual unidade te interessa? *', 'Selecione uma opção', contactUnitOptions],
              ['reason', 'Como podemos ajudar? *', 'Selecione o motivo', contactReasonOptions],
            ] as const).map(([field, label, placeholder, options]) => (
              <label key={field} htmlFor={`contact-${field}`} className="flex min-w-0 flex-col">
                <span className="mb-2 font-body text-[10px] uppercase tracking-[1.3px] text-[#9AA49E]">
                  {label}
                </span>
                <select
                  id={`contact-${field}`}
                  name={field}
                  value={formData[field]}
                  onChange={(event) => updateField(field, event.target.value)}
                  aria-invalid={Boolean(errors[field])}
                  aria-describedby={errors[field] ? `contact-${field}-error` : undefined}
                  className={`${fieldClass(field)} appearance-none bg-[linear-gradient(45deg,transparent_50%,#7F8A84_50%),linear-gradient(135deg,#7F8A84_50%,transparent_50%)] bg-[position:calc(100%-18px)_22px,calc(100%-13px)_22px] bg-[size:5px_5px,5px_5px] bg-no-repeat pr-10`}
                >
                  <option value="">{placeholder}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors[field] && (
                  <span id={`contact-${field}-error`} className="mt-1.5 font-body text-[11px] text-red-300">
                    {errors[field]}
                  </span>
                )}
              </label>
            ))}
          </div>

          <div className="mt-5">
            <label htmlFor="contact-description" className="flex min-w-0 flex-col">
              <span className="mb-2 font-body text-[10px] uppercase tracking-[1.3px] text-[#9AA49E]">
                Descreva brevemente seu cenário ou necessidade
              </span>
              <textarea
                id="contact-description"
                name="description"
                value={formData.description}
                onChange={(event) => updateField('description', event.target.value)}
                placeholder="Conte-nos um pouco mais sobre o seu projeto..."
                rows={5}
                className={`${fieldClass('description')} min-h-[140px] resize-y py-4`}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 flex min-h-12 w-full items-center justify-center rounded-[4px] bg-[#BFFF54] px-5 font-heading text-[12px] font-bold uppercase text-[#0F2017] transition hover:bg-[#c8f86b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4FF00]"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

function ServicesIntro() {
  return (
    <section className="bg-[#F9F9F7] px-5 pb-12 pt-0 md:px-8 md:pb-16">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
          Serviços
        </span>
        <h2 className="mt-4 max-w-[600px] font-heading text-[28px] font-bold leading-[1.08] text-[#0F2017] sm:text-[34px] lg:text-[42px]">
          Três frentes, uma atuação integrada
        </h2>
        <p className="mt-4 max-w-[560px] font-body text-[15px] leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
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
    imageFit: 'cover',
    imagePosition: '52% center',
    imageScaleClassName: 'scale-[1.08] lg:scale-[1.14]',
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
    imageSrc: novoCardResponseImage,
    imageAlt: 'Equipe em operação de resposta',
    imageFit: 'cover',
    imagePosition: 'center',
    imageScaleClassName: 'scale-[1.01]',
    reverse: true,
  },
  {
    eyebrow: 'Academy',
    title: 'Formação profissional, aplicação real',
    description:
      'Programas presenciais, EAD e híbridos em ICS/SCI, Normas Regulamentadoras, SSMA e gestão de emergências para equipes operacionais e lideranças.',
    bulletsLeft: [
      'ICS/SCI 100',
      'ICS/SCI 200',
      'ICS/SCI 300',
      'ICS/SCI 320',
      'ICS/SCI 400',
      'ICS/SCI 402',
    ],
    bulletsRight: [
      'NR-10 / 20 / 22 / 33 / 35',
      'Análise de riscos',
      'Responsabilidades jurídicas',
      'OTE — Telecomunicações em Emergência',
      'Gestão SHERQ / SSMA',
      'Investigação de incidentes',
    ],
    cta: 'Conheça a Solveri Academy',
    imageSrc: novoCardAcademyImage,
    imageAlt: 'Profissionais em sala de comando durante capacitação técnica',
    imageFit: 'cover',
    imagePosition: 'center',
    imageScaleClassName: 'scale-[1.02]',
    reverse: false,
    highlight: {
      label: 'Parceria internacional',
      text: 'IRCA Global Brasil/South Africa',
    },
  },
];

type ServiceHighlight = {
  label: string;
  text: string;
};

function ServiceCard({
  eyebrow,
  title,
  description,
  bulletsLeft,
  bulletsRight,
  cta,
  imageSrc,
  imageAlt,
  imageFit,
  imagePosition,
  imageScaleClassName,
  reverse,
  highlight,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bulletsLeft: string[];
  bulletsRight: string[];
  cta: string;
  imageSrc: string;
  imageAlt: string;
  imageFit: string;
  imagePosition: string;
  imageScaleClassName?: string;
  reverse: boolean;
  highlight?: ServiceHighlight;
}) {
  return (
    <article className="overflow-hidden rounded-[24px] bg-[#0A0E0C] shadow-[0_20px_50px_rgba(15,32,23,0.12)] lg:rounded-[28px]">
      <div
        className={`grid items-stretch lg:grid-cols-[minmax(420px,0.96fr)_minmax(0,1.04fr)] lg:gap-x-2 ${
          reverse ? 'lg:grid-cols-[minmax(0,1.04fr)_minmax(420px,0.96fr)]' : ''
        }`}
      >
        <div
          className={`min-w-0 px-5 pt-5 sm:px-7 sm:pt-7 lg:px-8 lg:py-8 xl:px-10 xl:py-10 ${
            reverse ? 'lg:order-2' : ''
          }`}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] sm:aspect-[16/10] lg:h-full lg:min-h-[456px] lg:aspect-auto lg:rounded-[20px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className={`absolute inset-0 block h-full w-full max-w-none transform-gpu transition-transform duration-500 ${
                imageFit === 'contain' ? 'object-contain' : 'object-cover'
              } ${imageScaleClassName ?? ''}`}
              style={{ objectPosition: imagePosition }}
            />
            {imageFit === 'cover' && <div className="pointer-events-none absolute inset-0 bg-black/[0.06]" />}
          </div>
        </div>

        <div
          className={`flex min-w-0 flex-col px-5 pb-8 pt-6 sm:px-7 sm:pb-10 sm:pt-7 lg:px-8 lg:py-8 xl:px-10 xl:py-10 ${
            reverse ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <span className="font-heading text-[10px] font-bold uppercase tracking-[2.2px] text-accent-bright">
              {eyebrow}
            </span>
            <h3 className="mt-3 max-w-[620px] font-heading text-[28px] font-bold leading-[1.08] text-white sm:text-[32px] lg:text-[36px]">
              {title}
            </h3>
            <p className="mt-4 max-w-[680px] font-body text-[15px] leading-6 text-[#AAB2AD] sm:text-[16px] sm:leading-7">
              {description}
            </p>

            <div className="mt-7 grid gap-x-8 gap-y-3 md:grid-cols-2 lg:gap-x-7">
              {[bulletsLeft, bulletsRight].map((column, index) => (
                <ul key={index} className="space-y-2.5">
                  {column.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-[13px] leading-5 text-[#C0C7C2] sm:text-[14px]">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-accent-bright" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {highlight && (
            <div className="mt-8 rounded-[10px] border border-accent-bright/15 border-l-[3px] border-l-accent-bright bg-[#142019] px-5 py-4">
              <span className="block font-heading text-[9px] font-bold uppercase tracking-[1.9px] text-accent-bright">
                {highlight.label}
              </span>
              <strong className="mt-2 block font-heading text-[16px] font-bold leading-5 text-white sm:text-[18px]">
                {highlight.text}
              </strong>
            </div>
          )}

          <a
            href="/contato"
            className="mt-8 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[4px] border border-[#2F4A16] px-5 text-center font-heading text-[14px] font-bold text-accent-bright transition hover:border-accent-bright hover:bg-accent-bright hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-bright sm:w-fit sm:min-w-[270px] sm:text-[15px]"
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
      <div className="mx-auto w-full max-w-[1344px] space-y-6 sm:space-y-8">
        {serviceShowcaseCards.map((card) => (
          <ServiceCard key={card.eyebrow} {...card} />
        ))}
      </div>
    </section>
  );
}

function EsgBanner() {
  return (
    <section className="bg-[#0A0E0C] px-5 py-14 text-white md:px-8 md:py-16">
      <div className="mx-auto flex w-full max-w-[1344px] flex-col gap-8 py-0 lg:min-h-[544px] lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:py-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] sm:aspect-[16/10] lg:order-2 lg:aspect-auto lg:h-[440px] lg:rounded-[0]">
          <img
            src={paisagemImage}
            alt="Paisagem natural com rio e vegetação"
            className="block h-full w-full object-cover object-center"
          />
        </div>

        <div className="max-w-[520px] pb-2 lg:order-1 lg:pb-0">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[2.6px] text-accent-bright">
            Compromisso ESG
          </span>
          <h2 className="mt-4 max-w-[460px] font-heading text-[28px] font-bold leading-[1.08] text-white sm:text-[34px] lg:text-[40px]">
            Gestão de riscos com responsabilidade ambiental
          </h2>
          <p className="mt-4 max-w-[470px] font-body text-[15px] leading-6 text-[#AAB2AD] sm:text-[16px] sm:leading-7">
            A Solveri integra governança, sustentabilidade e segurança operacional em cada solução. Proteger pessoas, preservar o meio ambiente e garantir a continuidade do negócio são pilares inegociáveis da nossa atuação.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['Gestão de riscos', 'Governança', 'Continuidade operacional', 'Proteção ambiental'].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[#294014] bg-[#111712] px-4 py-2 font-body text-[12px] text-[#B5CC3B] sm:text-[13px]"
              >
                {pill}
              </span>
            ))}
          </div>

          <a
            href="/contato"
            className="mt-8 inline-flex items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-[0.48px] text-accent-bright transition hover:text-white"
          >
            Conheça nossa atuação ESG
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

type PresenceStateCode =
  | 'am'
  | 'ba'
  | 'es'
  | 'ma'
  | 'mg'
  | 'pa'
  | 'pr'
  | 'rj'
  | 'rn'
  | 'ro'
  | 'rr'
  | 'rs'
  | 'sc'
  | 'sp'
  | 'to';

type PresenceState = {
  code: PresenceStateCode;
  abbreviation: string;
  name: string;
  marker: {
    x: number;
    y: number;
  };
};

const presenceStates: readonly PresenceState[] = [
  { code: 'rr', abbreviation: 'RR', name: 'Roraima', marker: { x: 205, y: 70 } },
  { code: 'am', abbreviation: 'AM', name: 'Amazonas', marker: { x: 180, y: 150 } },
  { code: 'pa', abbreviation: 'PA', name: 'Pará', marker: { x: 340, y: 145 } },
  { code: 'ro', abbreviation: 'RO', name: 'Rondônia', marker: { x: 165, y: 255 } },
  { code: 'to', abbreviation: 'TO', name: 'Tocantins', marker: { x: 397, y: 238 } },
  { code: 'ma', abbreviation: 'MA', name: 'Maranhão', marker: { x: 470, y: 165 } },
  { code: 'rn', abbreviation: 'RN', name: 'Rio Grande do Norte', marker: { x: 582, y: 175 } },
  { code: 'ba', abbreviation: 'BA', name: 'Bahia', marker: { x: 482, y: 292 } },
  { code: 'mg', abbreviation: 'MG', name: 'Minas Gerais', marker: { x: 414, y: 390 } },
  { code: 'es', abbreviation: 'ES', name: 'Espírito Santo', marker: { x: 516, y: 398 } },
  { code: 'rj', abbreviation: 'RJ', name: 'Rio de Janeiro', marker: { x: 477, y: 445 } },
  { code: 'sp', abbreviation: 'SP', name: 'São Paulo', marker: { x: 405, y: 465 } },
  { code: 'pr', abbreviation: 'PR', name: 'Paraná', marker: { x: 355, y: 492 } },
  { code: 'sc', abbreviation: 'SC', name: 'Santa Catarina', marker: { x: 365, y: 528 } },
  { code: 'rs', abbreviation: 'RS', name: 'Rio Grande do Sul', marker: { x: 320, y: 590 } },
];

const presenceStateByCode = new Map(presenceStates.map((state) => [state.code, state]));

function BrazilPresenceMap() {
  const [activeStateCode, setActiveStateCode] = useState<PresenceStateCode | null>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const activeState = activeStateCode ? presenceStateByCode.get(activeStateCode) : undefined;

  useEffect(() => {
    const closeTooltipOutsideMap = (event: PointerEvent) => {
      if (!mapWrapperRef.current?.contains(event.target as Node)) {
        setActiveStateCode(null);
      }
    };

    document.addEventListener('pointerdown', closeTooltipOutsideMap);
    return () => document.removeEventListener('pointerdown', closeTooltipOutsideMap);
  }, []);

  const activateState = (code: PresenceStateCode) => {
    setActiveStateCode(code);
  };

  return (
    <div
      ref={mapWrapperRef}
      className="relative flex w-full items-center justify-center overflow-hidden rounded-[22px] bg-[#0E1310] p-3 sm:p-5 lg:p-6"
      onMouseLeave={() => setActiveStateCode(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActiveStateCode(null);
        }
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(139,203,42,0.08)_0%,rgba(14,19,16,0)_68%)]"
      />
      <svg
        viewBox={brazilMap.viewBox}
        role="group"
        aria-labelledby="brazil-presence-map-title brazil-presence-map-description"
        className="relative z-10 block h-auto w-full max-w-[590px]"
      >
        <title id="brazil-presence-map-title">Mapa da presença nacional da Solveri</title>
        <desc id="brazil-presence-map-description">
          Mapa interativo do Brasil com quinze estados atendidos pela Solveri.
        </desc>

        <g className="brazil-map-states">
          {brazilMap.locations.map((location) => {
            const presenceState = presenceStateByCode.get(location.id as PresenceStateCode);

            if (!presenceState) {
              return <path key={location.id} d={location.path} className="brazil-map-state" aria-hidden="true" />;
            }

            const isActive = activeStateCode === presenceState.code;

            return (
              <g
                key={location.id}
                role="button"
                tabIndex={0}
                aria-label={`${presenceState.name}, ${presenceState.abbreviation}. Estado atendido pela Solveri.`}
                aria-pressed={isActive}
                className="brazil-map-state-control cursor-pointer outline-none"
                onMouseEnter={() => activateState(presenceState.code)}
                onFocus={() => activateState(presenceState.code)}
                onClick={() => setActiveStateCode(isActive ? null : presenceState.code)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setActiveStateCode(isActive ? null : presenceState.code);
                  }
                }}
              >
                <path
                  d={location.path}
                  className={`brazil-map-state brazil-map-state--present${isActive ? ' is-active' : ''}`}
                />
                <circle
                  cx={presenceState.marker.x}
                  cy={presenceState.marker.y}
                  r="22"
                  fill="transparent"
                  aria-hidden="true"
                />
                <circle
                  cx={presenceState.marker.x}
                  cy={presenceState.marker.y}
                  r="14"
                  className={`brazil-map-marker-pulse${isActive ? ' is-active' : ''}`}
                  aria-hidden="true"
                />
                <circle
                  cx={presenceState.marker.x}
                  cy={presenceState.marker.y}
                  r="8"
                  className={`brazil-map-marker${isActive ? ' is-active' : ''}`}
                  aria-hidden="true"
                />
              </g>
            );
          })}
        </g>

        {activeState && (
          <g
            id="presence-map-tooltip"
            role="status"
            aria-live="polite"
            transform={`translate(${Math.min(Math.max(activeState.marker.x - 76, 8), 445)} ${Math.max(
              activeState.marker.y - 48,
              8,
            )})`}
            className="pointer-events-none"
          >
            <rect width="160" height="38" rx="9" fill="#F9F9F7" />
            <circle cx="16" cy="19" r="4" fill="#B7FF21" />
            <text x="27" y="17" fill="#0F2017" fontFamily="Poppins, sans-serif" fontSize="11" fontWeight="600">
              {activeState.name}
            </text>
            <text x="27" y="29" fill="#68706B" fontFamily="Poppins, sans-serif" fontSize="8">
              {activeState.abbreviation} · Presença Solveri
            </text>
          </g>
        )}
      </svg>
      <span className="sr-only" aria-live="polite">
        {activeState ? `${activeState.name}, ${activeState.abbreviation}. Estado atendido pela Solveri.` : ''}
      </span>
    </div>
  );
}

function Presence() {
  const deliveries = [
    'Treinamentos especializados',
    'Consultorias prestadas',
    'Gestão de crises',
    'Desenvolvimento de planos e protocolos',
    'Estruturação de centrais de emergência',
    'Capacitação de equipes e lideranças',
  ];

  return (
    <section id="segmentos" className="bg-[#F9F9F7] px-5 py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[754px] flex-col items-center text-center">
        <span className="font-heading text-[10px] font-bold uppercase tracking-[2.4px] text-[#0F2017]">
          Presença nacional
        </span>
        <h2 className="mt-4 max-w-[620px] font-heading text-[28px] font-bold leading-[1.08] text-[#0F2017] sm:text-[36px] lg:text-[42px]">
          Atuação em {presenceStates.length} estados brasileiros
        </h2>
        <p className="mt-4 max-w-[600px] font-body text-[14px] leading-6 text-[#6F7370] sm:text-[16px] sm:leading-7">
          Presença em estados estratégicos para operações industriais, minerárias, energéticas e logísticas, com capacidade de expansão nacional.
        </p>
      </div>

      <div className="mx-auto mt-9 w-full max-w-[1340px] overflow-hidden rounded-[28px] bg-[#0A0E0C] p-5 text-white shadow-[0_20px_50px_rgba(15,32,23,0.12)] sm:mt-10 sm:p-8 lg:p-10">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <BrazilPresenceMap />

          <div className="flex flex-col justify-between py-1 lg:py-2">
            <div>
              <h3 className="font-heading text-[20px] font-bold leading-tight text-white sm:text-[22px]">
                O que entregamos nesses estados
              </h3>
              <ul className="mt-6 grid gap-3.5 md:grid-cols-2 md:gap-x-6 lg:grid-cols-1 lg:gap-4">
                {deliveries.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-[14px] leading-5 text-[#D9DDD9] sm:text-[15px]">
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] border border-[#314315] bg-[#1B280E] text-accent-bright"
                    >
                      <ArrowRight size={12} strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 w-full max-w-[434px] self-start rounded-[12px] border-l-[4px] border-accent-bright bg-[#1E2420] px-6 py-5 sm:mt-10 sm:px-7 sm:py-6">
              <strong className="block font-heading text-[48px] font-bold leading-none text-[#A8E63D] sm:text-[52px]">
                {presenceStates.length}
              </strong>
              <span className="mt-2 block font-heading text-[12px] font-bold uppercase tracking-[1.2px] text-[#C5CBC6]">
                Estados da federação
              </span>
              <span className="mt-2 block font-body text-[12px] italic leading-5 text-[#858D87]">
                Com capacidade de expansão nacional
              </span>
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
              <a className="mt-4 inline-flex items-center gap-2 font-heading text-[11px] font-bold text-accent-bright" href="/contato">
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
            href="/contato"
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
          {faqs.map((item, index) => (
            <div key={item.question}>
              <button
                type="button"
                className="flex min-h-[58px] w-full items-center justify-between gap-6 py-4 text-left"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span className="font-heading text-[14px] font-bold leading-5 text-[#0F2017] sm:text-[15px]">
                  {item.question}
                </span>
                <span className="font-heading text-[18px] font-bold leading-none text-accent-bright">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="pb-4 pr-10 font-body text-[14px] leading-6 text-[#6F7370]">
                  {item.answer}
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
          href="/contato"
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
            href="/contato"
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
    <footer id="rodape" className="bg-[#111714] pt-16 text-white">
      <div className="mx-auto grid w-full max-w-[1344px] gap-12 px-5 pb-10 md:grid-cols-[1.1fr_0.8fr_0.8fr_1fr] md:px-8">
        <div>
          <img src={logoSolveriHorizontal} alt="Solveri Group" className="h-16 w-auto object-contain" />
          <p className="mt-5 max-w-[270px] font-body text-[13px] leading-6 text-[#B1B7B2]">
            Gestão de riscos, emergências e crises com visão estratégica, método e capacidade operacional.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/10 bg-[#232A25] transition hover:border-accent-bright" href="/contato" aria-label="Instagram Solveri">
              <img src={instagramIcon} alt="" aria-hidden="true" className="h-4 w-4" />
            </a>
            <a className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/10 bg-[#232A25] transition hover:border-accent-bright" href="/contato" aria-label="LinkedIn Solveri">
              <img src={linkedinIcon} alt="" aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterColumn title="Navegação" links={navLinks} />
        <FooterColumn
          title="Serviços"
          links={[
            { label: 'Solveri Group', href: '/inicio#empresa' },
            { label: 'Solveri Consult', href: '/consult' },
            { label: 'Solveri Response', href: '/response' },
            { label: 'Solveri Academy', href: '/academy' },
          ]}
        />

        <div>
          <h3 className="font-heading text-[12px] font-bold uppercase tracking-[2.4px] text-accent-bright">Contato</h3>
          <div className="mt-5 space-y-4 font-body text-[13px] leading-6 text-[#B1B7B2]">
            <p className="flex gap-3"><Phone className="shrink-0 text-accent-bright" size={16} /> +55 31 3850-3510</p>
            <p className="flex gap-3"><Mail className="shrink-0 text-accent-bright" size={16} /> contato@solverigroup.com</p>
            <p className="flex gap-3"><Building2 className="shrink-0 text-accent-bright" size={16} /> Av. Alberto Lima, 3001 - sala 12, João Monlevade - MG</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex min-h-16 w-full max-w-[1344px] flex-col gap-3 px-5 py-5 font-body text-[12px] text-[#8F948F] md:flex-row md:items-center md:justify-between md:px-8">
          <span>Copyright 2026 Solveri Group. Todos os direitos reservados.</span>
          <span>Desenvolvido por <span className="text-accent-bright">Águia Digital</span></span>
          <div className="flex gap-6">
            <a className="hover:text-white" href="/">Política de Privacidade</a>
            <a className="hover:text-white" href="/">Termos de Uso</a>
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

function normalizePathname(pathname: string) {
  if (pathname === '/') return pathname;
  return pathname.replace(/\/+$/, '');
}

function buildAbsoluteUrl(path: string) {
  return `${siteUrl}${path === '/' ? '/' : path}`;
}

function upsertMeta(selector: string, createAttributes: Record<string, string>, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    Object.entries(createAttributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(selector: string, createAttributes: Record<string, string>, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    Object.entries(createAttributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function setRouteSeo(route: AppRoute) {
  const seo = seoByRoute[route];
  const canonicalUrl = buildAbsoluteUrl(seo.path);
  const ogImage = `${siteUrl}/og-image.jpg`;

  document.documentElement.lang = 'pt-BR';
  document.title = seo.title;
  upsertMeta('meta[name="description"]', { name: 'description' }, seo.description);
  upsertMeta('meta[name="keywords"]', { name: 'keywords' }, seo.keywords);
  upsertMeta('meta[property="og:title"]', { property: 'og:title' }, seo.title);
  upsertMeta('meta[property="og:description"]', { property: 'og:description' }, seo.description);
  upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
  upsertMeta('meta[property="og:image"]', { property: 'og:image' }, ogImage);
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title);
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, seo.description);
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, ogImage);
  upsertLink('link[rel="canonical"]', { rel: 'canonical' }, canonicalUrl);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Solveri Group',
        url: siteUrl,
        logo: `${siteUrl}/iconesite.png`,
        email: 'contato@solverigroup.com',
        telephone: '+55 31 3850-3510',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Alberto Lima, 3001 - sala 12',
          addressLocality: 'João Monlevade',
          addressRegion: 'MG',
          addressCountry: 'BR',
        },
        sameAs: [
          'https://solverigroup.com/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Solveri Group',
        url: siteUrl,
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#services`,
        name: 'Áreas de atuação da Solveri',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Solveri Consult', url: buildAbsoluteUrl(routePaths.consult) },
          { '@type': 'ListItem', position: 2, name: 'Solveri Response', url: buildAbsoluteUrl(routePaths.response) },
          { '@type': 'ListItem', position: 3, name: 'Solveri Academy', url: buildAbsoluteUrl(routePaths.academy) },
        ],
      },
    ],
  };

  let script = document.head.querySelector<HTMLScriptElement>('script[data-solveri-schema]');

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.solveriSchema = 'true';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(structuredData);
}

function routeFromLocation(): AppRoute {
  const pathname = normalizePathname(window.location.pathname);
  const legacyDestination = pathname === '/' ? legacyHashDestinations[window.location.hash] : undefined;

  return legacyDestination?.route ?? pathRoutes.get(pathname) ?? 'portal';
}

function App() {
  const [route, setRoute] = useState<AppRoute>(routeFromLocation);

  useEffect(() => {
    setRouteSeo(route);
  }, [route]);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      const firstSection = document.querySelector('main section');

      document.querySelectorAll<HTMLImageElement>('img').forEach((image) => {
        image.decoding = 'async';

        if (!firstSection?.contains(image) && !image.hasAttribute('loading')) {
          image.loading = 'lazy';
        }
      });
    });
  }, [route]);

  useEffect(() => {
    const scrollToCurrentDestination = (currentRoute: AppRoute) => {
      window.requestAnimationFrame(() => {
        const homeAnchor =
          currentRoute === 'home' && ['#inicio', '#empresa', '#servicos'].includes(window.location.hash)
            ? window.location.hash
            : '';

        if (homeAnchor) {
          document.querySelector(homeAnchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    };

    const syncLocation = () => {
      const pathname = normalizePathname(window.location.pathname);
      const legacyDestination = pathname === '/' ? legacyHashDestinations[window.location.hash] : undefined;
      const matchedRoute = pathRoutes.get(pathname);

      if (legacyDestination) {
        window.history.replaceState({}, '', legacyDestination.url);
        setRoute(legacyDestination.route);
        scrollToCurrentDestination(legacyDestination.route);
        return;
      }

      if (!matchedRoute) {
        window.history.replaceState({}, '', routePaths.portal);
        setRoute('portal');
        scrollToCurrentDestination('portal');
        return;
      }

      setRoute(matchedRoute);
      scrollToCurrentDestination(matchedRoute);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const destinationPath = normalizePathname(destination.pathname);
      const destinationRoute = pathRoutes.get(destinationPath);
      const isHomeAnchor =
        destinationPath === routePaths.home && ['', '#inicio', '#empresa', '#servicos'].includes(destination.hash);

      if (!destinationRoute || (!isHomeAnchor && destination.hash)) return;

      event.preventDefault();

      const nextUrl = `${destinationPath}${destination.hash}`;
      const currentUrl = `${normalizePathname(window.location.pathname)}${window.location.hash}`;

      if (nextUrl !== currentUrl) {
        window.history.pushState({}, '', nextUrl);
      }

      if (destinationRoute !== routeFromLocation() || !destination.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
      setRoute(destinationRoute);
      scrollToCurrentDestination(destinationRoute);
    };

    window.addEventListener('popstate', syncLocation);
    document.addEventListener('click', handleDocumentClick);
    syncLocation();

    return () => {
      window.removeEventListener('popstate', syncLocation);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleNavigate = (section: InternalRoute) => {
    const destination = routePaths[section];
    const currentPath = normalizePathname(window.location.pathname);

    if (currentPath !== destination || window.location.hash) {
      window.history.pushState({}, '', destination);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setRoute(section);
  };

  return (
    <div
      className={`min-h-screen text-foreground ${
        route === 'academy' ? 'bg-[#0D1B14]' : route === 'segmento' ? 'bg-[#DEE4DD]' : route === 'contato' || route === 'portal' ? 'bg-[#F9F9F7]' : route === 'consult' ? 'bg-[#5B5F5C]' : route === 'response' ? 'bg-[#A8E63D]' : 'bg-[#F9F9F7]'
      }`}
    >
      {route !== 'portal' && <Header activeSection={route} onNavigate={handleNavigate} />}
      <main key={route} className="route-page-enter">
        {route === 'portal' ? (
          <PortalLanding onNavigate={handleNavigate} />
        ) : route === 'home' ? (
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
      {route !== 'portal' && <Footer />}
    </div>
  );
}

export default App;
