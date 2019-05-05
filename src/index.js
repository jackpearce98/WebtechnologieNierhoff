import React from "react";
import ReactDOM from "react-dom";
import "./Post.json";
import "./styles.css";
import { Feed } from "./Feed";
class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Feed />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
