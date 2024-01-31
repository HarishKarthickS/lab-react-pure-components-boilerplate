import { useState } from 'react'
import PureCounterComponent from './Component/PureCounterCOmponent'

import SimpleCounterComponent from './Component/SimpleCounterComponent'
import './App.css'

function App() {

  return (
    <>
      <PureCounterComponent/>
      <SimpleCounterComponent/>
    </>
  )
}

export default App
