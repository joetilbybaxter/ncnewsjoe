import Title from "./components/Title"
import NavBar from "./components/NavBar"
import {Router} from "@reach/router"
import ArticlesCard from "./components/ArticlesCard"
import TopicsCard from "./components/TopicsCard"
import CommentsCard from "./components/CommentsCard"
import ArticlesList from "./components/ArticleList"
import './App.css';
import React from "react"

function App() {
  return (
    <div className="App">
        <Title/>
      <NavBar/>
      <Router className="content">
        <ArticlesList path="/articles"/>
        <CommentsCard path="{article_id}/comments"/>
        <TopicsCard path="/topics"/>
        <ArticlesCard path="/article"/>
      </Router>
    </div>
  )
}

export default App;
