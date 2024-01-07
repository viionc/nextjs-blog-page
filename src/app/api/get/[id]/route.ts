import prisma from "@/lib/prisma";
import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    try {
        const postId = request.url.split("/").slice(-1)[0];
        if (!prisma) throw new Error("Prisma didn't initialize.");
        const data = await prisma.post.findUnique({where: {postId}});
        return NextResponse.json({data}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
