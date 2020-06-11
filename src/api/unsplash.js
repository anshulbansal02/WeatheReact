import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { authorization: 'Client-ID 5382fd105af4991e3ec81825b2ea0be8a2919eb740b124b5f575754c61a7cadc'}
});