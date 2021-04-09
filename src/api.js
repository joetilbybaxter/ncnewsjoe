import axios from "axios"

const request = axios.create({
    baseURL: "https://nc-news-joe.herokuapp.com/api"
})

export const fetchArticles = () => {
    return request.get("/articles").then(({data}) => {
        return data.articles
 
    })
  
}
