import AddPostForm from "./addPostForm.component";

const PostModal = ({
    toggler,
    onTogglerPost,
    value,
    status,
    onSubmitPost,
    postEdit,
    addNewPost,
}) => {
    return (
        <div className={`modal ${toggler && "d-block"}`} id="postModal">
            <div className="modal-dialog">
                <div className="modal-content  d-block">
                    <div className="modal-header">
                        <h5 className="modal-title text-center">
                            {status === "edit"
                                ? "Edit Post"
                                : "Create New Post"}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onTogglerPost}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <AddPostForm
                            value={value}
                            status={status}
                            onSubmitPost={onSubmitPost}
                            onTogglerPost={onTogglerPost}
                            postEdit={postEdit}
                            addNewPost={addNewPost}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
