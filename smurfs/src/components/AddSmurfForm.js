import React, { useState } from 'react'

//form onSubmit to create new smurf?
//need button onClick to make post request

const AddSmurfForm = props => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const onNameChange = e => {setName(e.target.value)}
    const onAgeChange = e => {setAge(e.target.value)}
    const onHeightChange = e => {setHeight(e.target.value)}

    const handleSubmit = e => {
        const newSmurf = {name: name, age: age, height: height, id: Date.now()}
        e.preventDefault();
        props.postSmurf(newSmurf)
    }

    return (
        <div className="logInForm">
            <h1>Add Smurf</h1>
        <form onSubmit={handleSubmit}>
        <div className="fieldContainer">
            <div className="name">
              <label htmlFor="name"><h3>Name</h3></label>
              <div className="nameInputContainer">
                <input onChange={onNameChange} type="name" name="name" placeholder="Smurf Name" size="45"/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="age">
              <label htmlFor="age"><h3>Age</h3></label>
              <div className="ageInputContainer">
                <input onChange={onAgeChange} type="age" name="age" placeholder="Smurf Age" size="45"/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="height">
              <label htmlFor="height"><h3>Height</h3></label>
              <div className="heightInputContainer">
                <input onChange={onHeightChange} type="height" name="height" placeholder="Smurf Height" size="45"/>
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