import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google" 
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
     GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET
     }),

     GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET
     }),
     Credentials({
  credentials: {
    email: {
      type: "email",
      label: "Email",
      placeholder: "name@gmail.com",
    },
    password: {
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
    },
  },
})
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.AUTH_FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    }),
  }),

})