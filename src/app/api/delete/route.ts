import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function DELETE(request: Request) {
    try {
        if (!prisma) throw new Error("Prisma didn't initialize.");
        const body = await request.json();
        const result = await prisma.post.delete({where: {postId: body.postId}});
        return NextResponse.json({result}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
