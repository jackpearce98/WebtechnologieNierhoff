import React from "react";
import ReactDOM from "react-dom";
import "./Post.json";
import "./styles.css";
import { Feed } from "./Feed";
import { Header } from "./Header";
import { Search } from "./Search";
class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Header />
        <Search />
        <Feed />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
