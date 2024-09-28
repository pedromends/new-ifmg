import api from '@/services/api';

export const listCapacitation = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/capacitation/list',
});

export const updateCapacitation = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'put',
  url: '/capacitation/update',
  data: form,
});

export const updateParag = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'put',
  url: '/capacitation/update-text',
  data: form
});

export const getText = () => api.request({
  headers: {
    'Content-Type': 'application/json', 
  },
  method: 'get',
  url: '/capacitation/get-text',
});