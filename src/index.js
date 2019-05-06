import React from "react";
import ReactDOM from "react-dom";

import ReactModal from "react-modal";
import "./Post.json";
import "./styles.css";
import { Feed } from "./Components/Feed";
import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { Thread } from "./Components/Thread";
import { WritePopUp } from "./Components/WritePopUp";

ReactModal.setAppElement("#root");
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "start",
      id: null,
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.returnOpenModal = this.returnOpenModal.bind(this);
    this.proceedClick = this.proceedClick.bind(this);
    this.returnToStartPage = this.returnToStartPage.bind(this);
  }
  render() {
    if (this.state.page === "start")
      return (
        <div class="App">
          <Header />
          <WritePopUp
            showModal={this}
            handleCloseModal={this.handleCloseModal}
            handleOpenModal={this.handleOpenModal}
          />
          <Search />
          <Feed onclick={this.proceedClick} />
        </div>
      );
    if (this.state.page === "thread")
      return (
        <div class="App">
          <Thread id={this.state.id} onclick={this.returnToStartPage} />
        </div>
      );
  }
  proceedClick(id) {
    console.log(id);
    this.setState({
      page: "thread",
      id: id
    });
  }
  returnToStartPage() {
    this.setState({
      page: "start",
      id: null
    });
  }
  returnOpenModal() {
    return this.state.showModal;
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
