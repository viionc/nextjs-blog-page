import {Post} from "@/lib/apiUtil";
import React from "react";
import TimeAgo from "timeago-react";

function PostContent({post}: {post: Post}) {
    return (
        <article className="flex flex-col w-1/2 ">
            <div className="gap-2 mb-16 border border-zinc-700 p-4 bg-zinc-800 rounded-md shadow-md shadow-zinc-800">
                <h1 className="text-3xl">{post.title}</h1>
                <h2 className="text-xl">by {post.userName}</h2>
                <h3 className="text-md text-zinc-400">
                    <TimeAgo className="text-md text-gray-400" datetime={new Date(post.createdAt)} locale="en_US" />
                </h3>
                <h3 className="text-md text-zinc-400">{post.category}</h3>
            </div>
            <p className="text-xl whitespace-pre-line bg-zinc-800 rounded-md p-4 border border-zinc-700 shadow-md shadow-zinc-800">{post.text}</p>
        </article>
    );
}

export default PostContent;
