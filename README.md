# 📒 Agenda de Contatos

Aplicação web para gerenciamento de contatos desenvolvida com *Next.js 14 (App Router), **TypeScript* e *Tailwind CSS*.  
A persistência de dados é feita com *Supabase (PostgreSQL), e o deploy foi realizado na **Vercel*.

---

## 🚀 Tecnologias Utilizadas

- *Next.js 14.2.7 (App Router)* – Framework React com renderização híbrida (SSR e SSG).
- *TypeScript* – Tipagem estática para maior segurança no código.
- *Tailwind CSS* – Framework de estilos utilitários para criação rápida de layouts.
- *Supabase* – Banco de dados PostgreSQL com APIs prontas e autenticação.
- *Vercel* – Plataforma de hospedagem otimizada para projetos Next.js.
- *Lucide-react* – Ícones leves e modernos.
- *ESLint* – Análise estática do código para boas práticas.

---

## 📦 Funcionalidades

- *CRUD Completo*: Listar, criar, editar e excluir contatos.
- *Validação de Formulários*:  
  - Nome: apenas letras e espaços.  
  - E-mail: formato válido.  
  - Telefone: apenas números (8 a 15 dígitos).  
- *Interface responsiva* baseada no design do [Figma](https://www.figma.com/community/file/1408455704705137276/mini-projeto-siga-seu-atleta-app-next-js-fullstack).
- *Navbar minimalista* com tooltip "Sobre".
- *Integração com Supabase* para persistência real.
- *Deploy automático via Vercel*.

---

## 🔧 Como Rodar Localmente

### *Pré-requisitos*
- *Node.js 18+* (versão LTS recomendada)
- *npm* ou *yarn*
- Conta no [Supabase](https://supabase.com/) (para configurar suas variáveis de ambiente).

### *Passos*

1. *Clone o repositório:*
   bash
   git clone https://github.com/SEU-USUARIO/agenda-de-contatos.git
   cd agenda-de-contatos

2. **Instale as dependências:**
   bash
   npm install

3. *Configure as variáveis de ambiente:*
   bash
   NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJECT-URL.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA-CHAVE-ANON

4. **Inicie o servidor local:**
   bash
   npm run dev
O projeto estará disponível em http://localhost:3000.

## 🌐 Deploy

A aplicação está hospedada na Vercel.
Link de acesso: [https://agenda-de-contatos-jet-ten.vercel.app/](https://agenda-de-contatos-fim.vercel.app/)

Processo de deploy:

Código versionado no GitHub.

Integração direta do repositório com a Vercel.

Build automático com next build e deploy contínuo a cada push.

## 📁 Estrutura de Pastas

```plaintext
app
 ├─ page.tsx                 # Página inicial (lista de contatos)
 └─ contato
     ├─ novo
     │   └─ page.tsx         # Página para criar contato
     ├─ [id]
     │   └─ page.tsx         # Página de detalhes do contato
     └─ [id]
         └─ editar
             └─ page.tsx     # Página para editar contato
components
 ├─ Navbar.tsx               # Navbar minimalista
 └─ BackButton.tsx           # Botão de voltar
lib
 ├─ contatos.ts              # CRUD integrado ao Supabase
 └─ supabaseClient.ts        # Configuração do cliente Supabase
