import React, { useContext } from 'react';
import { SearchContext } from '../contexts/searchContext';
import { useParams, Redirect } from 'react-router-dom';
import './VideoDetail.css';

const VideoDetail = () => {
  const { videoId } = useParams();
  const { videoList } = useContext(SearchContext);

  const video = videoList.find((v) => v.id.videoId === videoId);

  if (!video) {
    return <Redirect to="/" />;
  }
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail">
      <div className="embed">
        <iframe src={videoSrc} title="video player" />
      </div>
      <div className="segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <div className="gap"></div>
    </div>
  );
};

export default VideoDetail;
