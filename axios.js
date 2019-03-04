const fetchMiddleware = (axios) => store => next =>  action => {
    if (action.type === 'FETCH_GET') {
        const { url, params, headers} = action;
        return axios({
            method:'get',
            url,
            params,
            headers: {...headers},
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
            headers: {...headers},
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