"use client";
import Spinner from "@/components/component/Spinner";
import {usePathname} from "next/navigation";
import PostContent from "./PostContent";
import useFetchUniquePosts from "@/hooks/useFetchUniquePost";
import {usePostDataContext} from "@/services/PostDataContext";

function Page() {
    const path = usePathname();
    const postId = path.split("/").slice(-1)[0];

    const {post, status} = useFetchUniquePosts(postId);

    return (
        <main className="flex justify-center w-full py-6">
            {status === "loading" && <Spinner />}
            {status === "done" && post && <PostContent post={post} />}
            {status === "error" && <p>Couldnt load data</p>}
        </main>
    );
}

export default Page;
