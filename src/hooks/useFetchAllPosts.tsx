import API, {Post, Status} from "@/lib/apiUtil";
import {usePostDataContext} from "@/services/PostDataContext";
import {useEffect, useState} from "react";

const useFetchAllPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [status, setStatus] = useState<Status>("loading");
    const {updatePosts} = usePostDataContext();

    useEffect(() => {
        const fetchdata = async () => {
            setStatus("loading");
            try {
                const response = await API.getAllPosts();
                if (!response) {
                    setStatus("error");
                    return;
                }
                updatePosts(response);

                setStatus("done");
            } catch (error) {
                setStatus("error");
            }
        };
        fetchdata();
    }, []);
    return {status};
};

export default useFetchAllPosts;
