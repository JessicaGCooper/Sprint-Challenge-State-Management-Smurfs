import React from 'react'

const Smurf = props => {
    return (
        <div className='smurfContainer'>
            <h1>{props.smurf.name}</h1>
            <h3>Age: {props.smurf.age} Eons</h3>
            <h3>Height: {props.smurf.height}</h3>
        </div>
    )
}

export default Smurf