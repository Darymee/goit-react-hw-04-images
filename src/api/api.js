import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29734791-3fd561d0afce25ff9315d455c';
const FILTERS = 'image_type=photo&orientation=horizontal&per_page=12';

export const fetchImg = async (page, query) => {
  const responce = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&${FILTERS}`
  );
  return responce.data;
};
