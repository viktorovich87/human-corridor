import axios from 'axios';

async function axiosFetch(API_URL, formData = {}, method = "GET") {
    if (method.toUpperCase() === "GET") {
        return await axios.get(API_URL, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            return Promise.resolve(res).then(arrList => {
                return arrList.data;
            })
        });
    } else if (method.toUpperCase() === "POST"){
        return await axios.post(API_URL, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            return Promise.resolve(res).then(arrList => {
                return arrList.data;
            })
        });
    }

}
export default axiosFetch;
