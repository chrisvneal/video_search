import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>No video selected...</div>;
  }

  let description = video.snippet.description;
  let title = video.snippet.title;

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
