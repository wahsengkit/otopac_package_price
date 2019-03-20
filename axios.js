const fetchMiddleware = (axios) => store => next =>  action => {
    if (action.type === 'FETCH_GET') {
        const { url, params, headers} = action;
        return axios({
            method:'get',
            url,
            params,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer 8d960377b63b8077771e425c6fd11c897e0fcd1c6f61bd0e62c994aeb4e2a11d68b2e546fa0b622cebf14d71eaca7023b2ff0716b783a088a3aff305ec137d31',
                'store-id': 1,
            },
        }).catch(function(e){
            console.log(e);
            throw e
        });
    }else if(action.type === 'FETCH_POST'){
        const { url, data, headers} = action;
        return axios({
            method:'post',
            url,
            data,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer 8d960377b63b8077771e425c6fd11c897e0fcd1c6f61bd0e62c994aeb4e2a11d68b2e546fa0b622cebf14d71eaca7023b2ff0716b783a088a3aff305ec137d31',
                'store-id': 1,
            },
        }).catch(function(e){
            console.log(e);
            throw e
        });
    }else {
        return next(action);
    }
};



const get = (url, params, headers) =>({
    type: 'FETCH_GET',
    url,
    params,
    headers
});


const post = (url, data, headers) =>({
    type: 'FETCH_POST',
    url,
    data,
    headers
});

export {get, post , fetchMiddleware}