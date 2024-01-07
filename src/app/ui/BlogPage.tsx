"use client";
import {Post} from "@/app/services/BlogContext";
import React, {useEffect, useState} from "react";
import PostCard from "./components/PostCard";
import Spinner from "./components/Spinner";
import {Status, getAllPosts} from "@/lib/apiUtil";

function BlogPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [status, setStatus] = useState<Status>("loading");

    useEffect(() => {
        setStatus("loading");
        getAllPosts()
            .then((data) => {
                setPosts(data);
                setStatus("done");
            })
            .catch(() => setStatus("error"));
    }, []);

    return (
        <section className="container flex justify-center">
            <ul className="flex flex-col gap-2 w-1/3 mt-8 items-center">
                {status === "loading" && <Spinner />}
                {status === "done" && posts.map((post: Post) => <PostCard key={post.postId} post={post} />)}
                {status === "error" && <p>Couldnt load data</p>}
            </ul>
        </section>
    );
}

export default BlogPage;
