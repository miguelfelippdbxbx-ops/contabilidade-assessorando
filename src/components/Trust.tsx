import React from 'react';
import { motion } from 'motion/react';
import { TRUST_PILLARS, getWhatsAppUrl } from '../config/company';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Trust: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#07182B] text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(23,59,94,0.45),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C99A38]/40 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end pb-12 border-b border-white/12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C99A38]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide text-[#E4C477]">
                Princípios Institucionais
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-[1.12] text-white max-w-3xl">
              Confiança se constrói com responsabilidade e profissionalismo
            </h2>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C99A38] hover:bg-[#E4C477] text-[#07182B] font-semibold text-sm whitespace-nowrap transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Falar com o Escritório</span>
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TRUST_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#C99A38]/40 transition-colors"
            >
              <span className="block text-xs font-semibold text-[#E4C477] tabular-nums mb-3">
                0{index + 1}.
              </span>
              <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
