import { createClient } from '@supabase/supabase-js';
import type { IDBReport } from './schema';

export const supabase = createClient<IDBReport>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
