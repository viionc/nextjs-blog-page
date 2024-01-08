import prisma from "@/lib/prisma";
import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        if (!prisma) throw new Error("Prisma didn't initialize.");
        const body = await request.json();
        console.log(body);
        const result = await prisma.post.create({data: {...body}});
        return NextResponse.json({result}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
