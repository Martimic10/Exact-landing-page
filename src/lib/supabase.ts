import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function addToWaitlist(email: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email, created_at: new Date().toISOString() }])
    .select();

  if (error) {
    // Check if it's a duplicate email error
    if (error.code === '23505') {
      return { success: false, error: 'This email is already on the waitlist!' };
    }
    return { success: false, error: error.message };
  }

  return { success: true, data };
}
