import axios from 'axios';
export const KEY = 'YOUR_API_KEY';

export const youtubeSearch = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
});
