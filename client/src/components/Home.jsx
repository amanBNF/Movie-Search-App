import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard.jsx";
import axios from "axios";

const App = () => {
  const navigate = useNavigate();

  // 🔹 State to hold movies (unchanged)
  const [movies, setMovies] = React.useState([]);

  // 🔹 NEW: State to hold search query instead of using document.querySelector
  const [query, setQuery] = React.useState("");

  // 🔹 UPDATED: Removed query param from function, now using state instead
  const fetchMovies = async () => {
    if (!query.trim()) return; // ✅ Prevents empty search

    try {
      const res = await axios.get(
        `http://localhost:5000/api/search?title=${query}` // ✅ use state query
      );

      // ✅ Handle case when no movies are found
      if (res.data.Search) {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setMovies([]); // ✅ reset movies on error
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 text-white">
      <h1 className="text-4xl mb-8 font-extrabold tracking-wide drop-shadow-lg animate-fade-in">
        🎬 Movie Search
      </h1>

      {/* 🔹 UPDATED: Input now uses React state instead of document.querySelector */}
      <div className="flex flex-row gap-4 p-8 rounded-2xl bg-zinc-800/80 shadow-2xl backdrop-blur-lg">
        <input
          type="text"
          value={query} // ✅ Controlled input
          onChange={(e) => setQuery(e.target.value)} // ✅ Updates state
          className="p-3 rounded-lg border-none outline-none bg-zinc-700 text-white placeholder-zinc-400 focus:ring-2 focus:ring-blue-500 transition-all w-64"
          placeholder="Type a movie name..."
        />

        {/* 🔹 UPDATED: Button calls fetchMovies directly (no DOM query) */}
        <button
          onClick={fetchMovies}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          <span className="mr-2">🔍</span> Search
        </button>
      </div>

      {/* 🔹 No change here — passing movies to MovieCard */}
      <MovieCard movies={movies} />

      {/* 🔹 No change here — navigate to favourites */}
      <button
        onClick={() => navigate("/favourites")}
        className="px-4 py-2 mt-8 bg-red-500 text-white font-semibold rounded-lg shadow-md 
                   hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 
                   focus:ring-offset-1 transition duration-200"
      >
        ❤️ Go to Favourites
      </button>
    </div>
  );
};

export default App;
