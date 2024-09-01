import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import bcrypt from 'bcrypt'; 

export const options: NextAuthOptions = {
  pages: {
    // Uncomment and configure these if you need custom pages
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', 
    // verifyRequest: '/auth/verify-request', 
    // newUser: '/auth/new-user' 
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Example: example@gmail.com' },
        password: { label: 'Password', type: 'password', placeholder: 'Your password' } // Changed type to 'password'
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null; // If no credentials are provided, return null
        }

        try {
          // Query the database for the user with the given email
          const result = await sql`
            SELECT * FROM users 
            WHERE email = ${credentials.email}`;

          // Check if the user exists
          if (result.rows.length === 0) {
            return null; // No user found with that email
          }

          const user = result.rows[0];

          // Compare the provided password with the hashed password in the database
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

          // Check the password (assuming it's plain text here; in reality, hash the password and compare)
          // In a real application, use bcrypt or another hashing library
          if (isPasswordValid) {
            // Return user object with at least the id, name, and email properties
            return {
              id: user.id,
              name: user.name,
              email: user.email,
            };
          } else {
            return null; // Password does not match
          }
        } catch (error) {
          console.error('Error querying database:', error);
          return null; // Handle error, potentially return null
        }
      }
    }),
  ],
  callbacks: {
    async redirect() {
      return '/dashboard';
    }
  }
};
