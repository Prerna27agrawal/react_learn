import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: ' Client-ID SZrPLsRo1D1f1doMztzcUrywnTio5HkIvmyjKW8Z6vI'

     }
});