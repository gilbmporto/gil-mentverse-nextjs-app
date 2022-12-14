import NextAuth from "next-auth"
//import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  secret: 'Hell0Th3r3',
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({session, token, user }) {
      session.user.username = session.user.name.split(' ').join('').toLowerCase();
      session.user.uid = token.sub;
      return session;
    }
  }
}

export default NextAuth(authOptions)