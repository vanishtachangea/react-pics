import axios from 'axios';
//with axios you can install a preconfigured instance of the axios client that
//has default properties set

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:  'Client-ID VObG2_YBYZAHHREZi6hiurqiLQXgjmuKQExRejGh9A0'
    }
});

