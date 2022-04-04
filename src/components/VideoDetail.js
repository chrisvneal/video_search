import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>No video selected...</div>;
  }

  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
