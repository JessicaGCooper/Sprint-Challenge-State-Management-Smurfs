import React from 'react'

import SmurfsList from './SmurfsList'
import AddSmurfForm from './AddSmurfForm'

const App = () => {
  return (
    <div className='appContainer'>
      <header>
        <h1>SMURFS</h1>
        <img src={ require('../assets/smurfs-vector.png') }/>
      </header>
      <div className="contentContainer">
        <AddSmurfForm />
        <SmurfsList />
      </div>
    </div>
  )
}

export default App
