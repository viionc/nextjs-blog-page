"use client";
import PostCard from "./PostCard";
import Spinner from "./Spinner";
import {Post} from "@/lib/apiUtil";
import useFetchAllPosts from "@/hooks/useFetchAllPosts";
import {SessionUser} from "@/types/next-auth";
import {usePostDataContext} from "@/services/PostDataContext";

type BlogContentProps = {
    user: SessionUser | undefined;
};

function BlogContent({user}: BlogContentProps) {
    const {status} = useFetchAllPosts();
    const {filteredPosts, removePostLocally} = usePostDataContext();

    return (
        <section className="container flex justify-center">
            <ul className="flex flex-col gap-2 w-1/3 mt-8 items-center">
                {status === "loading" && <Spinner />}
                {status === "done" ? (
                    filteredPosts.length > 0 ? (
                        filteredPosts.map((post: Post) => (
                            <PostCard key={post.postId} post={post} removePostLocally={removePostLocally} user={user} />
                        ))
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
