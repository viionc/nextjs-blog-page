import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function PUT(request: Request) {
    try {
        if (!prisma) throw new Error("Prisma didn't initialize.");
        const body = await request.json();
        const result = await prisma.user.update({where: {id: body.userId}, data: {role: body.newRole}});
        return NextResponse.json({result}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
