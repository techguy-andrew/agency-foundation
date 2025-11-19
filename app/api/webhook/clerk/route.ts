import { NextRequest, NextResponse } from 'next/server'

// POST /api/webhook/clerk - Handle Clerk webhooks
export async function POST(request: NextRequest) {
  // TODO: Implement webhook verification and handling
  // Reference: https://clerk.com/docs/integrations/webhooks
  const body = await request.json()
  return NextResponse.json({ received: true })
}
