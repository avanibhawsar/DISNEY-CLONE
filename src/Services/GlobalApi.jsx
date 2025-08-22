// import axios from "axios";

// const movieBaseUrl = "https://api.themoviedb.org/3";
// const api_key = "5a0428739034238998d2db4c3f8c7866";
// //https://api.themoviedb.org/3/movie/550?api_key=5a0428739034238998d2db4c3f8c7866

// const getTrendingVideos = axios.get(
//   '${movieBaseUrl} + "/trending/all/day?api_key" + api_key'
// );

// export default {
//   getTrendingVideos,
// };
import axios from "axios";
//import { normalize } from "path";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=8d49a5c008f5f972ec4e7699118bf814";
const api_key = "8d49a5c008f5f972ec4e7699118bf814";

const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};
const getMovieByGenreId = (id) => {
  return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
