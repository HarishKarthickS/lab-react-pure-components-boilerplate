import { useState } from 'react'
import PureCounterComponent from './Component/PureCounterComponent'
import SimpleCounterComponent from './Component/SimpleCounterComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PureCounterComponent/>
      <SimpleCounterComponent/>
    </>
  )
}

export default App
