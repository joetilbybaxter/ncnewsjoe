import React, {Component} from "react"
import * as api from "../api"

class SingleTopic extends Component {
    state = {
        article: [],
        isLoading: true
    }
    componentDidMount(){
        const {article} = this.props;
        this.getArticles(article)
    }
    componentDidUpdate(prevProps){
        const {article} = this.props;
        if(article !== prevProps.articles){
            this.getArticles(article)
        }
    }
    render() {
        const {article} = this.state;
        const {title, votes, body, author} = article;
            if(article.topic === "coding"){
                return (
                    <section className="TopicCard">
                        <h2>{title}</h2>
                            <p>{body}</p>
                            <p>{votes}</p>
                            <p>{author}</p>
                    </section>
                )
            }
            if(article.topic === "cooking"){
                return (
                    <section className="TopicCard">
                        <h2>{title}</h2>
                        <p>{body}</p>
                            <p>{votes}</p>
                            <p>{author}</p>
                    </section>
                )
            }
            if(article.topic === "football"){
                return (
                    <section className="TopicCard">
                        <h2>{title}</h2>
                            <p>{body}</p>
                            <p>{votes}</p>
                            <p>{author}</p>
                    </section>
                )
            }
        
    }
    getArticle= (article) => {
        api.fetchArticle(article).then((article)=> {
            this.setState({article,isLoading: false})
        })
    }
}

export default SingleTopic;