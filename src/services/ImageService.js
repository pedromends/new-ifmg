import api from '@/services/api';

export const createImage = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'post',
  url: '/image/create',
  data: form,
});

export const getOneImage = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: `/image/get-one/${id}`,
});

export const listPokemons = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/image/list',
});

export const updateImage = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'put',
  url: '/image/update',
  data: form,
});

export const deleteImage = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'delete',
  url: `/image/deleta/${id}`,
});