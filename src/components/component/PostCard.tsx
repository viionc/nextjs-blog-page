"use client";
import {Post, deletePost} from "@/lib/apiUtil";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {redirect} from "next/navigation";
type PostCardProps = {
    post: Post;
    removePost: (postId: string) => void;
};

function PostCard({post, removePost}: PostCardProps) {
    const handleDeletePost = () => {
        deletePost(post.postId);
        removePost(post.postId);
    };

    return (
        <li className="relative flex justify-between w-full border border-gray-500 shadow-sm shadow-gray-200 rounded-lg text-white p-2 cursor-pointer bg-zinc-950  hover:hover:scale-105 transition-all">
            <Link href={`/posts/${post.postId}`} className="w-full">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl">
                        {post.title} by {post.userName}
                    </h2>
                    <span className="text-md text-gray-500">{post.category}</span>
                </div>
            </Link>
            <Image height={32} width={32} className="hover:stroke-white" src="/xmark.svg" alt="Delete post" onClick={handleDeletePost} />
        </li>
    );
}

export default PostCard;
