import api from '@/services/api';

export const createMainNew = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'post',
  url: '/main-new/create',
  data: form,
});

export const listMainNews = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/main-new/list',
});

export const updateMainNew = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/main-new/update',
  data: form,
});

export const deleteMainNew = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/main-new/delete/${id}`,
});