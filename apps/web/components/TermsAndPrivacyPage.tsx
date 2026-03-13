import React, { useEffect } from 'react';

export default function TermsAndPrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-gray-800 font-sans selection:bg-cyan-100 selection:text-cyan-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .btn-primary {
          background: linear-gradient(135deg, #32B3C5 0%, #0D8F9A 100%);
          color: white;
          font-weight: 600;
          padding: 8px 22px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(50, 179, 197, 0.3);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(50, 179, 197, 0.4);
        }
        .nav-link {
          color: #4b5563;
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #0A2540; }
        
        .content-section h1 {
          font-size: 2.5rem;
          font-weight: 900;
          color: #0A2540;
          margin-bottom: 2rem;
        }
        .content-section h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1C5A90;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .content-section p {
          font-size: 1rem;
          line-height: 1.7;
          color: #4b5563;
          margin-bottom: 1rem;
        }
        .content-section ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: #4b5563;
        }
        .content-section li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', borderColor: '#e5e7eb' }}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5" style={{ textDecoration: 'none' }}>
            <img src="./logo.jpeg" alt="97plantões logo" className="h-9 w-auto rounded-lg" />
            <span className="font-extrabold text-xl tracking-tight" style={{ color: '#1C5A90' }}>
              97<span style={{ color: '#55BCCD' }}>plantões</span>
            </span>
          </a>

          {/* Links */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/" className="nav-link">Voltar para a Home</a>
          </div>

          {/* CTA */}
          <a href="/#download" className="btn-primary">
            Baixar o App
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4 bg-[#f8fcfd] min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 content-section">
          <h1>Termos de Uso e Política de Privacidade</h1>
          
          <h2 id="termos">Termos de Uso</h2>

          <h2>1. Natureza da Plataforma</h2>
          <p>
            O 97plantões é uma plataforma digital destinada a conectar profissionais médicos interessados em ofertar ou assumir plantões.
          </p>
          <p>
            A plataforma atua exclusivamente como intermediadora tecnológica, permitindo que usuários publiquem, visualizem e aceitem oportunidades de plantão.
          </p>
          <ul>
            <li>não é hospital, clínica ou instituição de saúde</li>
            <li>não presta serviços médicos</li>
            <li>não participa da execução dos plantões</li>
            <li>não supervisiona a atuação profissional dos usuários</li>
          </ul>
          <p>
            Toda responsabilidade pela prestação de serviços médicos é exclusivamente dos profissionais envolvidos.
          </p>

          <h2>2. Cadastro e Uso da Conta</h2>
          <p>
            Para utilizar a plataforma, o usuário deverá fornecer informações verdadeiras, completas e atualizadas. 
            O usuário é responsável por manter seus dados profissionais corretos, preservar a confidencialidade de sua conta e responder por todas as atividades realizadas por meio dela. 
            O 97plantões poderá suspender ou encerrar contas que violem estes Termos.
          </p>

          <h2>3. Responsabilidade sobre Plantões</h2>
          <p>
            Ao aceitar um plantão por meio da plataforma, o profissional declara estar apto e disponível para cumprir a escala acordada.
          </p>
          <p>
            O profissional que aceita o plantão assume integral responsabilidade pelo comparecimento, cumprimento do horário e prestação adequada do serviço médico.
          </p>

          <h2>4. Pagamentos e Intermediação Financeira</h2>
          <p>
            Os pagamentos realizados dentro da plataforma são processados por provedor de pagamento terceirizado.
          </p>
          <p>
            O 97plantões utiliza infraestrutura de pagamento operada pela Vindi, responsável pelo processamento das transações e repasse de valores.
          </p>
          <ul>
            <li>não armazena dados completos de cartão de crédito</li>
            <li>não possui acesso a dados financeiros sensíveis</li>
            <li>não atua como instituição financeira</li>
            <li>não realiza custódia direta de valores</li>
          </ul>
          <p>
            As informações financeiras são tratadas exclusivamente pelo provedor de pagamento.
          </p>

          <h2>5. Prazos de Repasse</h2>
          <p>
            Os repasses financeiros seguem prazos operacionais definidos pelo provedor de pagamento e pelo sistema bancário.
          </p>
          <p>
            Podem ocorrer variações decorrentes de processamento bancário, validações antifraude ou indisponibilidades técnicas.
          </p>

          <h2>6. Falta ou Não Comparecimento</h2>
          <p>
            Caso o profissional que aceitou o plantão não compareça ou não cumpra a escala acordada, a responsabilidade recai exclusivamente sobre esse profissional.
          </p>
          <p>
            A plataforma poderá registrar avaliações ou aplicar medidas administrativas.
          </p>

          <h2>7. Cancelamentos e Disputas</h2>
          <p>
            Cancelamentos ou divergências devem ser tratados diretamente entre as partes envolvidas. O 97plantões poderá atuar apenas como canal de suporte.
          </p>

          <h2>8. Ausência de Vínculo Empregatício</h2>
          <p>
            A utilização da plataforma não cria vínculo empregatício, societário ou de prestação de serviços entre o 97plantões e os usuários.
          </p>
          <p>
            Os profissionais atuam de forma independente.
          </p>

          <h2>9. Limitação de Responsabilidade</h2>
          <p>
            O 97plantões não se responsabiliza por execução ou qualidade do serviço médico prestado, descumprimento de plantões, atrasos, cancelamentos ou disputas entre usuários.
          </p>
          <p>
            A plataforma atua apenas como meio tecnológico de intermediação.
          </p>

          <h2>10. Legislação e Foro</h2>
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil.
          </p>
          <p>
            Fica eleito o foro da comarca da sede da empresa para dirimir eventuais controvérsias.
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 id="privacidade">Política de Privacidade</h2>
          
          <h2>1. Dados Coletados</h2>
          <p>
            Podemos coletar dados como nome, e-mail, telefone, informações profissionais e dados necessários para funcionamento da plataforma.
          </p>

          <h2>2. Uso das Informações</h2>
          <p>
            Os dados são utilizados para permitir o funcionamento da plataforma, comunicação com usuários, segurança da conta e melhorias do serviço.
          </p>

          <h2>3. Pagamentos</h2>
          <p>
            As transações financeiras são processadas por provedores de pagamento terceirizados, incluindo a Vindi.
          </p>
          <p>
            Dados financeiros como cartões ou informações bancárias são processados e armazenados diretamente por esses provedores.
          </p>

          <h2>4. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger os dados dos usuários.
          </p>

          <h2>5. Direitos do Usuário (LGPD)</h2>
          <p>
            Os usuários podem solicitar acesso, correção ou exclusão de seus dados pessoais, conforme previsto na Lei Geral de Proteção de Dados.
          </p>

          <h2>6. Contato</h2>
          <p>
            Em caso de dúvidas sobre estes termos ou sobre privacidade, o usuário poderá entrar em contato com o suporte da plataforma.
          </p>
        </div>
      </main>

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
              <a href="/termos-de-uso" className="hover:text-white transition">Termos de Uso</a>
              <a href="/termos-de-uso#privacidade" className="hover:text-white transition">Política de Privacidade</a>
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
