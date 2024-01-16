import prisma from "@/lib/prisma";
import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    try {
        const postId = request.url.split("/").slice(-1)[0];
        if (!prisma) throw new Error("Prisma didn't initialize.");
        if (!postId) {
            return NextResponse.json({error: "Provide valid post id."}, {status: 404});
        }

        const data = await prisma.post.findUnique({where: {postId}});
        if (data) {
            return NextResponse.json({data}, {status: 200});
        }

        return NextResponse.json({error: "No post with that id."}, {status: 404});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
