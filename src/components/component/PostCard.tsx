"use client";
import API, {Post} from "@/lib/apiUtil";
import Link from "next/link";
import Image from "next/image";
import {toast} from "../ui/use-toast";

type PostCardProps = {
    post: Post;
    removePostLocally: (postId: string) => void;
    userId: string | undefined;
};

function PostCard({post, removePostLocally, userId}: PostCardProps) {
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

    const isUsersPost = userId && userId === post.userId ? true : false;

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
            {isUsersPost && (
                <Image height={32} width={32} className="hover:stroke-white" src="/xmark.svg" alt="Delete post" onClick={handleDeletePost} />
            )}
        </li>
    );
}

export default PostCard;
