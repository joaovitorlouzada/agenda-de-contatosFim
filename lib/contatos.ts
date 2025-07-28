import { supabase } from './supabaseClient';

export type Contato = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
};

// 🔍 Função para listar todos os contatos
export async function getContatos(): Promise<Contato[]> {
  const { data, error } = await supabase
    .from('contatos')
    .select('*')
    .order('nome');

  if (error) {
    console.error('Erro ao buscar contatos:', error.message, error.details); // debug
    return [];
  }

  console.log('Contatos recebidos do Supabase:', data); // debug
  return data || [];

  console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('SUPABASE_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.slice(0, 8) + '...');

}

// 🔍 Função para buscar um único contato
export async function getContatoById(id: string): Promise<Contato | null> {
  const { data, error } = await supabase
    .from('contatos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(`Erro ao buscar contato com id ${id}:`, error.message);
    return null;
  }

  return data;
}

// ✅ Inserir novo contato
export async function createContato(contato: Omit<Contato, 'id'>): Promise<Contato> {
  const { data, error } = await supabase
    .from('contatos')
    .insert([contato])
    .select()
    .single();

  if (error) {
    console.error('Erro ao inserir contato:', error.message, error.details); // debug
    throw error;
  }

  return data;
}

// 🛠️ Atualizar contato existente
export async function updateContato(id: string, contato: Partial<Contato>): Promise<Contato> {
  const { data, error } = await supabase
    .from('contatos')
    .update(contato)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(`Erro ao atualizar contato com id ${id}:`, error.message);
    throw error;
  }

  return data;
}

// ❌ Deletar contato
export async function deleteContato(id: string): Promise<void> {
  const { error } = await supabase.from('contatos').delete().eq('id', id);

  if (error) {
    console.error(`Erro ao deletar contato com id ${id}:`, error.message);
    throw error;
  }
}
