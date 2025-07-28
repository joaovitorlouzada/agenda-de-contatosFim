'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getContatoById, updateContato } from '@/lib/contatos';
import { BackButton } from '@/components/BackButton';

export default function EditarContato() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContato = async () => {
      try {
        const contato = await getContatoById(id);
        if (contato) {
          setNome(contato.nome);
          setEmail(contato.email);
          setTelefone(contato.telefone);
        } else {
          setError('Contato não encontrado.');
        }
      } catch (err) {
        console.error(err);
        setError('Erro ao buscar contato.');
      }
    };
    if (id) fetchContato();
  }, [id]);

  const validate = () => {
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^[0-9]{8,15}$/;

    if (!nomeRegex.test(nome)) return 'Nome deve conter apenas letras e espaços.';
    if (!emailRegex.test(email)) return 'E-mail inválido.';
    if (!telefoneRegex.test(telefone)) return 'Telefone deve conter apenas números e ter de 8 a 15 dígitos.';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await updateContato(id, { nome, email, telefone });
      router.refresh(); // Atualiza os dados na página automaticamente
      router.push('/'); // Opcional: redireciona para a home
    } catch (err) {
      console.error(err);
      setError('Erro ao atualizar contato.');
    }
  };

  return (
    <main>
      <BackButton />
      <h1 className="text-xl font-bold mb-4">Editar contato</h1>
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full bg-card border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-card border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Telefone</label>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full bg-card border border-border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-text-primary hover:text-white transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="border border-border px-4 py-2 rounded-md text-sm font-semibold hover:bg-text-primary hover:text-white transition-colors"
          >
            Salvar alterações
          </button>
        </div>
      </form>
    </main>
  );
}
