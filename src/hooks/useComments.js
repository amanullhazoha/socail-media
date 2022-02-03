import axios from "axios";
import { useEffect, useState } from "react";

import { baseUrl } from "./baseUrl";

const useComments = (postId) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [comments, setComments] = useState([]);

    const getComments = async (id) => {
        try{
            setLoading(true);
            const resolve = await axios.get(baseUrl + `/posts/${id}/comments`)
            setError("");
            setLoading(false);
            setComments(resolve.data);
        } catch(error) {
            setLoading(false);
            setError(error);
        }
    }

    const addNewComment = async (postId, value) => {
        try{
            setLoading(true);
            const resolve = await axios.post(baseUrl +`/posts/${postId}/comments`, value);
            setComments([resolve.data, ...comments]);
            setError("");
            setLoading(false);
        } catch(error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getComments(postId)
    }, [postId])

    return {
        loading,
        error,
        comments,
        addNewComment,
    };
}
 
export default useComments;