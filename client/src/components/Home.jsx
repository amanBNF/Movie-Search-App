import React from 'react'
import { useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard.jsx'

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 text-white">
      <h1 className="text-4xl mb-8 font-extrabold tracking-wide drop-shadow-lg animate-fade-in">
        🎬 Movie Search
      </h1>
      <div className="flex flex-row gap-4 p-8 rounded-2xl bg-zinc-800/80 shadow-2xl backdrop-blur-lg">
        <input
          type="text"
          className="p-3 rounded-lg border-none outline-none bg-zinc-700 text-white placeholder-zinc-400 focus:ring-2 focus:ring-blue-500 transition-all w-64"
          placeholder="Type a movie name..."
        />
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
          <span className="mr-2">🔍</span> Search
        </button>
      </div>
      <button
        onClick={() => navigate("/favourites")}
        className="px-4 py-2 mt-8 bg-red-500 text-white font-semibold rounded-lg shadow-md 
                 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 
                 focus:ring-offset-1 transition duration-200"
      >
        ❤️ Go to Favourites
      </button>
      <MovieCard />
    </div>
  )
}

export default App