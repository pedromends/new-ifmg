import api from '@/services/api';

export const createUser = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'post',
  url: '/user/register',
  data: form,
});

export const listUsers = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/user/list',
});

export const updateUser = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/user/update',
  data: form,
});

export const deleteUser = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/user/delete/${id}`,
});