import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_CONFIG, getWhatsAppUrl } from '../config/company';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  message?: string;
}

const INITIAL_VALUES: FormValues = {
  name: '',
  phone: '',
  email: '',
  serviceType: '',
  message: '',
};

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 3) {
    errors.name = 'Informe seu nome completo (mínimo de 3 caracteres).';
  }

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    errors.phone = 'Informe um número de telefone válido com DDD.';
  }

  const emailTrimmed = values.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailTrimmed)) {
    errors.email = 'Informe um endereço de e-mail válido.';
  }

  if (!values.serviceType) {
    errors.serviceType = 'Selecione o tipo de atendimento desejado.';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Descreva brevemente sua solicitação (mínimo de 10 caracteres).';
  }

  return errors;
}

export const Contact: React.FC = () => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [compiledWhatsAppUrl, setCompiledWhatsAppUrl] = useState<string | null>(null);
  const [compiledPreview, setCompiledPreview] = useState<string | null>(null);

  const handleFieldChange = (
    field: keyof FormValues,
    value: string
  ) => {
    const formatted = field === 'phone' ? formatBrazilPhone(value) : value;
    setValues((prev) => ({ ...prev, [field]: formatted }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const composedMessage = [
      'Olá! Gostaria de solicitar atendimento pela Contabilidade Assessorando.',
      '',
      `Nome: ${values.name.trim()}`,
      `Telefone: ${values.phone.trim()}`,
      `E-mail: ${values.email.trim()}`,
      `Atendimento desejado: ${values.serviceType}`,
      `Mensagem: ${values.message.trim()}`,
    ].join('\n');

    setCompiledPreview(composedMessage);
    setCompiledWhatsAppUrl(getWhatsAppUrl(composedMessage));
  };

  const handleResetConfirmation = () => {
    setCompiledWhatsAppUrl(null);
    setCompiledPreview(null);
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-28 bg-[#F4F6F8] border-t border-[#10243B]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C99A38]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wide text-[#C99A38]">
              Canais Oficiais
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold leading-[1.12] text-[#10243B]">
            Estamos prontos para conversar com você
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#687586] leading-relaxed">
            Entre em contato com a Contabilidade Assessorando para conhecer os serviços, esclarecer
            dúvidas e obter informações sobre as possibilidades de atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dados Oficiais de Contato */}
          <div className="lg:col-span-5 bg-[#10243B] text-white rounded-xl p-7 sm:p-8 border border-[#173B5E]">
            <h3 className="font-editorial text-2xl font-semibold text-white">
              Informações Oficiais
            </h3>
            <p className="mt-1.5 text-xs text-[#E4C477]">
              {COMPANY_CONFIG.fullBrandTitle}
            </p>

            <dl className="mt-7 space-y-5 text-sm border-t border-white/12 pt-6">
              <div>
                <dt className="text-xs font-medium text-white/60">Empresa</dt>
                <dd className="mt-1 font-medium text-white">
                  {COMPANY_CONFIG.fullBrandTitle}
                </dd>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E4C477] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-medium text-white/60">Telefone e WhatsApp</dt>
                  <dd className="mt-1">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-white hover:text-[#E4C477] transition-colors tabular-nums"
                    >
                      {COMPANY_CONFIG.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E4C477] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="text-xs font-medium text-white/60">Endereço</dt>
                  <dd className="mt-1 text-white/90 leading-relaxed">
                    {COMPANY_CONFIG.addressFull}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 pt-6 border-t border-white/12 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg bg-[#C99A38] hover:bg-[#E4C477] text-[#07182B] font-semibold text-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Atendimento via WhatsApp</span>
              </a>

              <a
                href={COMPANY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white text-sm font-medium transition-colors"
              >
                <span>Ver localização no Google Maps</span>
                <ExternalLink className="w-4 h-4 text-[#E4C477] shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Formulário de Contato com Encaminhamento Transparente ao WhatsApp */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#10243B]/10 p-7 sm:p-8">
            {compiledWhatsAppUrl && compiledPreview ? (
              <div className="space-y-6" role="status" aria-live="polite">
                <div className="flex items-start gap-3 pb-5 border-b border-[#10243B]/10">
                  <CheckCircle2
                    className="w-6 h-6 text-[#16A34A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#10243B]">
                      Mensagem preparada para envio via WhatsApp
                    </h3>
                    <p className="mt-1 text-sm text-[#687586]">
                      Confira os dados abaixo e clique no botão para abrir a conversa diretamente
                      com o WhatsApp oficial ({COMPANY_CONFIG.phoneDisplay}).
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-[#F4F6F8] border border-[#10243B]/10 p-4">
                  <pre className="whitespace-pre-wrap font-sans text-sm text-[#18212B] leading-relaxed">
                    {compiledPreview}
                  </pre>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={compiledWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#16A34A] hover:bg-[#15803D] text-white font-semibold text-sm transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    <span>Confirmar e Enviar no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleResetConfirmation}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#10243B]/15 hover:bg-[#F4F6F8] text-[#10243B] font-medium text-sm transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Editar informações</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-[#10243B]">
                    Solicitar Atendimento
                  </h3>
                  <p className="mt-1 text-sm text-[#687586]">
                    Preencha os campos para montar sua mensagem e encaminhar diretamente pelo
                    WhatsApp oficial.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#10243B] mb-1.5"
                    >
                      Nome completo
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      placeholder="Seu nome completo"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#18212B] bg-white transition-colors ${
                        errors.name
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-[#10243B]/20 focus:border-[#10243B]'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="error-name"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-[#10243B] mb-1.5"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'error-phone' : undefined}
                      placeholder="(35) 99999-9999"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#18212B] bg-white tabular-nums transition-colors ${
                        errors.phone
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-[#10243B]/20 focus:border-[#10243B]'
                      }`}
                    />
                    {errors.phone && (
                      <p
                        id="error-phone"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#10243B] mb-1.5"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      placeholder="seuemail@empresa.com.br"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#18212B] bg-white transition-colors ${
                        errors.email
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-[#10243B]/20 focus:border-[#10243B]'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="error-email"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold text-[#10243B] mb-1.5"
                    >
                      Tipo de atendimento desejado
                    </label>
                    <select
                      id="contact-service"
                      name="serviceType"
                      value={values.serviceType}
                      onChange={(e) => handleFieldChange('serviceType', e.target.value)}
                      aria-invalid={Boolean(errors.serviceType)}
                      aria-describedby={errors.serviceType ? 'error-service' : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#18212B] bg-white transition-colors ${
                        errors.serviceType
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-[#10243B]/20 focus:border-[#10243B]'
                      }`}
                    >
                      <option value="">Selecione uma opção</option>
                      {SERVICES_CONFIG.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Outros / Informações Gerais">
                        Outros / Informações Gerais
                      </option>
                    </select>
                    {errors.serviceType && (
                      <p
                        id="error-service"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.serviceType}</span>
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#10243B] mb-1.5"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      placeholder="Informe brevemente como podemos ajudar sua empresa ou suas dúvidas."
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#18212B] bg-white transition-colors resize-y ${
                        errors.message
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-[#10243B]/20 focus:border-[#10243B]'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="error-message"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                      >
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#687586]">
                    Ao continuar, você visualizará o resumo antes de abrir o WhatsApp.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#10243B] hover:bg-[#173B5E] text-white font-semibold text-sm whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#E4C477] shrink-0" />
                    <span>Preparar Mensagem no WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
