import React, { useState } from 'react'

const App = () => {
const [color, setcolor] = useState("olive")
const [textcolor, settextcolor] = useState("black")
  return (
    <div className=' w-full min-h-screen p-2' style={{backgroundColor : color}}>
      <div className=' bg-black m-5 rounded-xl p-5 flex flex-wrap justify-center items-center gap-5 bg-opacity-30 border-slate-600 border-2'>
        <button className=' p-1 rounded-xl w-16' style={{backgroundColor:"violet"}} onClick={()=>{
          setcolor("violet")
          settextcolor("black")
          }}>Pink</button>
        <button className=' p-1 rounded-xl w-16' style={{backgroundColor:"indigo"}} onClick={()=>{
          setcolor("indigo")
          settextcolor("white")
          }}>Violet</button>
        <button className=' p-1 rounded-xl w-16' style={{backgroundColor:"blue"}} onClick={()=>{
          setcolor("blue")
          settextcolor("white")
          }}>Blue</button>
        <button className=' p-1 rounded-xl w-16' style={{backgroundColor:"green"}}  onClick={()=>{
          setcolor("green")
          settextcolor("black")
          }}>Green</button>
        <button className=' p-1 rounded-xl w-16' style={{backgroundColor:"yellow"}} onClick={()=>{
          setcolor("yellow")
          settextcolor("black")
          }}>Yellow</button>
        <button className=' p-1 rounded-xl w-16' style={{backgroundColor:"orange"}} onClick={()=>{
          setcolor("orange")
          settextcolor("black")
          }}>Orange</button>
        <button className=' p-1 rounded-xl w-16' style={{backgroundColor:"red"}} onClick={()=>{
          setcolor("red")
          settextcolor("white")
          }}>Red</button>
        <button className=' p-1 rounded-xl w-16' style={{backgroundColor:"white"}} onClick={()=>{
          setcolor("white")
          settextcolor("black")
          }}>White</button>
        <button className=' p-1 rounded-xl w-16 text-white' style={{backgroundColor:"black"}} onClick={()=>{
          setcolor("black")
          settextcolor("white")
          }}>Black</button>
      </div>
      <div className=' m-5 bg-black bg-opacity-30 p-5 border-slate-600 border-2 rounded-xl' style={{color: textcolor}}>
        <p>
        This webpage presents a delightful interface where <b>the magic of color awaits at the click of a button</b>. Positioned above are an array of buttons, each holding the promise of a chromatic transformation. Initially draped in a serene olive hue, the background sets a tranquil backdrop, inviting exploration. However, the allure lies in the ability to metamorphose this canvas with a simple click. <b>With each button press, the background gracefully shifts</b>, unveiling a spectrum of colors to captivate the senses. It's a testament to the artistry of web design, where simplicity intertwines with creativity to evoke joy. Amidst the complexities of digital landscapes, a change in color can be a beacon of delight. Whether it's the warmth of a golden sunrise or the coolness of a twilight sky, the choices reflect the kaleidoscope of human emotion. Embracing the power of interactivity, this webpage transforms into a canvas of expression. With each click, it invites users to paint their world with vibrancy and imagination. So embark on this chromatic journey, and let the colors of the webpage illuminate your experience with beauty and wonder.
        </p>
      </div>
    </div>
  )
}

export default App
