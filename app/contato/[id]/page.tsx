'use client';

import { useEffect, useState, useTransition } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getContatoById, Contato } from '@/lib/contatos';
import { BackButton } from '@/components/BackButton';
import { excluirContato } from '@/app/actions/delete-contato';
import Link from 'next/link';

export default function DetalhesContato() {
  const { id } = useParams();
  const router = useRouter();
  const [contato, setContato] = useState<Contato | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchContato = async () => {
      const data = await getContatoById(id as string);
      setContato(data);
    };

    if (id) fetchContato();
  }, [id]);

  const handleDelete = async () => {
    startTransition(async () => {
      try {
        await excluirContato(id as string);  // espera a exclusão
        router.refresh();                     // atualiza a página automaticamente
        router.push('/');                     // redireciona para a lista de contatos
      } catch (error) {
        console.error('Erro ao deletar contato:', error);
      }
    });
  };

  if (!contato) return <p>Carregando contato...</p>;

  return (
    <main>
      <BackButton />
      <h1 className="text-xl font-bold mb-6">Detalhes do contato</h1>

      <div className="bg-card border border-border rounded-md p-4 max-w-md mb-6">
        <p className="text-base font-bold mb-1">{contato.nome}</p>
        <p className="text-sm text-text-secondary">{contato.email}</p>
        <p className="text-sm text-text-secondary">{contato.telefone}</p>
      </div>

      <div className="flex gap-3">
        <Link
          href={`/contato/${contato.id}/editar`}
          className="border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-text-primary hover:text-white transition-colors"
        >
          Editar
        </Link>

        <button
          onClick={handleDelete}
          disabled={isPending}
          className="border border-red-600 text-red-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 hover:text-white transition-colors"
        >
          {isPending ? 'Excluindo...' : 'Deletar'}
        </button>
      </div>
    </main>
  );
}
