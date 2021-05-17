import axios from 'axios';
const fetchFromCMS = async (path) => {
  const url = `https://anne-backend.herokuapp.com/${path}`;
  const res = await axios.get(url);
  return res.data;
};
export default fetchFromCMS;