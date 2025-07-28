import { NextResponse } from 'next/server';
import { updateContato, deleteContato } from '@/lib/contatos';
import { validateContato } from '@/lib/validators';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();

    // Validação dos dados (parcial)
    const result = validateContato(body, false);
    if (!result.ok) {
      return NextResponse.json({ errors: result.errors }, { status: 400 });
    }

    // Atualiza o contato no Supabase
    const updated = await updateContato(id, result.data);
    if (!updated) {
      return NextResponse.json({ error: 'Contato não encontrado' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (e) {
    console.error('Erro no PUT /contato/:id', e);
    return NextResponse.json({ error: 'Erro ao atualizar contato' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await deleteContato(id);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('Erro no DELETE /contato/:id', e);
    return NextResponse.json({ error: 'Erro ao excluir contato' }, { status: 500 });
  }
}
