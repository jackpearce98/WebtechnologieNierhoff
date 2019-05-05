import React from "react";
export class FeedPicture extends React.Component {
  constructor(props) {
    super(props);
    this.picture = props.videoId
      .replace("https://www.youtube.com/watch?v=", "http://img.youtube.com/vi/")
      .concat("/0.jpg");
  }
  render() {
    return (
      <div class="FeedVideo">
        <img src={this.picture} onclick="" />
      </div>
    );
  }
}
