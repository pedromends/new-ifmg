import api from '@/services/api';

export const createNewsCard = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  method: 'post',
  url: '/news-card/create',
  data: form,
});

export const listNewsCard = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/news-card/list',
});

export const updateNewsCard = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/news-card/update',
  data: form,
});

export const deleteNewsCard = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/news-card/delete/${id}`,
});