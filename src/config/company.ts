export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  iconKey: 'building' | 'receipt' | 'users' | 'filePlus' | 'shieldCheck' | 'trendingUp';
  whatsappTopic: string;
}

export interface DifferentialItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconKey: 'folderCheck' | 'messageSquare' | 'award' | 'clipboardList';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export const COMPANY_CONFIG = {
  commercialName: 'Contabilidade Assessorando',
  identificationName: 'Contabilidade Leandro Almeida',
  fullBrandTitle: 'Contabilidade Assessorando – Leandro Almeida',
  responsibleName: 'Leandro Almeida',
  city: 'Alfenas',
  stateCode: 'MG',
  stateFull: 'Minas Gerais',
  country: 'Brasil',
  cep: '37132-000',
  streetAddress: 'Rua João de Camargo, nº 231',
  neighborhood: 'Bairro Santa Rita',
  addressLine: 'Rua João de Camargo, nº 231, Bairro Santa Rita, Alfenas – MG',
  addressFull: 'Rua João de Camargo, nº 231, Bairro Santa Rita, Alfenas – MG, CEP 37132-000',
  phoneDisplay: '(35) 99725-1896',
  whatsappNumber: '5535997251896',
  whatsappBaseUrl: 'https://wa.me/5535997251896',
  defaultWhatsappMessage:
    'Olá! Acessei o site da Contabilidade Assessorando e gostaria de obter mais informações sobre os serviços.',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Joao+de+Camargo+231+Santa+Rita+Alfenas+MG',

  // Campos opcionais preparados para futura confirmação do proprietário (não inventados)
  email: null as string | null,
  businessHours: null as string | null,
  socialLinks: [] as Array<{ label: string; url: string }>,

  assets: {
    logo: '/assets/aistudio/image_70d27ab8.png',
    facade: '/assets/aistudio/image_14dc177a.png',
    heroWorkspace: '/src/assets/images/hero_accounting_workspace_1795276494072.jpg',
    corporateEnvironment: '/src/assets/images/corporate_environment_desk_1795276495134.jpg',
    professionalDocuments: '/src/assets/images/professional_documents_desk_1795276494112.jpg',
    businessMeeting: '/src/assets/images/business_meeting_office_1795276495160.jpg',
    financialOrganization: '/src/assets/images/financial_organization_minimal_1795276493755.jpg',
    clientAttendance: '/src/assets/images/client_attendance_consulting_1795276494560.jpg',
    modernOffice: '/src/assets/images/modern_office_architecture_1795276494561.jpg',
    businessManagement: '/src/assets/images/business_management_strategy_1795276494111.jpg',
  },
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage ?? COMPANY_CONFIG.defaultWhatsappMessage;
  return `${COMPANY_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
] as const;

/**
 * Categorias configuráveis para apresentação comercial.
 * A disponibilidade e o escopo específico de cada atendimento são confirmados diretamente com o escritório.
 */
export const SERVICES_CONFIG: ServiceCategory[] = [
  {
    id: 'contabilidade-empresarial',
    number: '01',
    title: 'Contabilidade Empresarial',
    description:
      'Estruturação e acompanhamento das rotinas contábeis para apoiar a organização patrimonial e financeira de empresas.',
    iconKey: 'building',
    whatsappTopic: 'Contabilidade Empresarial',
  },
  {
    id: 'assessoria-fiscal',
    number: '02',
    title: 'Assessoria Fiscal',
    description:
      'Orientação e conferência voltadas ao cumprimento das obrigações fiscais e apuração tributária conforme a atividade da empresa.',
    iconKey: 'receipt',
    whatsappTopic: 'Assessoria Fiscal',
  },
  {
    id: 'departamento-trabalhista',
    number: '03',
    title: 'Departamento Trabalhista',
    description:
      'Apoio nas rotinas trabalhistas e previdenciárias relacionadas a registros, folha de pagamento e obrigações acessórias.',
    iconKey: 'users',
    whatsappTopic: 'Departamento Trabalhista',
  },
  {
    id: 'abertura-de-empresas',
    number: '04',
    title: 'Abertura de Empresas',
    description:
      'Orientação inicial sobre etapas cadastrais e documentais necessárias para formalização e início de atividades empresariais.',
    iconKey: 'filePlus',
    whatsappTopic: 'Abertura de Empresas',
  },
  {
    id: 'regularizacao-empresarial',
    number: '05',
    title: 'Regularização Empresarial',
    description:
      'Verificação cadastral e encaminhamento de orientações para atualização de registros e pendências documentais da empresa.',
    iconKey: 'shieldCheck',
    whatsappTopic: 'Regularização Empresarial',
  },
  {
    id: 'planejamento-tributario',
    number: '06',
    title: 'Planejamento Tributário',
    description:
      'Análise informativa de enquadramentos tributários aplicáveis ao perfil do negócio, para avaliação conjunta com o responsável.',
    iconKey: 'trendingUp',
    whatsappTopic: 'Planejamento Tributário',
  },
];

export const DIFFERENTIALS_CONFIG: DifferentialItem[] = [
  {
    id: 'organizacao',
    number: '01',
    title: 'Organização',
    description:
      'Processos estruturados e atenção aos documentos para manter as informações contábeis ordenadas e acessíveis.',
    iconKey: 'folderCheck',
  },
  {
    id: 'comunicacao-clara',
    number: '02',
    title: 'Comunicação clara',
    description:
      'Explicações diretas e objetivas, evitando termos excessivamente técnicos para facilitar a compreensão do empresário.',
    iconKey: 'messageSquare',
  },
  {
    id: 'atendimento-profissional',
    number: '03',
    title: 'Atendimento profissional',
    description:
      'Postura cordial, respeito às particularidades de cada negócio e canal direto para esclarecimento de dúvidas.',
    iconKey: 'award',
  },
  {
    id: 'acompanhamento-contabil',
    number: '04',
    title: 'Acompanhamento contábil',
    description:
      'Rotina de orientação contínua alinhada às necessidades e demandas apresentadas por empresas e empreendedores.',
    iconKey: 'clipboardList',
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Seriedade',
    description: 'Condução responsável das informações e demandas apresentadas por cada empresa.',
  },
  {
    title: 'Organização',
    description: 'Critério e método no tratamento de registros, documentos e obrigações contábeis.',
  },
  {
    title: 'Transparência',
    description: 'Diálogo aberto sobre procedimentos, etapas de atendimento e solicitações.',
  },
  {
    title: 'Credibilidade',
    description: 'Presença física estabelecida em Alfenas – MG e contato direto com a equipe.',
  },
  {
    title: 'Compromisso profissional',
    description: 'Dedicação técnica voltada à segurança e ao apoio contínuo da gestão empresarial.',
  },
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'contato-escritorio',
    question: 'Como entrar em contato com o escritório?',
    answer:
      'Você pode falar diretamente pelo telefone ou WhatsApp oficial (35) 99725-1896, utilizar o formulário de atendimento nesta página ou comparecer ao endereço em Alfenas – MG: Rua João de Camargo, nº 231, Bairro Santa Rita.',
  },
  {
    id: 'servicos-disponiveis',
    question: 'Quais serviços contábeis estão disponíveis?',
    answer:
      'O site apresenta áreas de atuação voltadas à contabilidade empresarial, assessoria fiscal, departamento trabalhista, abertura, regularização e orientação tributária. Para confirmar a disponibilidade específica para o perfil da sua empresa, entre em contato diretamente pelo WhatsApp.',
  },
  {
    id: 'solicitar-informacoes',
    question: 'Como solicitar informações?',
    answer:
      'Basta clicar em qualquer botão de atendimento do site para iniciar uma conversa pelo WhatsApp (35) 99725-1896 ou preencher o formulário na seção de contato com seus dados e sua necessidade.',
  },
  {
    id: 'funcionamento-atendimento',
    question: 'Como funciona o atendimento?',
    answer:
      'O atendimento inicial busca compreender a realidade e a demanda de cada interessado, oferecendo orientações claras sobre documentos e próximos passos. Os detalhes e horários de atendimento são alinhados diretamente com o escritório pelo canal oficial.',
  },
  {
    id: 'proposta-servicos',
    question: 'Como obter uma proposta de serviços?',
    answer:
      'Entre em contato pelo WhatsApp (35) 99725-1896 ou envie suas informações pelo formulário informando o tipo de atendimento desejado. A equipe orientará sobre os dados necessários para apresentação de uma proposta personalizada.',
  },
];

export const ENVIRONMENT_GALLERY: GalleryPhoto[] = [
  {
    id: 'ambiente-corporativo',
    src: COMPANY_CONFIG.assets.corporateEnvironment,
    alt: 'Ambiente corporativo organizado com estações de trabalho e arquivos',
    caption: 'Ambiente corporativo estruturado',
  },
  {
    id: 'documentos-trabalho',
    src: COMPANY_CONFIG.assets.professionalDocuments,
    alt: 'Profissional analisando livros e registros contábeis com atenção aos detalhes',
    caption: 'Conferência dedicada de registros',
  },
  {
    id: 'organizacao-financeira',
    src: COMPANY_CONFIG.assets.financialOrganization,
    alt: 'Arquivos e instrumentos de cálculo organizados sobre mesa de escritório',
    caption: 'Método e organização documental',
  },
  {
    id: 'gestao-empresarial',
    src: COMPANY_CONFIG.assets.businessManagement,
    alt: 'Estação de trabalho executiva com indicadores de gestão em tela',
    caption: 'Apoio à gestão empresarial',
  },
];
