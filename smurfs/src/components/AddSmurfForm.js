import React, { useState } from 'react'
import { connect } from 'react-redux';

import { postSmurf } from '../actions'

const AddSmurfForm = props => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const onNameChange = e => {setName(e.target.value)}
    const onAgeChange = e => {setAge(e.target.value)}
    const onHeightChange = e => {setHeight(e.target.value)}

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurf(name, age, height);
    }

    return (
        <div className="logInForm">
            <h1>Add Smurf</h1>
        <form onSubmit={handleSubmit}>
        <div className="fieldContainer">
            <div className="name">
              <label htmlFor="name"><h3>Name</h3></label>
              <div className="inputContainer">
                <input onChange={onNameChange} type="name" name="name" placeholder="Smurf Name" size="30"/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="age">
              <label htmlFor="age"><h3>Age</h3></label>
              <div className="inputContainer">
                <input onChange={onAgeChange} type="age" name="age" placeholder="Smurf Age" size="30"/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="height">
              <label htmlFor="height"><h3>Height</h3></label>
              <div className="inputContainer">
                <input onChange={onHeightChange} type="height" name="height" placeholder="Smurf Height" size="30"/>
              </div>
            </div>
        </div>
        <div className="formButtonContainer">
            <button type="submit">Add Smurf</button>
        </div>
      </form>    
    </div>  
    )
}

export default connect(null, { postSmurf })(AddSmurfForm)