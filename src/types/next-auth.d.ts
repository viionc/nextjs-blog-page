import {Role} from "@prisma/client";
import NextAuth, {DefaultSession} from "next-auth";
import {type DefaultSession, type DefaultUser} from "next-auth";

export type SessionUser = {
    id: string;
    role: Role;
} & DefaultSession["user"];

declare module "next-auth" {
    interface Session {
        user: SessionUser;
    }
}
