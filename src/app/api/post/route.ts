import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    let _postid = "";
    try {
        const body = await request.json();
        const {userId: userid, postId: postid, category, createdAt, title, text} = body;
        const result = await sql`INSERT INTO posts VALUES (${userid}, ${postid}, ${title}, ${category}, ${text}, ${createdAt})`;
        return NextResponse.json({result}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
