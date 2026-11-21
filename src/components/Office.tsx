import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink, Phone } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Office: React.FC = () => {
  return (
    <section
      id="escritorio"
      className="py-20 lg:py-28 bg-[#F4F6F8] border-t border-[#10243B]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C99A38]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wide text-[#C99A38]">
              Localização em {COMPANY_CONFIG.city} – {COMPANY_CONFIG.stateCode}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-[1.12] text-[#10243B]">
            Conheça nosso escritório
          </h2>

          <p className="mt-4 text-base text-[#687586] leading-relaxed">
            Estrutura localizada no Bairro Santa Rita, em Alfenas, Minas Gerais, com acesso fácil e
            identificação visual na fachada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Fotografia Real da Fachada */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative flex-1 rounded-xl overflow-hidden border border-[#10243B]/12 bg-white shadow-sm">
              <ResilientImage
                src={COMPANY_CONFIG.assets.facade}
                alt={`Fotografia real da fachada externa da ${COMPANY_CONFIG.identificationName} localizada na ${COMPANY_CONFIG.addressLine}`}
                className="w-full h-full min-h-[20rem] max-h-[32rem] object-cover object-center"
              />
              <div className="p-4 sm:p-5 bg-white border-t border-[#10243B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="text-sm font-semibold text-[#10243B]">
                  Fachada externa · {COMPANY_CONFIG.identificationName}
                </p>
                <p className="text-xs text-[#687586]">
                  {COMPANY_CONFIG.city} · {COMPANY_CONFIG.stateFull}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Informações do Estabelecimento + Imagem Ilustrativa de Escritório */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="bg-white rounded-xl border border-[#10243B]/10 p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 pb-5 border-b border-[#10243B]/8">
                  <div className="w-12 h-12 rounded-lg border border-[#10243B]/10 bg-white p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={COMPANY_CONFIG.assets.logo}
                      alt={`Logotipo ${COMPANY_CONFIG.identificationName}`}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#10243B]">
                      {COMPANY_CONFIG.identificationName}
                    </h3>
                    <p className="text-xs text-[#687586]">{COMPANY_CONFIG.commercialName}</p>
                  </div>
                </div>

                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C99A38] mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-medium text-[#687586]">Endereço</dt>
                      <dd className="text-[#18212B] font-medium mt-0.5">
                        {COMPANY_CONFIG.streetAddress}, {COMPANY_CONFIG.neighborhood}
                      </dd>
                      <dd className="text-[#687586]">
                        {COMPANY_CONFIG.city} – {COMPANY_CONFIG.stateCode}, CEP {COMPANY_CONFIG.cep}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#C99A38] mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-medium text-[#687586]">Telefone e WhatsApp</dt>
                      <dd className="mt-0.5">
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#10243B] font-semibold hover:text-[#C99A38] transition-colors tabular-nums"
                        >
                          {COMPANY_CONFIG.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-7 pt-5 border-t border-[#10243B]/8 flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#10243B] hover:bg-[#173B5E] text-white text-sm font-semibold whitespace-nowrap transition-colors"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-[#E4C477] shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#10243B]/20 hover:border-[#C99A38] text-[#10243B] text-sm font-semibold whitespace-nowrap transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#10243B]/10 bg-white">
              <div className="aspect-[16/9] overflow-hidden">
                <ResilientImage
                  src={COMPANY_CONFIG.assets.modernOffice}
                  alt="Sala de reuniões corporativa com iluminação natural e mesa em madeira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
