import Map from './components/Map'
import './assets/css/App.css'

import CardAtoms from './store/CardAtoms'

function App() {
  return (
    <div className="App">
      <CardAtoms />
      <Map />
    </div>
  )
}

export default App
