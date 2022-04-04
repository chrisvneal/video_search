import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Enter a search term</div>;
  }

  let description = video.snippet.description;
  let title = video.snippet.title;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
