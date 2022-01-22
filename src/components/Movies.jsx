import React, { useEffect, useState } from 'react';
import Movie from './Movie';


const Movies = ({ data }) => {
  return (
    <div className="flex gap-1 justify-between">
      {data.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Movies;
