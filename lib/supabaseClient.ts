import { createClient } from '@supabase/supabase-js';

// NÃO coloque valores hardcoded mais aqui, volte para o .env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
