import prisma from "@/lib/prisma";
import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    try {
        const postId = request.url.split("/").slice(-1)[0];
        console.log(postId);
        const data = await prisma.post.findUnique({where: {postId}});
        return NextResponse.json({data}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
