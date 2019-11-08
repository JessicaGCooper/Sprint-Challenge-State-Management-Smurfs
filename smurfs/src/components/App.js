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
      <AddSmurfForm />
      <SmurfsList />
    </div>
  )
}

export default App
