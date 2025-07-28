import { NextResponse } from 'next/server';
import { getContatos, createContato } from '@/lib/contatos';
import { v4 as uuidv4 } from 'uuid';
import { validateContato } from '@/lib/validators';

export async function GET() {
  try {
    const contatos = await getContatos();
    return NextResponse.json(contatos);
  } catch (e) {
    console.error('Erro no GET /contatos:', e);
    return NextResponse.json({ error: 'Erro ao buscar contatos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateContato(body, true);

    if (!result.ok) {
      return NextResponse.json({ errors: result.errors }, { status: 400 });
    }

    // Cria novo contato com UUID
    const novoContato = {
      id: uuidv4(),
      ...result.data,
    };

    // Insere no Supabase via createContato (que já insere e retorna o contato)
    const contatoCriado = await createContato(novoContato);

    return NextResponse.json(contatoCriado, { status: 201 });
  } catch (e) {
    console.error('Erro no POST /contatos:', e);
    return NextResponse.json({ error: 'Erro ao criar contato' }, { status: 500 });
  }
}
