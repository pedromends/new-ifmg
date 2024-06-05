import api from '@/services/api';

export const createCampus = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'post',
  url: '/campus/create',
  data: form,
});

export const listCampus = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/campus/list',
});

export const updateCampus = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'put',
  url: '/campus/update',
  data: form,
});

export const deleteCampus = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'delete',
  url: `/campus/delete/${id}`,
});