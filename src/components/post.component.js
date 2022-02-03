import { useRef } from "react";
import { useAuth } from "../contexts/authContext";

import useComments from "../hooks/useComments";
import Comments from "./comments.component";
import Button from "./common/button.component";
import CommentForm from "./common/commentForm.component";

const Post = ({ post, onPostEdit, onPostDelete }) => {
    const { currentUser } = useAuth();
    const { comments, addNewComment } = useComments(post.id);
    const commentRef = useRef();

    const handleComment = () => {
        commentRef.current.style.display = "block";
    }
    
    const commentSubmit = (value) => {
        const comment = {
            postId: post.id,
            id: Math.random(),
            name: Math.random(),
            email: currentUser.email,
            body: value.comment,
        }
        addNewComment(post.id, comment);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>

                <div className="d-flex justify-content-between">
                    <Button type="button" onClick={() => handleComment(post.id)}>
                        <i className="fas fa-comment-alt" />
                        <span>{comments.length}</span>
                    </Button>

                    {currentUser?.id === post.userId && (
                        <>
                            <Button type="button" onClick={() => onPostEdit(post)}>
                            <i className="fas fa-user-edit" />
                            </Button>

                            <Button type="button" onClick={() => onPostDelete(post.id)}>
                                <i className="far fa-trash-alt" />
                            </Button>
                        </>
                    )}
                </div>
                <div className="hide" style={{display: "none"}} ref={commentRef}>
                    <hr />
                    <CommentForm commentSubmit={commentSubmit} />
                    <Comments comments={comments} />
                </div>
            </div>
        </div>
    );
}
 
export default Post;