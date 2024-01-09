import {Post} from "@/lib/apiUtil";
import React from "react";

function PostContent({post}: {post: Post}) {
    const date = new Date(post.createdAt).toString().split("GMT")[0];

    return (
        <article className="flex flex-col w-1/2 ">
            <div className="gap-2 mb-16 border-b border-zinc-800 p-4 bg-zinc-800 rounded-md">
                <h1 className="text-3xl">{post.title}</h1>
                <h2 className="text-xl">by {post.userName}</h2>
                <h3 className="text-md text-zinc-400">{date}</h3>
                <h3 className="text-md text-zinc-400">{post.category}</h3>
            </div>
            <p className="text-xl whitespace-pre-line bg-zinc-800 rounded-md p-4">{post.text}</p>
        </article>
    );
}

export default PostContent;
