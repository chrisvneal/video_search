import React from "react";

const VideoItem = ({ video }) => {
  let imageURL = video.snippet.thumbnails.medium.url;
  return (
    <div className="item">
      <img
        className="ui image"
        src={imageURL}
        alt={video.snippet.description}
      />

      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
