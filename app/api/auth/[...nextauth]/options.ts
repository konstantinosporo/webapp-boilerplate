import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
// TODO add CredentialsProvider for custom database authentication

export const options: NextAuthOptions = {
  // provide pages for redirections
  pages: {
    // next auth comes with custom route pages
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  // provide used providers like GitHub, Google etc *check NextAuth for more 
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Example: example@gmail.com' },
        password:{label:'Password', type:'text', placeholder:'Your password'}
      },

      async authorize(credentials) {
        const user = { id: "1", email: 'konstantinosporo@test.com', password: "123456" };

        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user;
        }

        return null;
      }
    }),
  ],
  callbacks: {
    async redirect() {
      return '/dashboard';
    }
  }



}


