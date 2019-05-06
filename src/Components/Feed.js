import React from "react";
import { FeedPicture } from "./FeedPicture.js";

export class Feed extends React.Component {
  constructor(props) {
    super(props);
    let json = require("../Post.json");
    this.feedPictures = [];
    for (var i = 0; i < 4; i++) {
      var x = json.Posts[i];
      this.feedPictures.push(
        <div class="FeedThread">
          <FeedPicture
            videoId={x["link"]}
            id={x["id"]}
            onclick={props.onclick.bind(this)}
          />
          <div class="title">{x["title"]}</div>
          <div class="author">von {x["author"]}</div>
        </div>
      );
    }
    console.log(this.feedPictures);
  }
  render() {
    return <div class="Feed">{this.feedPictures}</div>;
  }
}
