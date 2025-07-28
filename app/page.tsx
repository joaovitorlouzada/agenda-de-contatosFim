import Link from 'next/link';
import { getContatos, Contato } from '@/lib/contatos';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

const supabase = createClient(
  'https://binpysesamrphvxlfrcm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpbnB5c2VzYW1ycGh2eGxmcmNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MzUwODMsImV4cCI6MjA2OTIxMTA4M30.8Pl5RyFnl_oqQ5C6Zi2UMNoQ8QnEtBe2u7Bq0nHslSw'
);

export default async function Home() {
  const contatos: Contato[] = await getContatos();

  return (
    <main>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Meus Contatos</h1>
        <Link
          href="/contato/novo"
          className="inline-block border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-text-primary hover:text-white transition-colors"
        >
          + Adicionar Contato
        </Link>
      </div>

      {contatos.length === 0 ? (
        <p className="text-text-secondary">Nenhum contato encontrado.</p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contatos.map((contato) => (
            <li
              key={contato.id}
              className="bg-card border border-border rounded-md p-4 hover:shadow-md transition-shadow duration-200"
            >
              <p className="text-base font-bold mb-1">{contato.nome}</p>
              <p className="text-xs text-text-secondary">{contato.email}</p>
              <p className="text-xs text-text-secondary mb-3">{contato.telefone}</p>
              <Link
                href={`/contato/${contato.id}`}
                className="text-sm font-semibold underline-offset-2 hover:underline"
              >
                Ver detalhes
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
