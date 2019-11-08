import React from 'react'

import SmurfsList from './SmurfsList'

const App = () => {
  return (
    <div className='appContainer'>
      <header>
        <h1>SMURFS</h1>
        <img src={ require('../assets/smurfs-vector.png') }/>
      </header>
      <SmurfsList />
    </div>
  )
}

export default App
