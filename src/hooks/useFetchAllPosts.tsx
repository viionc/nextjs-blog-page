import API, {Post, Status} from "@/lib/apiUtil";
import {useEffect, useState} from "react";

const useFetchAllPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [status, setStatus] = useState<Status>("loading");

    const removePostLocally = (postId: string) => {
        setPosts((prev) => prev.filter((post) => post.postId !== postId));
    };

    useEffect(() => {
        const fetchdata = async () => {
            setStatus("loading");
            try {
                const response = await API.getAllPosts();
                if (!response) {
                    setStatus("error");
                    return;
                }
                setPosts(response);

                setStatus("done");
            } catch (error) {
                setStatus("error");
            }
        };
        fetchdata();
    }, []);
    return {posts, status, removePostLocally};
};

export default useFetchAllPosts;
