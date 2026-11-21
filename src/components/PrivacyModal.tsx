import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07182B]/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-xl border border-[#10243B]/15 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#10243B]/10">
          <div>
            <h2
              id="privacy-modal-title"
              className="font-editorial text-2xl sm:text-3xl font-semibold text-[#10243B]"
            >
              Política de Privacidade
            </h2>
            <p className="mt-1 text-xs text-[#687586]">{COMPANY_CONFIG.fullBrandTitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar Política de Privacidade"
            className="w-10 h-10 rounded-lg border border-[#10243B]/10 flex items-center justify-center text-[#10243B] hover:bg-[#F4F6F8] transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-[#18212B]/85 leading-relaxed">
          <p>
            Esta página institucional apresenta informações sobre a{' '}
            <strong>{COMPANY_CONFIG.fullBrandTitle}</strong>, localizada em{' '}
            {COMPANY_CONFIG.addressFull}.
          </p>
          <p>
            <strong>Uso do formulário de contato:</strong> Os dados informados nos campos do
            formulário (nome, telefone, e-mail, tipo de atendimento e mensagem) permanecem apenas no
            navegador do visitante para compor o texto de atendimento que será encaminhado
            voluntariamente pelo próprio usuário ao WhatsApp oficial ({COMPANY_CONFIG.phoneDisplay}).
          </p>
          <p>
            <strong>Armazenamento e compartilhamento:</strong> Este site institucional não realiza
            venda de dados pessoais e não envia informações automaticamente para servidores externos
            sem a ação expressa do visitante.
          </p>
          <p>
            <strong>Canais oficiais:</strong> Caso tenha dúvidas sobre atendimento ou sobre o
            tratamento de informações, entre em contato diretamente pelo telefone/WhatsApp{' '}
            {COMPANY_CONFIG.phoneDisplay}.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#10243B]/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#10243B] hover:bg-[#173B5E] text-white text-sm font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
