import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ResilientImage } from './ResilientImage';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative bg-[#07182B] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Elementos arquitetônicos sutis no fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(23,59,94,0.55),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[34rem] h-[34rem] border border-[#C99A38]/12 rounded-full -translate-y-1/2 translate-x-1/3"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C99A38]/40 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Coluna Editorial Principal */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-[#C99A38]" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#E4C477]">
                {COMPANY_CONFIG.identificationName} · {COMPANY_CONFIG.city}, {COMPANY_CONFIG.stateCode}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-[clamp(2.25rem,4.1vw,3.65rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-white max-w-2xl"
            >
              Contabilidade e assessoria para quem busca crescer com segurança.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl"
            >
              Organização, acompanhamento e orientação contábil para apoiar a gestão de empresas e
              negócios. Conheça a Contabilidade Assessorando e entre em contato para saber mais.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C99A38] hover:bg-[#E4C477] text-[#07182B] font-semibold text-sm tracking-tight whitespace-nowrap shrink-0 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span>Conheça Nossos Serviços</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-white/25 bg-white/5 hover:bg-white/12 text-white font-medium text-sm tracking-tight whitespace-nowrap shrink-0 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#E4C477] shrink-0" />
                <span>Fale com Nossa Equipe</span>
              </a>
            </motion.div>

            {/* Identificação institucional discreta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-10 pt-6 border-t border-white/12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/70"
            >
              <span>{COMPANY_CONFIG.streetAddress}, {COMPANY_CONFIG.neighborhood}</span>
              <span aria-hidden="true" className="text-[#C99A38]">·</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E4C477] transition-colors tabular-nums"
              >
                Atendimento: {COMPANY_CONFIG.phoneDisplay}
              </a>
            </motion.div>
          </div>

          {/* Coluna Fotográfica com Logotipo Oficial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative h-full min-h-[20rem] lg:min-h-[28rem] rounded-xl overflow-hidden border border-[#C99A38]/25 bg-[#10243B]">
              <ResilientImage
                src={COMPANY_CONFIG.assets.heroWorkspace}
                alt="Mesa executiva organizada com computador, pastas e iluminação natural no ambiente contábil"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#07182B]/85 via-[#07182B]/20 to-transparent"
              />

              {/* Brasão Oficial Integrado com Respeito às Proporções */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 bg-[#07182B]/88 backdrop-blur-md border border-[#C99A38]/30 rounded-lg p-3.5">
                <div className="w-12 h-12 rounded-full bg-white p-1.5 shrink-0 flex items-center justify-center shadow-sm">
                  <img
                    src={COMPANY_CONFIG.assets.logo}
                    alt={`Emblema oficial ${COMPANY_CONFIG.commercialName}`}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    {COMPANY_CONFIG.commercialName}
                  </p>
                  <p className="text-xs text-[#E4C477] truncate">
                    {COMPANY_CONFIG.responsibleName} · {COMPANY_CONFIG.city}, {COMPANY_CONFIG.stateCode}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indicador de rolagem */}
        <div className="mt-10 flex justify-center lg:justify-start">
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 text-xs font-medium text-white/65 hover:text-[#E4C477] transition-colors py-1"
          >
            <span>Explorar apresentação institucional</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
