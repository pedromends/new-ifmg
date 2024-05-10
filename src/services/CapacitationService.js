import api from '@/services/api';

export const createCapacitation = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'post',
  url: '/capacitation/create',
  data: form,
});

export const listCapacitation = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/capacitation/list',
});

export const updateCapacitation = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/capacitation/update',
  data: form,
});

export const deleteCapacitation = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/capacitation/delete/${id}`,
});