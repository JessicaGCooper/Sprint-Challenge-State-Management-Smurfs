import React from 'react'

const AddSmurfForm = () => {
    return (
        <div className="logInForm">
            <h1>Add Smurf</h1>
        <form>
        <div className="fieldContainer">
            <div className="name">
              <label for="name"><h3>Name</h3></label>
              <div className="nameInputContainer">
                <input type="name" name="name" placeholder="Smurf Name" size="45"/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="age">
              <label for="age"><h3>Age</h3></label>
              <div className="ageInputContainer">
                <input type="age" name="age" placeholder="Smurf Age" size="45"/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="height">
              <label for="height"><h3>Height</h3></label>
              <div className="heightInputContainer">
                <input type="height" name="height" placeholder="Smurf Height" size="45"/>
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

export default AddSmurfForm
