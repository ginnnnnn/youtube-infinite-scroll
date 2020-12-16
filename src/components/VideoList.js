import React, { useRef, useCallback, useContext } from 'react';
import { SearchContext } from '../contexts/searchContext';
import VideoItem from './VideoItem';

const VideoList = () => {
  const { videoList, isLoading, nextPageToken, setPageToken } = useContext(
    SearchContext
  );

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextPageToken) {
          setPageToken(nextPageToken);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, nextPageToken, setPageToken]
  );
  return (
    <div className="video-list">
      {videoList.map((video, index) => {
        if (index + 1 >= videoList.length) {
          return (
            <VideoItem
              key={video.etag + index}
              video={video}
              ref={lastElementRef}
            />
          );
        } else {
          return <VideoItem key={video.etag + index} video={video} />;
        }
      })}
    </div>
  );
};

export default VideoList;
