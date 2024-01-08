import {Post} from "@/lib/apiUtil";
import Link from "next/link";
import React from "react";

type PostCardProps = {
    post: Post;
};

function PostCard({post}: PostCardProps) {
    return (
        <Link href={`/posts/${post.postId}`} className="w-full">
            <li className="w-full border border-gray-500 shadow-sm shadow-gray-200 rounded-lg flex flex-col text-white p-2 cursor-pointer bg-zinc-950  hover:hover:scale-105 transition-all">
                <h2 className="text-xl">
                    {post.title} by {post.userName}
                </h2>
                <span className="text-md text-gray-500">{post.category}</span>
            </li>
        </Link>
    );
}

export default PostCard;
