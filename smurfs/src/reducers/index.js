import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE
} from '../actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
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
        default:
            return state;
    }
}