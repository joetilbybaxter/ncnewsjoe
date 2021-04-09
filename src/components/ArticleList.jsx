import React, { Component } from 'react';
import * as api from "../api"


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
        if(articles !== prevProps.aticles){
            this.getArticles(articles)
        }
    }
    render(){
        const {articles} = this.state
        return (
            
        
            <main className="ArticlesList">
                {articles.map(({title, body, author, topic}) => {
                    return (
                        <section className="ArticleCard" key={title}>
                            {""}
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <p>{author}</p>
                            <p>{topic}</p>
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