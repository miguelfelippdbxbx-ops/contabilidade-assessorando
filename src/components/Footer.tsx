import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_CONFIG, NAV_LINKS, getWhatsAppUrl } from '../config/company';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07182B] text-white border-t border-[#C99A38]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/12">
          {/* Marca & Apresentação */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-white p-1.5 flex items-center justify-center border border-[#C99A38]/40 shrink-0">
                <img
                  src={COMPANY_CONFIG.assets.logo}
                  alt={`Logotipo oficial ${COMPANY_CONFIG.commercialName}`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-white">
                  {COMPANY_CONFIG.commercialName}
                </p>
                <p className="text-xs text-[#E4C477]">{COMPANY_CONFIG.identificationName}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-sm">
              Atendimento voltado à organização, acompanhamento e orientação contábil para empresas
              e negócios em Alfenas, Minas Gerais.
            </p>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-[#E4C477] uppercase mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#E4C477] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#escritorio" className="hover:text-[#E4C477] transition-colors">
                  Nosso Escritório
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E4C477] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contato Oficial */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#E4C477] uppercase mb-4">
              Contato e Localização
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C99A38] shrink-0" aria-hidden="true" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-[#E4C477] transition-colors tabular-nums"
                >
                  {COMPANY_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#C99A38] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E4C477] transition-colors"
                >
                  WhatsApp Oficial
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99A38] mt-0.5 shrink-0" aria-hidden="true" />
                <span>{COMPANY_CONFIG.addressFull}</span>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E4C477] hover:underline underline-offset-4"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/65">
          <p>
            © {currentYear} {COMPANY_CONFIG.fullBrandTitle}. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={onOpenPrivacy}
            className="text-white/75 hover:text-[#E4C477] underline underline-offset-4 transition-colors cursor-pointer"
          >
            Política de Privacidade
          </button>
        </div>
      </div>
    </footer>
  );
};
