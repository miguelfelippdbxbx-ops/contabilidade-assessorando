import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Fotografia Real da Fachada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <figure className="relative">
              <div className="overflow-hidden rounded-xl border border-[#10243B]/12 bg-[#F4F6F8] shadow-sm">
                <ResilientImage
                  src={COMPANY_CONFIG.assets.facade}
                  alt={`Fachada oficial do escritório ${COMPANY_CONFIG.identificationName} em Alfenas, MG`}
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-500 hover:scale-[1.015]"
                />
              </div>
              <figcaption className="mt-3.5 flex items-center justify-between gap-4 text-xs text-[#687586]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C99A38] shrink-0" aria-hidden="true" />
                  <span>Fachada real · {COMPANY_CONFIG.addressLine}</span>
                </span>
              </figcaption>
            </figure>
          </motion.div>

          {/* Apresentação Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C99A38]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide text-[#C99A38]">
                Sobre o Escritório
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-[1.12] text-[#10243B]">
              Conheça a Contabilidade Assessorando
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#18212B]/85 leading-relaxed">
              <p>
                A Contabilidade Assessorando, identificada também como Contabilidade Leandro
                Almeida, está localizada em Alfenas, Minas Gerais. O escritório apresenta uma
                proposta de atendimento voltada à organização e ao acompanhamento contábil,
                oferecendo um canal de comunicação para pessoas e empresas interessadas em conhecer
                seus serviços.
              </p>
              <p className="text-[#687586]">
                Com sede própria identificada na Rua João de Camargo, nº 231, no Bairro Santa Rita,
                o escritório mantém contato direto para esclarecer dúvidas e apresentar opções de
                atendimento adequadas a cada realidade empresarial.
              </p>
            </div>

            {/* Bloco Institucional Discreto com Logotipo Original */}
            <div className="mt-8 pt-6 border-t border-[#10243B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-lg border border-[#10243B]/10 bg-white p-1.5 flex items-center justify-center shrink-0">
                  <img
                    src={COMPANY_CONFIG.assets.logo}
                    alt={`Logotipo ${COMPANY_CONFIG.identificationName}`}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#10243B]">
                    {COMPANY_CONFIG.identificationName}
                  </p>
                  <p className="text-xs text-[#687586]">
                    {COMPANY_CONFIG.city} · {COMPANY_CONFIG.stateFull}
                  </p>
                </div>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#10243B] hover:bg-[#173B5E] text-white text-sm font-medium whitespace-nowrap shrink-0 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#E4C477]" />
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
