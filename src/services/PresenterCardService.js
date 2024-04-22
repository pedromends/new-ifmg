import api from '@/services/api';

export const createCard = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  method: 'post',
  url: '/presenter-card/create',
  data: form,
});

export const listCards = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/presenter-card/list',
});

export const updateCard = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/presenter-card/update',
  data: form,
});

export const deleteCard = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/presenter-card/delete/${id}`,
});