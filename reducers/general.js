
import {get} from '../axios';
const GET_PRICE_DATA = 'GET_PRICE_DATA';
const initialState = {
    device:'',
    items: []
};
const Groupby = [];
const Groupdata = {};
const oldsize = "";
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
        const response = await dispatch(get('/app/tyres/packageinfo'))
        // console.log("response",response.data);
        let items = [];
        response.data.forEach((item)=>{
            let f = items.find((_item)=> _item.size === item.fullsize);
            if (item.price > 0 && (item.product_code.charAt(0) === '2' || item.product_code.charAt(0) === '1' || item.product_code.charAt(0) === '3') && item.is_valid === true){
            const key = {
                brand_code: item.brand_code,
                pattern: item.code,
                key: item.code,
                gift: item.gift,
                worryfree: item.worryfree,
                is_rof: item.is_rof,
                loading: item.loading,
                speed: item.speed,
                origin: item.origin,
                youtube_id: item.youtube_id,
                pattern_detail: item.pattern_detail,
                pattern_image: item.pattern_image,
            }
            item.key = key;
            if(f){
                f.data.push(item)
            }else{
                // const itemkey = item.key = key;
                // console.log("general.items.item",item)
                items.push({
                    size: item.fullsize,
                    sizeonly: item.width+item.height+item.diameter,
                    height: item.width,
                    height: item.height,
                    diameter: item.diameter,
                    data: [item]
                })

            }}
        });
        // console.log("data",items)
        return dispatch({
            type:GET_PRICE_DATA,
            data:items,
        })
    }
}

