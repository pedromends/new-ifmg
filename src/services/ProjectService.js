import api from '@/services/api';

export const createCompany = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  method: 'post',
  url: '/project/create',
  data: form,
});

export const listProjects = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/project/list',
});

export const updateProjects = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/project/update',
  data: form,
});

export const deleteCompany = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/project/delete/${id}`,
});