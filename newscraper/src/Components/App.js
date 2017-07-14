import React, { Component } from 'react';

import Header from "./Header/header";
import Articles from "./Articles/articles";
import SavedArticles from "./Saved/saved";
import Notes from "./Notes/notes";

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Articles />
         <SavedArticles />
         <Notes />
      </div>
    );
  }
}

export default App;
