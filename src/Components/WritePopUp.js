import React from "react";
import ReactModal from "react-modal";
export class WritePopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.showModal;
    this.handleCloseModal = props.handleCloseModal;
    this.handleOpenModal = props.handleOpenModal;
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Write</button>
        <ReactModal
          isOpen={this.state.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <br />
          <input type="text" placeholder="title" /> <br />
          <input type="text" placeholder="link" />
          <br />
          <input type="text" placeholder="text" />
          <br />
          <input type="text" placeholder="Ort" />
          <br />
          <input type="text" placeholder="Tags" />
          <br />
        </ReactModal>
      </div>
    );
  }
}
