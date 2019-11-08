import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    POST_SMURFS_START,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAILURE
} from '../actions'

const initialState = {
    smurfs: [
        {
        "name":"Brainey",
        "age":200,
        "height":"5cm",
        "id":0
        } 
    ],
    isFetching: false,
    error: '',
}

export const smurfsReducer = (state = initialState, {type, payload}) => {
    
    switch(type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                isFetching: false,
                error: ''
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: payload
            };
        case POST_SMURFS_START:
            return {
                ...state,
                error: ''
            };
        case POST_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: payload,
                isFetching: false,
                error: ''
            };
        case POST_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: payload
            };

        
        default:
            return state;
    }
}