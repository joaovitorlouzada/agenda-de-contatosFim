'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [showSobre, setShowSobre] = useState(false);

  return (
    <header className="w-full py-3 text-sm relative">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-text-primary" />
          <Link href="/" className="font-semibold hover:underline">
            Agenda de Contatos
          </Link>
        </div>

        <nav className="flex items-center gap-4 relative">
          <span
            className="cursor-pointer hover:underline relative"
            onMouseEnter={() => setShowSobre(true)}
            onMouseLeave={() => setShowSobre(false)}
          >
            Sobre
            {showSobre && (
              <div className="absolute top-6 right-0 w-64 p-3 bg-card border border-border rounded-md shadow-md text-xs text-text-secondary z-50">
                Esta aplicação é um desafio para a vaga de estágio, construída com Next.js 14 e JSON como banco de dados.
              </div>
            )}
          </span>
        </nav>
      </div>
    </header>
  );
}
