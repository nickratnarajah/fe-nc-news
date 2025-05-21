import { requestComments } from "../utils/axios"
import CommentCard from "./CommentCard"
import { useEffect, useState } from "react";

function CommentList({ article_id, comments, setComments, handleViewClick }){

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        requestComments(article_id).then((comments) => {
            setComments(comments || [])
                setIsLoading(false)
        })
    }, [article_id, setComments])
    
    if (isLoading) return <p>Loading comments...</p>;
    if (!comments || comments.length === 0) return (
        <>
        <h1 className="comments-header">Comments</h1>
        <p>No Comments Yet...</p>
        </>
    )
    
    return (
        <>
         <h1 className="comments-header">Comments</h1>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <CommentCard key={comment.comment_id} comment={comment} handleViewClick={handleViewClick}/>
                ))}
            </ul>
        </>
    )
}



export default CommentList