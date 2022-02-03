import axios from "axios";
import { useEffect, useState } from "react";

import { baseUrl } from "./baseUrl";

const usePosts = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(""); 
    const [posts, setPosts] = useState([]);
    
    const getPosts = async () => {
        try{
            setLoading(true);
            const resolve = await axios.get(baseUrl + '/posts');
            setError("");
            setLoading(false);
            setPosts(resolve.data);
        } catch(error) {
            setLoading(false);
            setError(error)
        }
    }

    useEffect(() => {
        getPosts();
    },[])

    const addNewPost = async (value, userId) => {
        const newValue = {...value};
        newValue.id = Math.random();
        newValue.userId = userId;

        try{
            setLoading(true);
            const resolve = await axios.post(baseUrl + `/posts`, newValue);
            setError("");
            setPosts([resolve.data, ...posts]);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    const postEdit = async (value, postId) => {
        const allPosts = [...posts];
        const findPost = allPosts.find(post => post.id === postId);
        findPost.title = value.title;
        findPost.body = value.body;

        try{
            setLoading(true);
            await axios.put(baseUrl + `/posts/${postId}`, findPost);
            setPosts(allPosts);
            setError("");
            setLoading(false);
        } catch(error) {
            setError(error);
            setLoading(false);
        }
    }

    const removePost = async (postId) => {
        try{
            const resolve = await axios.delete(baseUrl + `/posts/${postId}`);
            if(resolve.status === 200) {
                const remainderposts = posts.filter(post => post.id !== postId)
                setPosts(remainderposts);
            }
        } catch (error) {
            setError(error);
        }
    }


    return {
        loading,
        error,
        posts,
        addNewPost,
        postEdit,
        removePost,
    };
}
 
export default usePosts;