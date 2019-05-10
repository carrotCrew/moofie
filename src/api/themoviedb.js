import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '4cfa00f017abc0bfb0633f700edde6da'
    }
});