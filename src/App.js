import React from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import { movies } from "./Data";

const App = () => {


  return (
    <div className="App">
      <div className="Nav">
        <Header text="4anime.to" />
        <Search />
      </div>
      <p className="App-intro">Welcome To my WebSite</p>
      <movies className="movies"/>
    </div>
  );
};

export default App;