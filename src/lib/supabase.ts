import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// OAuth provider types
export type OAuthProvider = 'github' | 'google';

// Sign in with OAuth (client-side)
export async function signInWithOAuth(provider: OAuthProvider) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) {
    return { success: false as const, error: error.message };
  }

  return { success: true as const, data };
}

// Sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { success: !error, error: error?.message };
}

// Get current user
export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  return user;
}

// Waitlist functions
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

// Check if user email is approved in waitlist
export async function checkWaitlistApproval(email: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('waitlist')
    .select('approved')
    .eq('email', email)
    .single();

  if (error || !data) {
    return false;
  }

  return data.approved === true;
}
