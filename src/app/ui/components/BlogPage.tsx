"use client";
import {useBlogContext} from "@/app/services/BlogContext";
import React from "react";
import PostCard from "./PostCard";

function BlogPage() {
    const {posts} = useBlogContext();

    if (!posts.length) return <section className="container flex flex-col gap-2">No posts here yet</section>;

    return (
        <section className="container flex justify-center">
            <ul className="flex flex-col gap-2 w-1/3 mt-8">
                {posts.map((post, index) => (
                    <PostCard key={post.postId} post={post} />
                ))}
            </ul>
        </section>
    );
}

export default BlogPage;
