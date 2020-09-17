import React from "react";
import "./App.css";
import infiniteScroll from "./pages/scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BookList from "./pages/book";
import PostList from "./pages/post";
import BookContextProvider from "./contexts/BookContext";
import PostContextProvider from "./contexts/PostContext";

function App() {
  return (
    <Router>
      <div className="App">
        <BookContextProvider>
          <PostContextProvider>
            <Navigation />
            <Switch>
              <Route exact path="/" />
              <Route path="/scroll" component={infiniteScroll} />

              <Route path="/usecontext" component={BookList} />

              <Route path="/usereducer" component={PostList} />
            </Switch>
          </PostContextProvider>
        </BookContextProvider>
      </div>
    </Router>
  );
}

export default App;
