import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, getWhatsAppUrl } from '../config/company';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#C99A38]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wide text-[#C99A38]">
              Dúvidas Comuns
            </span>
            <span className="w-6 h-px bg-[#C99A38]" aria-hidden="true" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#10243B]">
            Perguntas Frequentes
          </h2>

          <p className="mt-3 text-base text-[#687586]">
            Esclarecimentos iniciais sobre atendimento, canais de contato e informações gerais do
            escritório.
          </p>
        </div>

        <div className="divide-y divide-[#10243B]/10 border-y border-[#10243B]/10">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id} className="py-1">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 px-2 flex items-center justify-between gap-4 text-left group focus-visible:rounded-lg"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#10243B] group-hover:text-[#173B5E] transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C99A38] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 pb-6 text-sm sm:text-base text-[#687586] leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#687586]">
            Precisa de uma orientação específica?{' '}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#10243B] underline decoration-[#C99A38] underline-offset-4 hover:text-[#173B5E]"
            >
              Converse diretamente pelo WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
