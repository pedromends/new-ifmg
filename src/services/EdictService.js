import api from '@/services/api';

export const createEdict = (form) => api.request({
  headers: {
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'post',
  url: '/Edicts/create',
  data: form
});

export const listEdicts = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/edicts/list',
});

export const updateEdict = (form) => api.request({
  headers: {
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'put',
  url: '/edicts/update',
  data: form,
});

export const deleteEdict = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'delete',
  url: `/edicts/delete/${id}`,
});

export const downloadEdict = (filename) => api.request({
  headers: {
    'Cache-Control': 'no-cache'
  },
  responseType: 'blob',
  method: 'get',
  url: '/edicts/download/'+ filename,
});
