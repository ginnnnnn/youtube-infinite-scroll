import React, { useState } from 'react';
import { useYoutubeSearch } from './hooks/useYoutubeSearch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

import { SearchContext } from './contexts/searchContext';
import { VscLoading } from 'react-icons/vsc';

import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [pageToken, setPageToken] = useState('');

  const { isLoading, error, videoList, nextPageToken } = useYoutubeSearch(
    query,
    pageToken
  );

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          isLoading: isLoading,
          error: error,
          videoList: videoList,
          nextPageToken: nextPageToken,
          setPageToken: setPageToken,
        }}
      >
        <SearchBar setQuery={setQuery} />
        <main>
          <Router>
            <Switch>
              <Route exact path="/:videoId">
                <VideoDetail />
              </Route>
              <Route path="/">
                <VideoList />
              </Route>
            </Switch>

            {isLoading && <VscLoading />}
          </Router>
        </main>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
