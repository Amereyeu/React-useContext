import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookList from "./pages/book";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <Router>
      <div className="App">
        <BookContextProvider>
          <h3>ContextAPI - useContext</h3>
          <Switch>
            <Route path="/" component={BookList} />
          </Switch>
        </BookContextProvider>
      </div>
    </Router>
  );
}

export default App;
