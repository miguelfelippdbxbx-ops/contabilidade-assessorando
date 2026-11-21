import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  ReceiptText,
  Users,
  FilePlus2,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import {
  SERVICES_CONFIG,
  ENVIRONMENT_GALLERY,
  ServiceCategory,
  getWhatsAppUrl,
} from '../config/company';
import { ResilientImage } from './ResilientImage';

const SERVICE_ICONS: Record<ServiceCategory['iconKey'], React.ComponentType<{ className?: string }>> = {
  building: Building2,
  receipt: ReceiptText,
  users: Users,
  filePlus: FilePlus2,
  shieldCheck: ShieldCheck,
  trendingUp: TrendingUp,
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#F4F6F8] border-y border-[#10243B]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C99A38]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wide text-[#C99A38]">
              Áreas de Atuação
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-[1.12] text-[#10243B]">
            Soluções contábeis para sua empresa
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#687586] leading-relaxed">
            Conheça as áreas de atuação e entre em contato para obter informações sobre as soluções
            disponíveis.
          </p>
        </div>

        {/* Grade de Categorias Configuráveis */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CONFIG.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.iconKey];
            const serviceMessage = `Olá! Acessei o site da Contabilidade Assessorando e gostaria de obter mais informações sobre ${service.whatsappTopic}.`;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.05, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-white rounded-xl border border-[#10243B]/10 p-7 flex flex-col justify-between transition-all duration-200 hover:border-[#C99A38]/60 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#10243B]/8">
                    <div className="w-11 h-11 rounded-lg bg-[#10243B] text-[#E4C477] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#173B5E]">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-[#C99A38] tabular-nums">
                      {service.number}.
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-[#10243B] leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#687586] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#10243B]/8 flex items-center justify-between gap-3">
                  <a
                    href={getWhatsAppUrl(serviceMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#10243B] hover:text-[#C99A38] transition-colors whitespace-nowrap"
                  >
                    <span>Saiba Mais</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href="#contato"
                    className="text-xs font-medium text-[#687586] hover:text-[#10243B] transition-colors whitespace-nowrap"
                  >
                    Solicitar contato
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Nota transparente sobre confirmação de escopo */}
        <p className="mt-6 text-xs text-[#687586]">
          Nota: As categorias acima representam frentes consultivas para orientação inicial; a
          disponibilidade e o escopo específico de atendimento são confirmados diretamente com o
          escritório.
        </p>

        {/* Galeria Visual de Rotina & Organização Empresarial */}
        <div className="mt-16 pt-12 border-t border-[#10243B]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#10243B]">
                Rotina contábil e organização empresarial
              </h3>
              <p className="mt-1.5 text-sm text-[#687586]">
                Apoio técnico pautado pela clareza documental e pelo acompanhamento contínuo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ENVIRONMENT_GALLERY.map((photo, index) => (
              <motion.figure
                key={photo.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group bg-white rounded-xl overflow-hidden border border-[#10243B]/10"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <ResilientImage
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="px-4 py-3 text-xs font-medium text-[#10243B]">
                  {photo.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
