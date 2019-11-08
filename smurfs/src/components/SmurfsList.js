import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Smurf from './Smurf'
import { fetchSmurfs } from '../actions'

const SmurfsList = props => {
console.log('SmurfsListProps', props)
    useEffect(() => {
        props.fetchSmurfs()
    }, [])
    
    if (props.isFetching) {
        //usualy a spinner (react-library-spinner)
        return <h2>Loading Smurfs List...</h2>
    }
    
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map(smurf => (
                <Smurf  key={smurf.id} smurf={smurf} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList)