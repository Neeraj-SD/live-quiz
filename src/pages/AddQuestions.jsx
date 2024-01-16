import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const AddQuestions = () => {
  const [roomId, setRoomId] = useState('')

  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <div className="w-[100%] flex flex-row h-20">
        <div className="w-[30%] flex flex-row justify-evenly mt-10">
          <NavLink to="/admin">admin</NavLink>
          <Link to="/leaderboard">leaderboard</Link>
          <Link to="/settings">settings</Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="text-4xl font-bold">Add Questions</h1>
          <h2 className="my-4 font-semibold text-2xl">Enter code to join</h2>
          <p className="text-sm mb-4">It's on the screen in front of you</p>
          <textarea
            onChange={(e) => setRoomId(e.target.value)}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your question"
            required
          />
          <br />
          <button
            onClick={() =>
              roomId.trim().length == 0
                ? alert('Room id not given')
                : console.log(`roomId: ${roomId}`)
            }
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add
          </button>
        </div>
      </div>
      <div></div>
    </div>
  )
}
