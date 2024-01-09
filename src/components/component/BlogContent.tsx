"use client";
import PostCard from "./PostCard";
import Spinner from "./Spinner";
import {Post} from "@/lib/apiUtil";
import useFetchAllPosts from "@/hooks/useFetchAllPosts";

type BlogContentProps = {
    userId: string | undefined;
};

function BlogContent({userId}: BlogContentProps) {
    const {posts, status, removePostLocally} = useFetchAllPosts();

    return (
        <section className="container flex justify-center">
            <ul className="flex flex-col gap-2 w-1/3 mt-8 items-center">
                {status === "loading" && <Spinner />}
                {status === "done" ? (
                    posts.length > 0 ? (
                        posts.map((post: Post) => <PostCard key={post.postId} post={post} removePostLocally={removePostLocally} userId={userId} />)
                    ) : (
                        <p>No posts in database. Be first.</p>
                    )
                ) : null}
                {status === "error" && <p>Couldnt load data</p>}
            </ul>
        </section>
    );
}

export default BlogContent;
