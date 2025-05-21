import { requestComments } from "../utils/axios"
import CommentCard from "./CommentCard"
import { useEffect, useState } from "react";

function CommentList({ article_id, comments, setComments }){

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        requestComments(article_id).then((comments) => {
            setComments(comments);
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading comments...</p>;

    return (
        <>
         <h1 className="comments-header">Comments</h1>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <CommentCard key={comment.comment_id} comment={comment} />
                ))}
            </ul>
        </>
    )
}



export default CommentList