import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 text-white">
      <div className="text-center">
        <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src="https://imgs.search.brave.com/DhHstVyVzbrqMZceS-14hWkCAL6TTTFjgg8g2_MJiRg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8x/MS90YWlsd2luZF9j/c3MtbG9nb19icmFu/ZGxvZ29zLm5ldF92/OTFuaS01MTJ4NTEy/LnBuZw" className="logo" alt="Tailwind CSS logo"/>
          </a>
      </div>
        <h1 className="text-4xl font-bold mb-4">Hello, Vite + React + Tailwind!</h1>
        <h1> my name is ayush narayan</h1>
      <h1> This is my first react app</h1>
        <p className="text-lg">Start building your app now 🎉</p>
        <p>
          <a href="https://www.youtube.com/@Vaishalivloggers" target="_blank" className="text-red-900 hover:underline">
            Subscribe to my YouTube channel</a>
        </p>
        <p className="color bg-red-500">&copy; 2025 Ayush Narayan</p>
      </div>
    </div>
    </>
  )
}

export default App
