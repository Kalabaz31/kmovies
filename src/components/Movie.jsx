import React from "react";

import { RiPlayCircleFill } from "react-icons/ri";


const Movie = ({ movie }) => {
  
  return (
    <div className=" w-44 my-2">
      <div className="relative group flex w-full h-72 rounded-xl overflow-hidden ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
          className="object-cover z-1"
        />
        <a
          href="/"
          className="absolute flex items-center justify-center bottom-0 w-full h-1/5 font-bold  bg-zinc-900/95 text-sm py-2"
        >
          {movie.name &&
            (movie.name.length > 40
              ? `${movie.name.slice(0, 40)}...`
              : movie.name)}

          {movie.title &&
            (movie.title.length > 40
              ? `${movie.title.slice(0, 40)}...`
              : movie.title)}
        </a>
        <p className="absolute flex justify-center items-center bg-zinc-700/75 font-bold text-lg m-2 rounded-lg w-10 h-8 shadow-lg shadow-zinc-900">
          {movie.vote_average}
        </p>

        <div className="absolute opacity-0 group-hover:opacity-100 flex w-full h-full items-center justify-center bg-black/50 transition ease-in-out duration-300 ">
          <a href="/" className="transition ease-in-out duration-500">
            <RiPlayCircleFill
              fontSize={60}
              className="rounded-full bg-white/25 hover:bg-red-500/25 	"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
