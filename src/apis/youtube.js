import axios from 'axios';
export const KEY = 'AIzaSyAnxuxvTxbpnk-m55SZyuyG3xLr9Zg5voE';

export const youtubeSearch = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});
