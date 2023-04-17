import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { cardAtom } from './store/atom'

import Map from './Map'
import './App.css'
console.log('cardAtom', cardAtom)
function App() {
  return (
    <div className="App">
      <Map />
    </div>
  )
}

export default App
