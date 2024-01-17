import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function PUT(request: Request) {
    try {
        if (!prisma) throw new Error("Prisma didn't initialize.");

        const body = await request.json();
        if (!body) {
            return NextResponse.json({error: "Provide postId."}, {status: 400});
        }

        const {userId, postId, isLiked} = body;
        if (!isLiked) {
            const userResult = await prisma.user.update({where: {id: userId}, data: {likedPosts: {push: postId}}});
            const postResult = await prisma.post.update({where: {postId}, data: {likes: {increment: 1}}});
            if (!userResult || !postResult) {
                return NextResponse.json({error: "Couldn't update the like counter."}, {status: 400});
            }
            return NextResponse.json({userResult}, {status: 200});
        }

        const user = await prisma.user.findUnique({where: {id: userId}});
        if (!user) {
            return NextResponse.json({error: "Couldn't find user with that id."}, {status: 400});
        }

        const post = user.likedPosts.find((id) => id === postId);
        if (!post) {
            return NextResponse.json({error: "Couldn't find post with that id."}, {status: 400});
        }

        const newLikedPosts = user.likedPosts.filter((id) => id !== postId);
        const userResult = await prisma.user.update({where: {id: userId}, data: {likedPosts: newLikedPosts}});
        const postResult = await prisma.post.update({where: {postId}, data: {likes: {decrement: 1}}});
        if (!userResult || postResult) {
            return NextResponse.json({error: "Couldn't updated liked posts."}, {status: 400});
        }

        return NextResponse.json({userResult}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}
