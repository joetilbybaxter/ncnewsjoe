import React, { Component } from 'react';
import * as api from "../api"

class CommentsCard extends Component {
    state = {
        comments: []
    }
    componentDidMount(){
        const {comments} = this.props;
        this.getComments(comments)
    }
    componentDidUpdate(prevProps){
        const {comments} = this.props;
        if(comments !== prevProps.comments){
            this.getComments(comments)
        }
    }
    render() {
        const {comments} = this.state;
        const {body}= comments
        return (
                <p>{body}</p>
        );
    }
    getComments= (comments) => {
        api.fetchComments(comments).then ((comments)=> {
            this.setState({comments})
        })
    }
}

export default CommentsCard;