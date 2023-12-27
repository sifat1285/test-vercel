import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
import GoogleProvider from 'next-auth/providers/google';

export const { handlers: {
    GET,
    POST
}, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
        clientId: process.env.OAUTH_CLIENT_KEY,
        clientSecret: process.env.OAUTH_CLIENT_SECRET
    })
  ]
});