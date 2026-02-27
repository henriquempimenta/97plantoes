import React, { useState } from 'react';

// --- Brand Colors ---
// Ciano Plantonista: #55BCCD (30%)
// Vermelho Médico:   #E13444 (10%)
// Branco Hospitalar: #FFFFFF (60%)
// Azul:              #1C5A90 (auxiliary)

// --- Icons ---
const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// --- Subcomponents ---
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border-b py-5 cursor-pointer group"
      style={{ borderColor: '#e5e7eb' }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center text-base font-semibold gap-4">
        <span style={{ color: '#1C5A90' }} className="group-hover:opacity-80 transition-opacity leading-snug">
          {question}
        </span>
        <span
          className="text-xl font-mono flex-shrink-0 transition-transform duration-300"
          style={{ color: '#55BCCD', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </div>
      {isOpen && (
        <div className="mt-4 text-sm leading-relaxed pr-8" style={{ color: '#4b5563' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

const StatBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div
    className="p-6 rounded-2xl text-center border"
    style={{ borderColor: '#55BCCD22', background: 'linear-gradient(135deg, #f0fafc 0%, #e8f7fa 100%)' }}
  >
    <div className="text-3xl font-bold mb-1" style={{ color: '#1C5A90' }}>{value}</div>
    <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: '#55BCCD' }}>{label}</div>
  </div>
);

const FeatureCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div
    className="rounded-2xl p-7 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
    style={{ borderColor: '#e5e7eb' }}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
      style={{ background: 'linear-gradient(135deg, #55BCCD22 0%, #1C5A9022 100%)' }}
    >
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2" style={{ color: '#1C5A90' }}>{title}</h3>
    <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{desc}</p>
  </div>
);

const StepCard: React.FC<{ n: number; title: string; desc: string }> = ({ n, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mb-5 shadow-lg"
      style={{ background: 'linear-gradient(135deg, #55BCCD 0%, #1C5A90 100%)' }}
    >
      {n}
    </div>
    <h4 className="font-bold text-lg mb-2" style={{ color: '#1C5A90' }}>{title}</h4>
    <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{desc}</p>
  </div>
);

// --- FAQ Data from faq.txt ---
const faqGroups = [
  {
    category: 'Cadastro e Perfil',
    items: [
      {
        q: 'Quem pode se cadastrar?',
        a: 'O aplicativo é destinado exclusivamente a médicos. Podem se cadastrar profissionais de todas as especialidades e níveis de experiência. Para manter a comunidade segura e confiável, verificamos com rigor se o CRM informado é válido junto aos respectivos órgãos, garantindo um ambiente seguro para todos.',
      },
      {
        q: 'Minhas informações pessoais estão seguras?',
        a: 'Sim. A privacidade dos seus dados é uma prioridade para nós. Suas informações são protegidas por mecanismos de segurança e criptografia, com foco na confidencialidade e na proteção dos dados. Você pode utilizar o aplicativo com tranquilidade.',
      },
      {
        q: 'Posso atualizar meu perfil depois?',
        a: 'Sim. Você pode editar suas informações de perfil a qualquer momento pelo aplicativo. É possível atualizar sua foto, seus dados de contato e adicionar especialidades. Manter o perfil completo e atualizado aumenta a confiança na plataforma e facilita a conexão com outros médicos.',
      },
    ],
  },
  {
    category: 'Ofertar um Plantão',
    items: [
      {
        q: 'Preciso pagar para ofertar um plantão?',
        a: 'Não. Ofertar um plantão no aplicativo é totalmente gratuito. A plataforma foi criada para profissionalizar a oferta de plantões em todo o Brasil, conectando médicos de forma organizada e segura em um ambiente único.',
      },
      {
        q: 'Como ofertar um plantão que preciso passar?',
        a: 'No Painel, toque no ícone no canto superior direito e escolha entre Plantão Avulso ou Contrato Fixo. Preencha as informações do plantão, incluindo a unidade de saúde, e toque em Ofertar. O plantão será publicado automaticamente e ficará visível para todos os médicos cadastrados.',
      },
      {
        q: 'Posso escolher quem vai assumir meu plantão?',
        a: 'Sim. É possível direcionar a oferta para um médico específico cadastrado na plataforma, usando a opção Atribuir. Você também pode receber candidaturas abertas e escolher o profissional mais adequado após revisar o perfil e entrar em contato pelo chat.',
      },
      {
        q: 'Consigo enviar o link do meu plantão pelo WhatsApp?',
        a: 'Sim. Após criar a oferta e clicar em Ofertar, você terá a opção de compartilhar o link da oferta pelo WhatsApp, permitindo que outros médicos acessem o plantão e se candidatem.',
      },
      {
        q: 'Você será notificado quando houver novas candidaturas?',
        a: 'Sim. Sempre que uma nova candidatura for registrada para um plantão seu, você será notificado automaticamente pelo aplicativo.',
      },
    ],
  },
  {
    category: 'Candidatar-se a um Plantão',
    items: [
      {
        q: 'Posso assumir qualquer plantão publicado?',
        a: 'Sim, desde que o plantão esteja localizado em um Estado onde o seu CRM seja válido. É importante verificar se o plantão pertence à unidade federativa em que você possui autorização para atuar profissionalmente.',
      },
      {
        q: 'Como encontro plantões disponíveis?',
        a: 'Os plantões aparecem na Página Inicial em formato de rolagem com priorização inteligente, no Mapa interativo por proximidade, e na Agenda por data. Você pode aplicar filtros de período (6h, 12h ou 24h), especialidade e tipo de plantão.',
      },
      {
        q: 'Onde acompanho minhas candidaturas?',
        a: 'Na tela de Painel, na aba Pendências. Lá você visualiza cada candidatura, pode acessar o mapa da localidade e cancelar sua candidatura a qualquer momento. Quando sua candidatura for aceita, você será notificado.',
      },
    ],
  },
  {
    category: 'Pagamento',
    items: [
      {
        q: 'Quais são as modalidades de pagamento?',
        a: 'Cartão de crédito (parcelamento em até 6x), PIX e Boleto.',
      },
      {
        q: 'O pagamento é seguro?',
        a: 'Sim. O pagamento é realizado de forma segura, com dados protegidos por mecanismos de segurança e criptografia. O repasse ao profissional responsável ocorre somente após a realização do plantão, trazendo mais segurança para ambas as partes.',
      },
      {
        q: 'Se eu assumir um plantão, quando recebo o pagamento?',
        a: 'Após realizar o plantão, o valor é repassado à sua conta bancária pessoal. PIX: mesmo dia ou dia útil seguinte. Boleto: até 2 dias úteis. Cartão de crédito: até 14 dias úteis.',
      },
      {
        q: 'O pagamento é garantido após eu realizar o plantão?',
        a: 'Sim. Após a finalização do plantão, o pagamento é processado e repassado para a sua conta bancária pessoal, conforme os prazos informados. A plataforma assegura esse repasse.',
      },
    ],
  },
  {
    category: 'Comunicação e Segurança',
    items: [
      {
        q: 'Consigo conversar em chat com o médico do plantão?',
        a: 'Sim. O chat é liberado após a confirmação do plantão. A conversa fica disponível na aba Conversas, na tela de Perfil. Você também pode enviar mensagens antes de confirmar para alinhar detalhes.',
      },
      {
        q: 'O chat é seguro e privado?',
        a: 'Sim. O chat é privado entre você e o outro profissional médico. Nenhuma outra pessoa tem acesso à conversa, e os dados são protegidos pela plataforma.',
      },
      {
        q: 'E se eu tiver um imprevisto e não conseguir comparecer ao plantão?',
        a: 'Acesse a aba Minhas Confirmações na tela de Perfil e selecione Tive um imprevisto. Você será direcionado ao suporte, que irá auxiliar da melhor forma possível. Atenção: deixar de comparecer pode impactar sua reputação na plataforma.',
      },
    ],
  },
];

// --- Main Component ---
export default function LandingPageTemplate({ onGoToApp }: { onGoToApp: () => void }) {
  const [openCategory, setOpenCategory] = useState<string>(faqGroups[0].category);

  const marqueeKeywords = [
    'Plantão Avulso', 'Contrato Fixo', 'Verificação de CRM', 'Chat Seguro',
    'Agenda Integrada', 'Pagamento Garantido', 'Mapa de Plantões', 'PIX · Cartão · Boleto',
    'Todas as Especialidades', 'Todo o Brasil',
  ];
  const marqueeItems = [...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-cyan-100 selection:text-cyan-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .btn-primary {
          background: linear-gradient(135deg, #55BCCD 0%, #1C5A90 100%);
          color: white;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.2s ease;
          box-shadow: 0 4px 20px rgba(85,188,205,0.35);
          display: inline-block;
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(85,188,205,0.45);
        }
        .btn-secondary {
          background: white;
          color: #1C5A90;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 12px;
          border: 2px solid #55BCCD;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.2s ease;
          display: inline-block;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: #f0fafc;
          transform: translateY(-2px);
        }
        .nav-link {
          color: #4b5563;
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #1C5A90; }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fafc;
          border: 1px solid #55BCCD44;
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1C5A90;
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderColor: '#e5e7eb' }}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src="./logo.jpeg" alt="97plantões logo" className="h-9 w-auto rounded-lg" />
            <span className="font-extrabold text-xl tracking-tight" style={{ color: '#1C5A90' }}>
              97<span style={{ color: '#55BCCD' }}>plantões</span>
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex gap-8">
            <a href="#funcionalidades" className="nav-link">Funcionalidades</a>
            <a href="#como-funciona" className="nav-link">Como funciona</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </div>

          {/* CTA */}
          <a href="#download" className="btn-primary" style={{ padding: '8px 22px', fontSize: '0.875rem' }}>
            Baixar o App
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-4" style={{ background: 'linear-gradient(180deg, #f0fafc 0%, #ffffff 100%)' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="trust-badge mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
            O aplicativo para médicos do Brasil 🩺
          </div>

          {/* H1 */}
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.08]"
            style={{ color: '#1C5A90' }}
          >
            A plataforma de{' '}
            <span style={{ color: '#55BCCD' }}>plantões</span>{' '}
            <br className="hidden md:block" />
            médicos do Brasil
          </h1>

          <p className="text-xl mb-10 max-w-2xl leading-relaxed" style={{ color: '#4b5563' }}>
            <em style={{ color: '#1C5A90', fontStyle: 'normal', fontWeight: 600 }}>Conectando a Saúde do Brasil.</em>{' '}
            Oferte, encontre e troque plantões com segurança — comunidade exclusiva de médicos verificados, pagamento garantido e chat privado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#download" className="btn-primary text-center">⬇ Baixar o App</a>
            <a href="#como-funciona" className="btn-secondary text-center">Como funciona</a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 text-sm" style={{ color: '#6b7280' }}>
            <span>✅ Verificação de CRM</span>
            <span style={{ color: '#d1d5db' }}>|</span>
            <span>🔒 Pagamento seguro</span>
            <span style={{ color: '#d1d5db' }}>|</span>
            <span>💬 Chat privado</span>
          </div>

          {/* Hero image */}
          <div className="mt-20 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: '#55BCCD33' }}>
            <img
              src="./doctor_using_the_app.jpg"
              alt="Médico utilizando o aplicativo 97plantões"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section
        className="border-y overflow-hidden py-5"
        style={{ borderColor: '#55BCCD22', background: 'linear-gradient(90deg, #f0fafc 0%, #e8f7fa 50%, #f0fafc 100%)' }}
      >
        <div className="animate-marquee gap-10 items-center">
          {marqueeItems.map((text, i) => (
            <span
              key={i}
              className="whitespace-nowrap flex items-center gap-10 font-semibold text-base"
              style={{ color: '#1C5A90' }}
            >
              {text}
              <span style={{ color: '#55BCCD', fontSize: '0.6rem' }}>●</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section id="como-funciona" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#55BCCD' }}>
              Simples e rápido
            </p>
            <h2 className="text-4xl font-black" style={{ color: '#1C5A90' }}>Como funciona</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
            {/* Connecting line (desktop) */}
            <div
              className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 z-0"
              style={{ background: 'linear-gradient(90deg, #55BCCD44 0%, #55BCCD 50%, #55BCCD44 100%)' }}
            />
            {[
              { n: 1, title: 'Cadastre-se como médico', desc: 'Crie seu perfil. Verificamos seu CRM para manter a comunidade segura e confiável.' },
              { n: 2, title: 'Oferte ou candidate-se', desc: 'Publique o plantão que deseja passar ou encontre plantões disponíveis na sua região.' },
              { n: 3, title: 'Converse pelo chat', desc: 'Alinhe detalhes com o outro profissional em um chat privado e seguro antes de confirmar.' },
              { n: 4, title: 'Pagamento garantido', desc: 'O valor é pago pelo médico que oferta e repassado automaticamente ao médico que assumiu após realizar o plantão.' },
            ].map(s => <div key={s.n} className="relative z-10"><StepCard {...s} /></div>)}
          </div>
        </div>
      </section>

      {/* ── Funcionalidades ── */}
      <section
        id="funcionalidades"
        className="py-24 px-4"
        style={{ background: 'linear-gradient(180deg, #f8fcfd 0%, #ffffff 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#55BCCD' }}>
              Tudo que você precisa
            </p>
            <h2 className="text-4xl font-black" style={{ color: '#1C5A90' }}>Funcionalidades</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="✅"
              title="Comunidade verificada"
              desc="Todos os médicos passam por verificação de CRM junto aos respectivos Conselhos. Apenas profissionais devidamente registrados e ativos participam da plataforma."
            />
            <FeatureCard
              icon="📋"
              title="Plantão Avulso & Contrato Fixo"
              desc="Oferte um plantão pontual ou estabeleça um contrato fixo de longo prazo. Flexibilidade total para médicos ofertantes e candidatos."
            />
            <FeatureCard
              icon="🗺"
              title="Mapa interativo"
              desc="Visualize plantões disponíveis no mapa, ordenados por proximidade. Veja valores, datas, horários e número de leitos antes de se candidatar."
            />
            <FeatureCard
              icon="📅"
              title="Agenda integrada"
              desc="Acompanhe todos os seus plantões confirmados em um calendário. Veja o que tem hoje na sua agenda e planeje com antecedência."
            />
            <FeatureCard
              icon="💳"
              title="Pagamento seguro"
              desc="PIX, cartão de crédito (até 6x) ou boleto. O valor fica retido e é repassado ao médico que realizou o plantão apenas após a conclusão."
            />
            <FeatureCard
              icon="💬"
              title="Chat privado"
              desc="Converse com o outro profissional antes e após a confirmação do plantão. As mensagens são privadas, seguras e ficam registradas no app."
            />
          </div>
        </div>
      </section>

      {/* ── Confiança & Comunidade ── */}
      <section className="py-24 px-4" style={{ background: 'linear-gradient(135deg, #1C5A90 0%, #0e3a62 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#55BCCD' }}>
              Segurança em primeiro lugar
            </p>
            <h2 className="text-4xl font-black text-white">Uma comunidade que você pode confiar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: '🛡',
                title: 'CRM Verificado',
                desc: 'Verificamos com rigor se o CRM informado é válido junto aos respectivos órgãos. Apenas médicos ativos participam da plataforma.',
              },
              {
                icon: '🔒',
                title: 'Dados Protegidos',
                desc: 'Suas informações pessoais e de pagamento são protegidas por mecanismos de segurança e criptografia de ponta a ponta.',
              },
              {
                icon: '💰',
                title: 'Pagamento Escrow',
                desc: 'O valor do plantão é retido pela plataforma e repassado somente após a realização do plantão, protegendo ambas as partes.',
              },
              {
                icon: '⭐',
                title: 'Reputação na Plataforma',
                desc: 'O histórico de compromissos cumpridos é registrado. Médicos confiáveis se destacam, promovendo responsabilidade na comunidade.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(85,188,205,0.25)' }}
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#a8d8e8' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: 'Em breve', label: 'Médicos cadastrados' },
              { value: 'Em breve', label: 'Cidades cobertas' },
              { value: 'Em breve', label: 'Plantões realizados' },
              { value: 'Em breve', label: 'Especialidades' },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: '#55BCCD' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video / App overview ── */}
      <section className="py-24 px-4" style={{ background: '#f8fcfd' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#55BCCD' }}>
            Veja em ação
          </p>
          <h2 className="text-4xl font-black mb-4" style={{ color: '#1C5A90' }}>O app em detalhe</h2>
          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: '#6b7280' }}>
            Veja como é simples ofertar, encontrar e confirmar plantões médicos no 97plantões.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: '#55BCCD33' }}>
            <video
              className="w-full h-auto"
              controls
              playsInline
              poster="./doctor_using_the_app.jpg"
            >
              <source src="./NoveSeteVideo.mp4" type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section id="depoimentos" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#55BCCD' }}>
              Comunidade
            </p>
            <h2 className="text-4xl font-black" style={{ color: '#1C5A90' }}>O que os médicos dizem</h2>
            <p className="mt-3 text-base" style={{ color: '#6b7280' }}>
              Depoimentos em breve — lançamento chegando! 🚀
            </p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { role: 'Clínico Geral', city: 'São Paulo, SP', text: 'Finalmente uma plataforma séria para médicos. A verificação de CRM transmite muita segurança na hora de passar um plantão.' },
              { role: 'Pediatra', city: 'Rio de Janeiro, RJ', text: 'Encontrar plantões na minha especialidade ficou muito mais fácil. O mapa interativo é incrível para encontrar hospitais próximos.' },
              { role: 'Emergencista', city: 'Belo Horizonte, MG', text: 'O pagamento garantido resolveu o maior problema da passagem de plantão. Não preciso mais me preocupar com calotes.' },
              { role: 'Intensivista', city: 'Curitiba, PR', text: 'O chat com o médico que vai assumir o plantão é essencial para alinhar detalhes. Simples e privado.' },
              { role: 'Radiologista', city: 'Porto Alegre, RS', text: 'Consegui um contrato fixo pelo aplicativo. A funcionalidade de Contrato Fixo é diferencial que não vi em nenhuma outra plataforma.' },
              { role: 'Clínica Médica', city: 'Fortaleza, CE', text: 'A agenda integrada me ajuda a planejar mês inteiro com antecedência. Visualizo tudo num só lugar.' },
            ].map((t, i) => (
              <div
                key={i}
                className="break-inside-avoid p-7 rounded-2xl border"
                style={{ background: '#f8fcfd', borderColor: '#55BCCD22' }}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: '#f59e0b' }}>★</span>)}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#374151' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #55BCCD 0%, #1C5A90 100%)' }}
                  >
                    Dr
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#1C5A90' }}>Dr(a). — {t.role}</div>
                    <div className="text-xs" style={{ color: '#9ca3af' }}>{t.city} · Usuário verificado</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-4" style={{ background: '#f8fcfd' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#55BCCD' }}>
              Dúvidas?
            </p>
            <h2 className="text-4xl font-black" style={{ color: '#1C5A90' }}>Perguntas Frequentes</h2>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {faqGroups.map(g => (
              <button
                key={g.category}
                onClick={() => setOpenCategory(g.category)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
                style={
                  openCategory === g.category
                    ? { background: 'linear-gradient(135deg, #55BCCD 0%, #1C5A90 100%)', color: 'white', border: 'none' }
                    : { background: 'white', color: '#1C5A90', border: '1.5px solid #55BCCD55' }
                }
              >
                {g.category}
              </button>
            ))}
          </div>

          {/* Active FAQ items */}
          {faqGroups.filter(g => g.category === openCategory).map(g => (
            <div key={g.category} className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: '#55BCCD22' }}>
              <div className="border-t" style={{ borderColor: '#f3f4f6' }}>
                {g.items.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section
        id="download"
        className="py-24 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #55BCCD 0%, #1C5A90 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="inline-block bg-white/20 text-white rounded-full px-5 py-2 text-sm font-semibold mb-8">
            Disponível em breve na App Store & Google Play
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Conectando a Saúde do Brasil
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
            Junte-se à comunidade de médicos que estão transformando a forma de trocar plantões no Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1"
              style={{ background: 'white', color: '#1C5A90', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
            >
              <span>🍎</span> App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1"
              style={{ background: 'white', color: '#1C5A90', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
            >
              <span>🤖</span> Google Play
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pt-16 pb-10 border-t px-4" style={{ background: '#0e1c2e', borderColor: '#1C5A90' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <div className="flex items-center gap-3">
              <img src="./logo.jpeg" alt="97plantões logo" className="h-10 w-auto rounded-lg" />
              <div>
                <div className="font-extrabold text-xl" style={{ color: 'white' }}>
                  97<span style={{ color: '#55BCCD' }}>plantões</span>
                </div>
                <div className="text-xs" style={{ color: '#6b7280' }}>Conectando a Saúde do Brasil</div>
              </div>
            </div>
            <div className="flex gap-8 text-sm" style={{ color: '#9ca3af' }}>
              <a href="#" className="hover:text-white transition">Termos de Uso</a>
              <a href="#" className="hover:text-white transition">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition">Suporte</a>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm" style={{ borderColor: '#1C5A9055', color: '#6b7280' }}>
            © {new Date().getFullYear()} 97plantões. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
