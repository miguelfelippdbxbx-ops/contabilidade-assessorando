import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_CONFIG, NAV_LINKS, getWhatsAppUrl } from '../config/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md border-b border-[#10243B]/10 shadow-sm py-3'
          : 'bg-[#07182B]/85 backdrop-blur-md border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zona 1: Logotipo original + Nome Comercial em linha única */}
        <a
          href="#inicio"
          className="flex items-center gap-3 shrink-0 group focus-visible:rounded-md"
          aria-label={`${COMPANY_CONFIG.commercialName} — Voltar ao início`}
        >
          <span className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center border border-[#C99A38]/40 shrink-0 shadow-xs transition-transform duration-200 group-hover:scale-[1.03]">
            <img
              src={COMPANY_CONFIG.assets.logo}
              alt={`Logotipo oficial ${COMPANY_CONFIG.commercialName}`}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </span>
          <span
            className={`text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap shrink-0 transition-colors duration-200 ${
              scrolled ? 'text-[#10243B]' : 'text-white'
            }`}
          >
            {COMPANY_CONFIG.commercialName}
          </span>
        </a>

        {/* Zona 2: Links de navegação limpos */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium whitespace-nowrap shrink-0 py-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#C99A38] after:transition-all after:duration-200 hover:after:w-full ${
                scrolled
                  ? 'text-[#18212B]/80 hover:text-[#10243B]'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação primária única + Botão de menu mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C99A38] hover:bg-[#b5882d] text-[#07182B] font-semibold text-xs sm:text-sm tracking-tight whitespace-nowrap shrink-0 transition-all duration-200 shadow-xs hover:shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Fale Conosco</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className={`md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border transition-colors ${
              scrolled
                ? 'border-[#10243B]/15 text-[#10243B] hover:bg-[#F4F6F8]'
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Responsivo para Celulares */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-white border-t border-[#10243B]/10 shadow-lg"
        >
          <nav
            aria-label="Navegação mobile"
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-3 py-3 text-base font-medium text-[#10243B] hover:bg-[#F4F6F8] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#10243B]/10">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#10243B] text-white font-semibold text-sm hover:bg-[#173B5E] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#E4C477]" />
                <span>Fale Conosco · {COMPANY_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
