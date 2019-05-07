import React from "react";
import YouTube from "react-youtube";
import Button from "@material-ui/core/Button";

export class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.post = this.getPost(props.id);
    this.onclick = props.onclick;
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
  }
  render() {
    return (
      <div class="Post">
        <Button color="primary" onClick={this.onclick}>
          BackSs
        </Button>
        {this.post["title"]}
        <YouTube
          videoId={this.post["link"].replace(
            "https://www.youtube.com/watch?v=",
            ""
          )}
          opts={this.opts}
          onReady={this._onReady}
        />
        {this.post["text"]}
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  getPost(id) {
    let json = require("./Post.json");
    for (var i = 0; i < json.Posts.length; i++) {
      if (json.Posts[i].id === id) {
        return json.Posts[i];
      }
    }
    return;
  }
}
