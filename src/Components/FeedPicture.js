import React from "react";
export class FeedPicture extends React.Component {
  constructor(props) {
    super(props);
    this.picture = props.videoId
      .replace("https://www.youtube.com/watch?v=", "http://img.youtube.com/vi/")
      .concat("/0.jpg");
    this.onclick = props.onclick;
    this.id = props.id;
  }
  render() {
    return (
      <div class="FeedVideo">
        <img src={this.picture} onClick={() => this.onclick(this.id)} />
      </div>
    );
  }
}
