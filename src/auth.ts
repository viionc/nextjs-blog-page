import type {NextAuthConfig} from "next-auth";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "./lib/prisma";

export const authConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [GitHub, Google],
    callbacks: {
        async session({session, user}) {
            session.user.id = user.id;
            return session;
        },
    },
} satisfies NextAuthConfig;

export const {handlers, auth, signOut} = NextAuth(authConfig);
