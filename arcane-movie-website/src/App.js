import React from 'react';
import './App.css';

function App() {
  const movies = [
    {
      title: '',
      imageUrl: '',
    },
    {
      title: '',
      imageUrl: '',
    },
    {
      title: '',
      imageUrl: '',
    },
  ];

  return (
    <div className="App">
      <h1>Movie</h1>
      <div className="poster-container">
        {movies.map((movie, index) => (
          <MoviePoster key={index} title={movie.title} imageUrl={movie.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default App;