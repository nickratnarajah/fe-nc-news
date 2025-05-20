function CommentCard({ comment }){

    return (
        <>
            <section className="comment-flex-container">
                <div className="flex-left-column">
            <h1 className="comment-author">{comment.author}</h1>
            <h2 className="comment-time">{comment.created_at}</h2>
                </div>
            <p className="comment-body">{comment.body}</p>
            </section>
            <section className="comment-voted">{comment.votes}</section>
        </>
    )

}

export default CommentCard