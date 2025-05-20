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

