import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8090/api-polo/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token').toString()}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

export default api;