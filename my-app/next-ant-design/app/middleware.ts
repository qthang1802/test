import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for an authentication token in cookies
  const authToken = request.cookies.get('authToken');

  // Redirect unauthenticated users to /login
  if (!authToken && request.nextUrl.pathname !== '/login') {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Apply middleware to the root page and other protected routes
export const config = {
  matcher: ['/', '/home/:path*', '/dashboard/:path*', '/profile/:path*'], // Protect these routes
};