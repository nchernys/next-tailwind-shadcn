// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project's details
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
