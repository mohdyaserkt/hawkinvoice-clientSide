import NextAuth, { RequestInternal } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginApi } from "../../user/userAuth";
import { ApiError } from "next/dist/server/api-utils";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
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
        let user = await loginApi({ email, password })
          .then(({ data }: any) => {
            if (data) {
              localStorage.setItem("user", JSON.stringify(data.user));
              userdata = data.user;
            }
          })
          .catch((err: ApiError) => {
            console.log(err.message);
            error = err;
            alert(err);
          });
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
  pages: {
    error: "/login",
    signIn: "/login",
    verifyRequest: "/verification",
    newUser: "/getstarted",
  },
});
export { handler as GET, handler as POST };
