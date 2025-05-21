import { sendNewComment } from "../utils/axios"
import { useState, useContext } from "react"
import { UserContext } from "./UserContext"

function CommentForm({ onClose, article_id, errorMsg, setErrorMsg, comments, setComments }){

    const [isSubmitting, setIsSubmitting] = useState(false)
    const { user } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const form = e.target
        const newComment = {
            username: user,
            body: form.elements.body.value
        }
        sendNewComment(newComment, article_id)
        .then((comment) => {
            setComments((prevComments) => [comment, ...prevComments])
                setIsSubmitting(false)
                form.reset()
                onClose()
        })
        .catch((error) => {
            setIsSubmitting(false)
            console.error(error)
            setErrorMsg(error.response.data.msg)
        })
    
    }
    if (isSubmitting) return <p>Submitting Comment...</p>;


    return (
            <> 
                <div className="comment-form-wrapper">
                    <h2>Add a Comment</h2>
                    <form className="comment-form" onSubmit= {handleSubmit}>
                        <textarea name="body" placeholder="Write your comment..." rows="5" />
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </form>
                </div>
            </>
  );
};



export default CommentForm