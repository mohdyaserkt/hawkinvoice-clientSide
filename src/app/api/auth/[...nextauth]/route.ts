import NextAuth, { RequestInternal } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginApi } from "../../user/userAuth";
import { ApiError } from "next/dist/server/api-utils";
import axiosInstance from "../../axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        let email: string = credentials?.email || "";
        let password: string = credentials?.password || "";
        let userdata;
        let error;
        
        const response = await axiosInstance.post(`/api/tenant/user/login`, { email,password });
        userdata=response.data

        if (userdata) {
          return userdata;
        }
        // Return null if user data could not be retrieved
        return error ? error : null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID
        ? process.env.GOOGLE_CLIENT_ID
        : "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
        ? process.env.GOOGLE_CLIENT_SECRET
        : "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/error",
    signIn: "/login",
    verifyRequest: "/verification",
    newUser: "/getstarted",
  },
});
export { handler as GET, handler as POST };
