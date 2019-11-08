import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START })
    axios
        .get('http://localhost:3333/smurfs')
        .then( res => {
            console.log(res)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch( err => {
            console.log('error', err);
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.response })
        });
}


export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE';

export const postSmurf = (name, age, height) => dispatch => {
    dispatch({ type: POST_SMURFS_START })
    axios
        .post('http://localhost:3333/smurfs', { name, age, height })
        .then( res => {
            console.log(res)
            dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data });
        })
        .catch( err => {
            console.log('error', err);
            dispatch({ type: POST_SMURFS_FAILURE, payload: err.response })
        });
}
