import axios from "axios";
const endpoint = "https://nick-nc-news-first-project.onrender.com/api"

const requestArticles = axios.get(endpoint + "/articles")
        .then((response) => {
            console.log(response, "response of api get request")
            return response.data.articles
        })

export default requestArticles