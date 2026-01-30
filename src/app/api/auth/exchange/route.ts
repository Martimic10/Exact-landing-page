import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForSession, checkWaitlistApprovalServer } from '@/lib/supabase-server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code } = body;

    if (!code) {
      return NextResponse.json(
        { error: 'Authorization code is required' },
        { status: 400 }
      );
    }

    // Exchange code for session
    const result = await exchangeCodeForSession(code);

    if (!result.success || !result.session || !result.user) {
      return NextResponse.json(
        { error: result.error || 'Failed to exchange code' },
        { status: 401 }
      );
    }

    const { session, user } = result;

    // Check waitlist approval
    const isApproved = user.email
      ? await checkWaitlistApprovalServer(user.email)
      : false;

    if (!isApproved) {
      return NextResponse.json(
        {
          error: 'Not approved',
          waitlisted: true,
          email: user.email
        },
        { status: 403 }
      );
    }

    // Return session info
    return NextResponse.json({
      access_token: session.access_token,
      refresh_token: session.refresh_token,
      expires_at: session.expires_at,
      user: {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.full_name || user.user_metadata?.name,
        avatar_url: user.user_metadata?.avatar_url,
      },
    });
  } catch (error) {
    console.error('Exchange endpoint error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
