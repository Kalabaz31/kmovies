import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import Featured from "./Featured";
import Movies from "./Movies";
import Tabs from "./Tabs";

import axios from "../helpers/axios";
import { requests } from "../helpers/requests";

const Feed = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trendingThisWeek, setTrendingThisWeek] = useState([]);
  const [trendingToday, setTrendingToday] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  // FETCH POPULAR MOVIES
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.popular);
      setPopularMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [requests.popular]);

  // FETCH Trending Today MOVIES
  useEffect(() => {
    async function fetchLatest() {
      const request = await axios.get(requests.trendingToday);
      setTrendingToday(request.data.results);
      return request;
    }
    fetchLatest();
  }, [requests.topRated]);

  // FETCH Trending This Week MOVIES
  useEffect(() => {
    async function fetchLatest() {
      const request = await axios.get(requests.trendingThisWeek);
      setTrendingThisWeek(request.data.results);
      return request;
    }
    fetchLatest();
  }, [requests.topRated]);

  useEffect(() => {
    setTrendingMovies([
      {
        index: 0,
        name: "Today",
        movies: trendingToday,
      },
      {
        index: 1,
        name: "This Week",
        movies: trendingThisWeek,
      },
    ]);
  }, [trendingToday, trendingThisWeek]);

  return (
    <div className="flex flex-col justify-between h-full w-4/5 min-w-210 hide-scrollbar border-r border-zinc-800	 ">
      <div className="flex flex-col text-white px-16 py-10">
        <div className="flex flex-row justify-start items-center gap-6 text-sm text-zinc-400 font-bold">
          <Link to="/" className="flex items-center gap-1 pb-6 ">
            TV Series
          </Link>
          <Link
            to="/"
            className="flex text-white items-center gap-1 pb-6"
          >
            Movies
          </Link>
          <Link to="/" className="flex items-center gap-1 pb-6">
            Animes
          </Link>
        </div>

        <div className="popular">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row">
              <Tabs headerTitle="Trending" data={trendingMovies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
