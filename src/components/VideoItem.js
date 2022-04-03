import React from "react";

const VideoItem = ({ video }) => {
  let imageURL = video.snippet.thumbnails.medium.url;
  return (
    <div>
      <img src={imageURL} alt={video.snippet.description} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
