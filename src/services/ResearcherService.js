import api from '@/services/api';

export const createResearcher = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'post',
  url: '/researcher/create',
  data: form,
});

export const getByEmail = (email) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/researcher/get-by-email',
  params:{
    email:email
  }
});

export const listResearchers = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/researcher/list',
});

export const getResearcher = (obj) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'get',

  data:obj.toString(),
  url: '/researcher/get-one/' + obj.id,
});

export const updateResearcher = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'put',
  url: '/researcher/update',
  data: form,
});

export const deleteResearcher = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'delete',
  url: `/researcher/delete/${id}`,
});

export const searchResearcher = (query) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: `/researcher/search?query=` + query,
});