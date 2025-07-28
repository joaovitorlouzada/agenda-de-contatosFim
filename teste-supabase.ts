import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://binpysesamrphvxlfrcm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpbnB5c2VzYW1ycGh2eGxmcmNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MzUwODMsImV4cCI6MjA2OTIxMTA4M30.8Pl5RyFnl_oqQ5C6Zi2UMNoQ8QnEtBe2u7Bq0nHslSw'
);

(async () => {
  const { data, error } = await supabase.from('contatos').select('*');
  console.log('DATA:', data);
  console.log('ERROR:', error);
})();
