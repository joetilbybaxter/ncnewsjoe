import { Link } from '@reach/router';
import React, { Component } from 'react';
import * as api from "../api"

class NavBar extends Component {
    state = {
        articles: [],
    }
    componentDidMount() {
        api.fetchArticles().then((articles) => {
            this.setState({articles})
        })
      
        }
  
    
    render() {
        // const { articles } = this.state
        return (
            <nav className = "NavBar" >
                {/* {articles.map(({ article_id}) => {
                    return ( */}
                        <Link key={"articles"} to="/articles">
                            Articles
                            {console.dir("HELLO <<<<<")}
                        </Link>
                    {/* ) */}
                {/* })} */}
                {/* )} */}
            </nav>
        );
    }
   

}

export default NavBar;