import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    console.log(request.url);
    try {
        const result = await sql`SELECT * from posts`;
        const rows = result.rows;
        return NextResponse.json({rows}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
