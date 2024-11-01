import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://195.200.6.114:8443/api-polo/',
  baseURL: 'http://localhost:8443/api-polo/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const handshake = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/user/handshake',
});

api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

export default api;