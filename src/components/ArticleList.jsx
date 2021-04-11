import React, { Component } from 'react';
import * as api from "../api"
import {Link} from "@reach/router"

class ArticlesList extends Component {
    state = {
        articles: [],
        isLoading: true
    }
    componentDidMount() {
        const {articles} = this.props;
        this.getArticles(articles)
        }
    componentDidUpdate(prevProps){
        const {articles} = this.props;
        if(articles !== prevProps.articles){
            this.getArticles(articles)
        }
    }
    render(){
        const {articles} = this.state
        return (
            
        
            <main className="ArticlesList">
                {articles.map(({title, body, author, topic, votes, article_id}) => {
                    return (
                        <section className="ArticleCard" key={title}>
                            <h2>{title}</h2>
                            <p>{votes}</p>
                            <p>{author}</p>
                            <p>{topic}</p>
                            <Link to={`/articles/${article_id}`}>Link to {title}</Link>
                        </section>
                    )
                })}

            </main>
        )
    }
    getArticles = (articles) => {
        api.fetchArticles(articles).then((articles)=> {
            this.setState({articles, isLoading: false})
        })
}
}

export default ArticlesList;