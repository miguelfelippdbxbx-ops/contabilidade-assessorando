import React from 'react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar pelo WhatsApp oficial ${COMPANY_CONFIG.phoneDisplay}`}
      title={`WhatsApp: ${COMPANY_CONFIG.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-40 group inline-flex items-center gap-2.5 h-12 sm:h-13 px-3.5 sm:px-4 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
    >
      <WhatsAppIcon className="w-6 h-6 shrink-0" />
      <span className="hidden sm:inline text-xs font-semibold tracking-tight whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
};
