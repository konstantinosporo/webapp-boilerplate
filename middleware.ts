// next-auth middleware
export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    // Apply middleware to all routes except /login, /signup, and the home page /
    '/((?!login|signup|).*)',
    // Explicitly include routes that need protection
    '/dashboard/:path*',
    '/profile/:path*',
  ],
};
