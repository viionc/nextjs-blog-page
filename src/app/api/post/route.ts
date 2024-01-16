import prisma from "@/lib/prisma";
import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        if (!prisma) throw new Error("Prisma didn't initialize.");
        const body = await request.json();
        if (!body) {
            return NextResponse.json({error: "Provide all post information."}, {status: 400});
        }
        const result = await prisma.post.create({data: {...body}});
        return NextResponse.json({result}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
