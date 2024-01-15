"use client";
import API, {Post} from "@/lib/apiUtil";
import Link from "next/link";
import Image from "next/image";
import {toast} from "../ui/use-toast";
import ReactTimeAgo from "react-time-ago";
import {User} from "next-auth";
import {Role} from "@prisma/client";

export type SessionUser = {
    id: string;
    role: Role;
} & User;

type PostCardProps = {
    post: Post;
    removePostLocally: (postId: string) => void;
    user: SessionUser | undefined;
};

function PostCard({post, removePostLocally, user}: PostCardProps) {
    const handleDeletePost = async () => {
        try {
            const response = await API.deletePost(post.postId);
            removePostLocally(post.postId);
        } catch {
            toast({
                description: "Couldn't delete post.",
                variant: "destructive",
            });
        }
    };

    const isUsersPost = user && (user.id === post.userId || user.role === "ADMIN") ? true : false;

    return (
        <li className="relative items-center flex justify-between w-full border border-gray-500 shadow-sm shadow-gray-200 rounded-lg text-white p-2 cursor-pointer bg-zinc-950  hover:hover:scale-105 transition-all">
            <Link href={`/posts/${post.postId}`} className="w-full">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl">
                        {post.title} by {post.userName}
                    </h2>
                    <span className="text-md text-gray-400">{post.category}</span>
                    <ReactTimeAgo date={new Date(post.createdAt)} locale="en-US" className="text-md text-gray-400" />
                </div>
            </Link>
            {isUsersPost && (
                <Image width={32} height={32} className="hover:stroke-white w-8 h-8" src="/xmark.svg" alt="Delete post" onClick={handleDeletePost} />
            )}
        </li>
    );
}

export default PostCard;
