
import {get} from '../axios';
const GET_PRICE_DATA = 'GET_PRICE_DATA';
const initialState = {
    device:'',
    items: []
};

export default function general(state=initialState, action){
    switch (action.type){
        case GET_PRICE_DATA:
            return Object.assign({}, state, {items:action.data});
        default:
            return state;
    }
}

export function getData(){
    return async function(dispatch, state){
        //to be change
        const response = await dispatch(get('/price'));
        dispatch({
            type:GET_PRICE_DATA,
            data:response.data
        })
    }
}