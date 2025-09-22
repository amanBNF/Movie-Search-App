import React from 'react';
import { useNavigate } from 'react-router-dom';

const Favourites = ({ favourites }) => {
    const Navigate = useNavigate();
    return (
        <div className='flex justify-center items-center flex-col min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 text-white p-8'>
            <h2 className='text-gray-300 text-lg font-semibold'>Favourite Movies</h2>
            {favourites && favourites.length > 0 ? (
                <ul>
                    {favourites.map((movie) => (
                        <li key={movie.id} style={{ marginBottom: '1rem' }}>
                            <img src={movie.poster} alt={movie.title} width={80} />
                            <div>
                                <strong>{movie.title}</strong> ({movie.year})
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='text-gray-400'>No favourite movies added yet.</p>
            )}
            <button className='mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded' onClick={() => Navigate("/")}>Go Back</button>
        </div>
    );
};

export default Favourites;