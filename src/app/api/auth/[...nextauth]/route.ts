import NextAuth, { RequestInternal } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  providers: [
    // CredentialsProvider({
      
    //   name: 'Credentials',
    
    //   credentials: {
    //     email: { label: "email", type: "email", placeholder: "email" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials, req) {
    //     // You need to provide your own logic here that takes the credentials
    //     // submitted and returns either a object representing a user or value
    //     // that is false/null if the credentials are invalid.
    //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
    //     // You can also use the `req` object to obtain additional parameters
    //     // (i.e., the request IP address)
        
        
    //     const user = await res.json()
  
    //     // If no error and we have user data, return it
    //     if (res.ok && user) {
    //       return user
    //     }
    //     // Return null if user data could not be retrieved
    //     return null
    //   }
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID?process.env.GOOGLE_CLIENT_ID:"",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET?process.env.GOOGLE_CLIENT_SECRET:"",
    })
  ],
  pages: {
    error: "/login",
  },
});
export{handler as GET,handler as POST}