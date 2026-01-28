import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'

// import { CORE_CONCEPTS } from './data'
import image from './assets/lalit.jpg'
import Friends from './component/Friend'
import { InfiniteScrolling } from './component/InfiniteScrolling'
import { SearchWithDebounce } from './component/SearchWithDebounce'
import LiveSearchAPI from './component/LiveSearchApi'



function App() {
  

  return (
    <>
      {/* <InfiniteScrolling></InfiniteScrolling> */}
          {/* <SearchWithDebounce></SearchWithDebounce> */}
          <LiveSearchAPI></LiveSearchAPI>
    </>
  )
}
export default App