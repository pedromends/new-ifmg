import api from '@/services/api';

export const listCards = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/presenter-card/list',
});

export const updateCard = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'put',
  url: '/presenter-card/update',
  data: form,
});