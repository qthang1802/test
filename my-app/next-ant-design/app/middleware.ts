import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('authToken');

  if (!authToken && request.nextUrl.pathname !== '/login') {
    // Redirect unauthenticated users to /login
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (authToken && request.nextUrl.pathname === '/') {
    // Redirect authenticated users from / to /home
    const homeUrl = new URL('/home', request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next(); // Allow the request to proceed
}

export const config = {
  matcher: ['/', '/home/:path*', '/dashboard/:path*'], // Protect these routes
};