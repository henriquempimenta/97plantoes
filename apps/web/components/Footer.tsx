import React from 'react';
import { Headphones } from 'lucide-react';

export default function Footer() {
  return (
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
          <div className="flex items-center gap-8 text-sm" style={{ color: '#9ca3af' }}>
            <a href="?page=termos-de-uso" className="hover:text-white transition">Termos de Uso</a>
            <a href="?page=termos-de-uso#privacidade" className="hover:text-white transition">Política de Privacidade</a>
            <a href="?page=suporte" className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#32B3C5] text-[#32B3C5] hover:bg-[#32B3C5]/10 hover:text-[#32B3C5] transition font-medium">
              <Headphones size={18} />
              Suporte
            </a>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm" style={{ borderColor: '#1C5A9055', color: '#6b7280' }}>
          © {new Date().getFullYear()} 97plantões. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
