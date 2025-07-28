'use server';

import { deleteContato } from '@/lib/contatos';
import { redirect } from 'next/navigation';

export async function excluirContato(id: string) {
  await deleteContato(id);
  redirect('/');
}
