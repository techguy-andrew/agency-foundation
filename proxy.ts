import { NextRequest, NextResponse } from 'next/server'

// Proxy runs before every request
// Use this for authentication checks, redirects, etc.
export function proxy(request: NextRequest) {
  // Example: Add custom headers
  const response = NextResponse.next()

  // Example: Redirect logic
  // const isAuthenticated = checkAuth(request)
  // if (!isAuthenticated && request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  return response
}

// Configure which routes to run proxy on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
