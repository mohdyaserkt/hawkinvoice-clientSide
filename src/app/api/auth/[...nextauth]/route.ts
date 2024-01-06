import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { handleGoogleAuth } from '@/utils/Authentication/handleGoogleAuth';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      id: 'google1',
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GoogleProvider({
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  callbacks: {
    async signIn({ user, account, email, credentials, profile }) {
      let authDetails: any = await handleGoogleAuth(
        user.email as string,
        user.image as string,
        account?.provider == 'google1' ? true : false
      );

      if (authDetails) {
        user.image = authDetails;

        return true;
      } else {
        return false;
      }
    },

  },
});
export { handler as GET, handler as POST };
