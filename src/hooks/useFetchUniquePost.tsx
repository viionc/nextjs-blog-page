import API, {Status} from "@/lib/apiUtil";
import {usePostDataContext} from "@/services/PostDataContext";
import {Post} from "@prisma/client";
import {useEffect, useState} from "react";

const useFetchUniquePosts = (postId: string) => {
    const [post, setPost] = useState<Post | null>(null);
    const [status, setStatus] = useState<Status>("loading");
    const {getPostById} = usePostDataContext();

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

        const _post = getPostById(postId);

        if (_post) {
            setPost(_post);
            setStatus("done");
        } else {
            fetchdata();
        }
    }, [postId]);

    return {post, status};
};

export default useFetchUniquePosts;
