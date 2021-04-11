import React, { Component } from 'react';
import * as api from "../api"
import Loader from "react-loader-spinner"

class SingleArticle extends Component {
    state = {
        article: [],
        isLoading: true,
        err: null
    }
    componentDidMount(){
        api.fetchArticle(this.props.article_id)
        .then((article) => {
            this.setState({article, isLoading: false})
        })
        .catch((err)=> {
            this.setState({err, isLoading: false})
        })
    }
    render() {
        const {isLoading, article, err} = this.state;

        if(isLoading === true) {
            return <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
        }
        if(err){
            const {response} = err;
            return (
                <p>
                    {response.status} - {response.data.msg}
                </p>
            )
        }
        const {
            title, body, votes, author, topic, 
         } = article;
        return (
            <main>
                <h2>{title}</h2>
                <p>{body}</p>
                <p>{votes}</p>
                <p>{author}</p>
                <p>{topic}</p>
            </main>
        );
    }
    getArticle = (article) => {
        api.fetchArticle(article).then((article)=> {
            this.setState({article, isLoading: false})
        })
    }
}

export default SingleArticle;