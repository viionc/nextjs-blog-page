import API, {Post, Status} from "@/lib/apiUtil";
import {useEffect, useState} from "react";

const useFetchUniquePosts = (postId: string) => {
    const [post, setPost] = useState<Post | null>(null);
    const [status, setStatus] = useState<Status>("loading");

    useEffect(() => {
        const fetchdata = async () => {
            setStatus("loading");
            try {
                const response = await API.getUniquePost(postId);
                if (!response) {
                    setStatus("error");
                    return;
                }
                setPost(response);
                setStatus("done");
            } catch (error) {
                setStatus("error");
            }
        };
        fetchdata();
    }, [postId]);
    return {post, status};
};

export default useFetchUniquePosts;
