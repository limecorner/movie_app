import { axiosInstance } from "../utils/helpers";

export const toggleFavorite = (movie, currentFavorite) => {
  const path = `account/${process.env.VUE_APP_account_id}/favorite`;
  const data = {
    media_type: "movie",
    media_id: movie.id,
    favorite: currentFavorite,
  };
  const config = {
    params: {
      api_key: process.env.VUE_APP_apiKey,
      session_id: process.env.VUE_APP_session_id,
    },
  };
  return axiosInstance.post(path, data, config);
};
