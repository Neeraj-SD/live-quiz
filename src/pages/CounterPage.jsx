import React, { useEffect, useState } from 'react'

const CounterPage = () => {
  const [counter, setCounter] = useState(0)

  //   useEffect(() => {
  //     alert('Button clicked: ' + counter)
  //     console.log(Date.now())
  //   })

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1>Counter: {counter}</h1>
      <br />
      <button
        onClick={() => setCounter(counter + 1)}
        type="text"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Increment
      </button>
    </div>
  )
}

export default CounterPage
