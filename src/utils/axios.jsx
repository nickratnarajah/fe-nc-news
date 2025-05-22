import axios from "axios";
const endpoint = "https://nick-nc-news-first-project.onrender.com/api"

export const requestArticles = (topic) => {
    const topicString = topic ? `?topic=${topic}` : ""
    return axios.get(endpoint + "/articles" + topicString)
        .then((response) => {
            return response.data.articles
        })
    }

export const requestArticleById = (article_id) => {
    return axios.get(endpoint + `/articles/${article_id}`)
        .then((response) => {
          return response.data.article
     })
}

export const requestComments = (article_id) => {
    return axios.get(endpoint + `/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments
        })
}

export const sendNewVote = (newVote, article_id) => {
    return axios.patch(endpoint + `/articles/${article_id}`, { inc_votes: newVote })
        .then((response) => {
            return response.data.article
        })
        // need for error handling/display? see how app behaves
}

export const sendNewComment = (newComment, article_id) => {
    return axios.post(endpoint + `/articles/${article_id}/comments`, newComment)
    .then((response) => {
        return response.data.comment
    })
}

export const deleteComment = (comment_id) => {
    return axios.delete(endpoint + `/comments/${comment_id}`)
    .then((response) => {
        return response
    })
}