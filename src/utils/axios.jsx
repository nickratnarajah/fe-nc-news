import axios from "axios";
const endpoint = "https://nick-nc-news-first-project.onrender.com/api"

export const requestArticles = () => {
    return axios.get(endpoint + "/articles")
        .then((response) => {
            console.log(response, "response of api get request")
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