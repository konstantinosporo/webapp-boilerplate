// this line enables middleware checking in all routes adjust with matchers to enable in custom pages
 
export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    // Apply middleware to all routes except /signup
    '/((?!signup).*)',
    // Add other routes if needed, e.g., '/protected-route'
    '/dashboard/:path*',
    '/profile/:path*',
  ],
};