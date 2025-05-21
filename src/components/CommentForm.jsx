import { sendNewComment } from "../utils/axios"
import { useState } from "react"

function CommentForm({ onClose, article_id, errorMsg, setErrorMsg, comments, setComments }){

    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const form = e.target
        const newComment = {
            username: form.elements.username.value,
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
                        <input name="username" type="text" placeholder="Username" />
                        <br />
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </form>
                </div>
            </>
  );
};

//Notes for NC reviewer - I'm aware of the limitation when getting a user to type in their username, 
// which must be a valid existing one in the database for the funtion to work. I've not yet built the
// functionality for logging in, but when this is built I should be able to refactor the code where I 
// can set the username value based on user context 

export default CommentForm