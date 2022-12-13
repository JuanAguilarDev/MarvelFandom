import axios from 'axios';

const urlBase = 'https://gateway.marvel.com:443/v1/public/'

export const apiCall = async ({
    urlParam,
    method = 'get',
    body
}) => {
    return await axios({
        url: urlBase+urlParam, 
        method,
        body,
        params : {
            apikey: '4bd73453dc6ee41a38b9650485bddbae'
        }
    })
}
