import { createContext } from 'react';

export const SearchContext = createContext({
  isLoading: true,
  error: null,
  videoList: [],
  nextPageToken: '',
  setPageToken: () => {},
});
