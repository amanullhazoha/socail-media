const Comments = ({ comments }) => {
    return (
        <>
            {comments.map(comment => (
                <div className="comment" key={comment.id}>
                    <b>{comment.email}</b>
                    <p>{comment.body}</p>
                </div>
            ))}
        </>
    );
}
 
export default Comments;