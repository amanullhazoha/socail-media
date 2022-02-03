import usePosts from "../hooks/usePosts";
import Loading from "./common/loading.component";
import Error from "./common/error.component";
import Post from "./post.component";
import AddPostCard from "./addPostCard.component";
import PostModal from "./common/postModal.component";
import { useState } from "react/cjs/react.development";

const Posts = () => {
    const [postToggler, setPostToggler] = useState(false);
    const [editPost, setEditPost] = useState({ title: "", body: "" });
    const [status, setStatus] = useState("");

    const { loading, error, posts, removePost, addNewPost, postEdit } = usePosts();

    const handleToggle = () => {
        setPostToggler(prev => !prev);
        setEditPost({ title: "", body: "" });
    }

    const handleEdit = (post) => {
        setEditPost(post);
        setStatus("edit");
        setPostToggler(prev => !prev);
    };

    const handleDelete = async (postId) => {
        await removePost(postId);
    };

    return (
        <div className="row">
            <div className="col-md-4 m-auto posts">
                {loading && <Loading />}
                {error && <Error error={error} />}
                {!loading && (
                    <>
                        <AddPostCard onTogglePost={handleToggle} />
                        {posts.map((post) => (
                            <Post
                                post={post}
                                onPostEdit={handleEdit}
                                onPostDelete={handleDelete}
                                key={post.id}
                            />
                        ))}
                    </>
                )}
            </div>

            <PostModal
                toggler={postToggler}
                onTogglerPost={handleToggle}
                value={editPost}
                status={status}
                postEdit={postEdit}
                addNewPost={addNewPost}
            />
        </div>
    );
};

export default Posts;
