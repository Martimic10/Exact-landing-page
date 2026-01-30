import { createClient } from '@supabase/supabase-js';

// Create a server-side Supabase client for route handlers
export function createServerSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  );
}

// Exchange authorization code for session
export async function exchangeCodeForSession(code: string) {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return { success: false as const, error: error.message };
  }

  return { success: true as const, session: data.session, user: data.user };
}

// Get user by access token
export async function getUserByToken(accessToken: string) {
  const supabase = createServerSupabaseClient();

  const { data: { user }, error } = await supabase.auth.getUser(accessToken);

  if (error || !user) {
    return null;
  }

  return user;
}

// Check waitlist approval (server-side)
export async function checkWaitlistApprovalServer(email: string): Promise<boolean> {
  const supabase = createServerSupabaseClient();

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
