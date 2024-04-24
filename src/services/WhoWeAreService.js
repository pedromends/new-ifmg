import api from '@/services/api';

export const createWhoWeAre = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  method: 'post',
  url: '/who-we-are/criar',
  data: form,
});

export const getWhoWeAre = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/who-we-are/get',
});

export const updateWhoWeAre = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/who-we-are/update',
  data: form,
});

export const deleteWhoWeAre = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/who-we-are/delete/${id}`,
});