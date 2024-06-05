import api from '@/services/api';

export const listAdvantages = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/advantages/list',
});

export const updateAdvantages = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'put',
  url: '/advantages/update',
  data: form,
});