import api from '@/services/api';

export const createAdvantage = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  method: 'post',
  url: '/advantages/create',
  data: form,
});

export const listAdvantages = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/advantages/list',
});

export const updateAdvantages = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/advantages/update',
  data: form,
});

export const deleteAdvantage = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/advantages/delete/${id}`,
});