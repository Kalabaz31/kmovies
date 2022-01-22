const API_KEY = "f62888504de69414d884fba13ee25852";

export const requests = {
  popular: `/movie/popular?api_key=${API_KEY}`,
  nowPlaying: `/movie/now_playing?api_key=${API_KEY}`,
  topRated: `/movie/top_rated?api_key=${API_KEY}`,
  trendingToday: `/trending/all/day?api_key=${API_KEY}`,
  trendingThisWeek: `/trending/all/week?api_key=${API_KEY}`,
};

