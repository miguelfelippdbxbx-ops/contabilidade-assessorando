import React from 'react';
import { motion } from 'motion/react';
import { FolderCheck, MessageSquareText, Award, ClipboardList } from 'lucide-react';
import { COMPANY_CONFIG, DIFFERENTIALS_CONFIG, DifferentialItem } from '../config/company';
import { ResilientImage } from './ResilientImage';

const DIFFERENTIAL_ICONS: Record<
  DifferentialItem['iconKey'],
  React.ComponentType<{ className?: string }>
> = {
  folderCheck: FolderCheck,
  messageSquare: MessageSquareText,
  award: Award,
  clipboardList: ClipboardList,
};

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Coluna Esquerda: Título e Pilares */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C99A38]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide text-[#C99A38]">
                Diferenciais de Atendimento
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-[1.12] text-[#10243B] max-w-xl">
              Profissionalismo em cada etapa do atendimento
            </h2>

            <p className="mt-4 text-base text-[#687586] leading-relaxed max-w-xl">
              Uma condução pautada pela clareza nas orientações e pelo cuidado contínuo com a
              organização da sua empresa.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {DIFFERENTIALS_CONFIG.map((item, index) => {
                const IconComponent = DIFFERENTIAL_ICONS[item.iconKey];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="p-6 rounded-xl border border-[#10243B]/10 bg-[#F4F6F8]/60 hover:bg-white hover:border-[#C99A38]/50 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#10243B]/10 text-[#10243B] flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#C99A38]" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-[#687586] tabular-nums">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#10243B]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#687586] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Coluna Direita: Fotografias de Reunião & Atendimento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
          >
            <figure className="rounded-xl overflow-hidden border border-[#10243B]/10 bg-[#F4F6F8]">
              <div className="aspect-[4/3] overflow-hidden">
                <ResilientImage
                  src={COMPANY_CONFIG.assets.businessMeeting}
                  alt="Reunião empresarial de orientação e alinhamento contábil em ambiente corporativo"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-3.5 text-xs text-[#687586] border-t border-[#10243B]/8 bg-white">
                Diálogo próximo para compreender as necessidades de cada negócio.
              </figcaption>
            </figure>

            <figure className="rounded-xl overflow-hidden border border-[#10243B]/10 bg-[#F4F6F8]">
              <div className="aspect-[4/3] overflow-hidden">
                <ResilientImage
                  src={COMPANY_CONFIG.assets.clientAttendance}
                  alt="Mesa de atendimento profissional preparada para receber empresários"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-5 py-3.5 text-xs text-[#687586] border-t border-[#10243B]/8 bg-white">
                Atendimento pautado por acolhimento, clareza e respeito profissional.
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
