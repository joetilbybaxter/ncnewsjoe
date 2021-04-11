import React, { Component } from 'react';
import * as api from "../api"
import {Link} from "@reach/router"

class TopicsCard extends Component {
    state = {
        topics: [],
        isLoading: true
    }
    componentDidMount(){
        const {topics} = this.props;
        this.getTopics(topics)
    }
    componentDidUpdate(prevProps){
        const {topics} = this.props;
        if(topics !== prevProps.topics){
            this.getTopics(topics)
        }
    }
    render() {
        const {topics} = this.state;
        return (
           <main className="TopicsList">
               {topics.map(({slug, description}) => {
                   return (
                       <section className="TopicsCard" key={slug}>
                           <h2>{slug}</h2>
                           <p>{description}</p>
                           <Link to={`/topics/${slug}`} >Link to {slug} articles</Link>
                       </section>
                   )
               })}
           </main>
        );
    }
    getTopics = (topics) => {
        api.fetchTopics(topics).then((topics)=> {
            this.setState({topics, isLoading: false})
        })
    }
}

export default TopicsCard;
