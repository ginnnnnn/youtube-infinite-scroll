import axios from 'axios';
export const KEY = 'your youtube api';

export const youtubeSearch = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});
