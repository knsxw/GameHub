import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'f68b6da7818f4c46bc3b6cab50d51525'
    }
})