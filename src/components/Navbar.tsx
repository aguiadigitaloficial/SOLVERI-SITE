import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoSolveri from '../assets/logo-solveri.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio', active: true },
    { label: 'Consult', href: '#consult' },
    { label: 'Response', href: '#response' },
    { label: 'Academy', href: '#academy' },
    { label: 'Segmento', href: '#segmento' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="relative z-50 h-[80px] w-full max-w-[1344px] mx-auto px-6 md:px-8 flex items-center justify-between bg-transparent">
      {/* Brand Logo */}
      <a href="#inicio" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <img 
          src={logoSolveri} 
          alt="Solveri Group" 
          className="h-10 md:h-12 w-auto object-contain" 
        />
      </a>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 lg:gap-10 font-heading text-[15px] font-semibold text-[#0F2017]">
        {navLinks.map((link) => (
          <li key={link.label} className="relative group">
            <a 
              href={link.href}
              className={`transition-colors duration-300 py-2 block ${
                link.active ? 'text-[#0A0E0C] font-bold' : 'text-[#0F2017]/85 hover:text-[#0A0E0C]'
              }`}
            >
              {link.label}
            </a>
            {/* Active / Hover Underline */}
            <span 
              className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${
                link.active ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </li>
        ))}
      </ul>

      {/* Desktop Call to Action Button */}
      <div className="hidden md:flex items-center">
        <a 
          href="#contato"
          className="h-[46px] px-6 flex items-center justify-center bg-accent-bright text-accent-foreground font-heading text-xs font-bold uppercase tracking-[0.52px] rounded-button hover:bg-[#0A0E0C] hover:text-white transition-all duration-300 shadow-[0_4px_12px_rgba(212,255,0,0.2)] hover:shadow-[0_4px_16px_rgba(10,14,12,0.25)]"
        >
          Fale Conosco
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="flex md:hidden items-center justify-center p-2 text-[#0F2017] hover:text-[#0A0E0C] transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#F9F9F7]/98 backdrop-blur-md border-b border-[#0F2017]/10 py-6 px-6 flex flex-col gap-6 md:hidden shadow-lg animate-in fade-in slide-in-from-top-5 duration-300">
          <ul className="flex flex-col gap-4 font-heading text-base font-semibold text-[#0F2017]">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-[#0F2017]/5 pb-2">
                <a 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-1 ${link.active ? 'text-accent font-bold' : 'hover:text-[#0A0E0C] transition-colors'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full h-[50px] flex items-center justify-center bg-accent-bright text-accent-foreground font-heading text-xs font-bold uppercase tracking-[0.52px] rounded-button hover:bg-[#0A0E0C] hover:text-white transition-all duration-300 shadow-[0_4px_10px_rgba(212,255,0,0.15)]"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
}
