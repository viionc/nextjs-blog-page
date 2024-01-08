import {Post} from "@/lib/apiUtil";
import React from "react";

function PostContent({post}: {post: Post}) {
    return (
        <article className="flex flex-col w-1/2 ">
            <div className="gap-2 mb-20">
                <h1 className="text-2xl">{post.title}</h1>
                <h2 className="text-xl">by {post.userName}</h2>
                <h3 className="text-md text-zinc-500">
                    {post.category} {post.createdAt}
                </h3>
            </div>
            <p className="text-xl whitespace-pre-line">{post.text}</p>
        </article>
    );
}

export default PostContent;
