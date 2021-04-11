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

        return (
            <nav className = "NavBar" >
                <Link className="Links" to="/">
                    Home
                </Link>
                <Link key={"articles"} to="/articles" className="Links">
                            All Articles
                        </Link>
            </nav>
                    
        );                 
}
}

export default NavBar;