import { NextRequest, NextResponse } from 'next/server';
import { getUserByToken, checkWaitlistApprovalServer } from '@/lib/supabase-server';

export async function GET(request: NextRequest) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid authorization header' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // Get user by token
    const user = await getUserByToken(token);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Check waitlist approval
    const isApproved = user.email
      ? await checkWaitlistApprovalServer(user.email)
      : false;

    // Return user info
    return NextResponse.json({
      id: user.id,
      email: user.email,
      name: user.user_metadata?.full_name || user.user_metadata?.name,
      avatar_url: user.user_metadata?.avatar_url,
      provider: user.app_metadata?.provider,
      waitlist_approved: isApproved,
      created_at: user.created_at,
    });
  } catch (error) {
    console.error('Me endpoint error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
