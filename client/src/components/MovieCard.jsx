import React from 'react'

const MovieCard = () => {
    return (
        <div className='flex justify-center items-center flex-col text-white p-8'>
            <div className='flex flex-col gap-4 p-4 items-center rounded-2xl bg-zinc-600 shadow-2xl backdrop-blur-lg'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-gray-300 text-lg font-semibold'>Movie Title</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="https://assets.leetcode.com/users/amanshukla_/avatar_1750515378.png" alt="Movie Title" className='rounded-lg' width={80} />
                </div>
                <div className='text-sm'>
                    <p className='text-gray-400'>Release Year: 2023</p>
                    <p className='text-gray-400'>Rating: 8.5/10</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard