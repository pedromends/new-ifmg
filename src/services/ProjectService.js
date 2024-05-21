import api from '@/services/api';

export const createCompany = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
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

export const updateProject = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'put',
  url: '/project/update',
  data: form,
});

export const deleteProject = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/project/delete/${id}`,
});