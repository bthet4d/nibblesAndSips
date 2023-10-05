import { createClient } from '@supabase/supabase-js';

export const DB_KEY = import.meta.env.PUBLIC_SUPABASE_KEY;
export const DB_URL = import.meta.env.PUBLIC_SUPABASE_URL;

export const supabase = createClient(
    DB_URL, 
    DB_KEY,
    {
        auth: {
        persistSession: false,
        }
    }
);

