import { connectDB } from "@/util/database";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

export const authOptions: any = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                if (credentials != null) {
                    let db = (await connectDB).db('row');
                    let user = await db.collection('user').findOne({ email: credentials.email })
                    if (!user) {
                        return null
                    }
                    const pwcheck = await bcrypt.compare(credentials.password, user.password);
                    if (!pwcheck) {
                        return null
                    }
                    return user as any
                } else {
                    return null
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60
    },

    callbacks: {
        jwt: async ({ token, user }: { token: any, user: any }) => {
            if (user) {
                token.user = {}
                token.user.name = user.name;
                token.user.email = user.email;
            }
            return token
        },
        session: async ({ session, token }: { session: any, token: any }) => {
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: '/login'
    },

    secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);