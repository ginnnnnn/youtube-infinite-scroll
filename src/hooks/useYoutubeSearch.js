import Axios from 'axios';
import { useState, useEffect } from 'react';
import { youtubeSearch, KEY } from '../apis/youtube';

export const useYoutubeSearch = (query, pageToken) => {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  useEffect(() => {
    setVideoList([]);
  }, [query]);
  useEffect(() => {
    let cancel;
    setIsloading(true);
    setError(false);
    youtubeSearch
      .get('/search', {
        params: {
          q: query,
          part: 'snippet',
          maxResults: 10,
          key: KEY,
          pageToken: pageToken,
        },
        cancelToken: new Axios.CancelToken((token) => (cancel = token)),
      })
      .then((res) => {
        setVideoList((preList) => [
          ...preList,
          ...res.data.items.filter((v) => v.id.videoId),
        ]);
        if (res.data.nextPageToken) {
          setNextPageToken(res.data.nextPageToken);
        } else {
          setNextPageToken('');
        }
        setIsloading(false);
      })
      .catch((err) => {
        //do nothing if we cancel it
        if (Axios.isCancel(err)) return;
        return setError(true);
      });
    return () => cancel();
  }, [query, pageToken]);

  return { isLoading, error, videoList, nextPageToken };
};
