import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import { deleteComment } from "../utils/axios"

function CommentCard({ comment, handleViewClick }){

    const { user } = useContext(UserContext)
    const [isDeleting, setIsDeleting] = useState(false)

    function handleDelete(){
        setIsDeleting(true)
        deleteComment(comment.comment_id)
        .then((response) => {
            if (response.status === 204) {
                alert("Comment deleted")
            }
            setIsDeleting(false);
            handleViewClick(false)
        })
        .catch((error) => {
            setIsDeleting(false)
            console.error(error)
        })
    }
    

    return (
        <>
            <section className="comment-flex-container">
                <div className="flex-left-column">
            <h1 className="comment-author">{comment.author}</h1>
            <h2 className="comment-time">{comment.created_at}</h2>
                </div>
            <p className="comment-body">{comment.body}</p>
            {comment.author === user ? (<button className="delete-comment" onClick={handleDelete}>X</button>) : null}
            </section>
            {isDeleting ? <p>Deleting Comment</p> : null}
            <section className="comment-voted">{comment.votes}</section>
        </>
    )

}

export default CommentCard