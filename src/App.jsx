import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'

// import { CORE_CONCEPTS } from './data'
import image from './assets/lalit.jpg'
import Friends from './component/Friend'



function App() {
  

  return (
    <>
      <div id='core-concepts'>
        <ul>
          <Friends
            image={image}
            name="Lalit"
            address="Santipuram"
            mobile="43567687"
></Friends>
         
        </ul>
      </div>
      <div className="bg-blue-500 hover:bg-green-500  p-4 transition-all duration-300">
              Hover over me!
            </div>

            <Counter/>
    </>
  )
}
export default App