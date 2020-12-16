import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './VideoItem.css';

const VideoItem = forwardRef(({ video }, ref) => {
  return (
    <div className="video-item" ref={ref}>
      <Link to={`/${video.id.videoId}`}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </Link>
      <div className="description">{video.snippet.title.trim()}</div>
    </div>
  );
});

export default VideoItem;
