export type ContatoPayload = {
  nome?: string;
  email?: string;
  telefone?: string;
};

export type ValidationResult =
  | { ok: true; data: Required<ContatoPayload> }
  | { ok: false; errors: string[] };

const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefoneRegex = /^[0-9]{8,15}$/;

export function validateContato(payload: ContatoPayload, isCreate = true): ValidationResult {
  const errors: string[] = [];
  const nome = (payload.nome ?? '').trim();
  const email = (payload.email ?? '').trim();
  const telefone = (payload.telefone ?? '').trim();

  if (isCreate) {
    if (!nome) errors.push('Nome é obrigatório.');
    if (!email) errors.push('Email é obrigatório.');
    if (!telefone) errors.push('Telefone é obrigatório.');
  }

  if (nome && !nomeRegex.test(nome)) {
    errors.push('Nome deve conter apenas letras e espaços.');
  }

  if (email && !emailRegex.test(email)) {
    errors.push('E-mail inválido.');
  }

  if (telefone && !telefoneRegex.test(telefone)) {
    errors.push('Telefone deve conter apenas números e ter de 8 a 15 dígitos.');
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data: { nome, email, telefone } };
}
