import axios from "axios"

const request = axios.create({
    baseURL: "https://nc-news-joe.herokuapp.com/api"
})

export const fetchArticles = () => {
    return request.get("/articles").then(({data}) => {
        return data.articles
    }) 
}

export const fetchArticle = (article_id) => {
    return request.get(`/articles/${article_id}`).then(({data}) => {
        return data.article
    })
}

export const fetchTopics = () => {
    return request.get("/topics").then(({data})=> {
        return data.topics
    })
}
export const changeVotes = (article_id, increment) => {
    return request.patch(`/articles/${article_id}`, {votes: increment})
}

export const fetchComments = (article_id) => {
    return request.get(`/articles/${article_id}/comments`).then(({data})=> {
        return data.comments
    })
}