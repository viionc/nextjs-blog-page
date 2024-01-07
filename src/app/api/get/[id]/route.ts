import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    try {
        const postid = request.url.split("/").slice(-1)[0];
        const result = await sql`SELECT * from posts where postid=${postid}`;
        const row = result.rows[0];
        return NextResponse.json({row}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
