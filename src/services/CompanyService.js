import api from '@/services/api';

export const createCompany = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  method: 'post',
  url: '/company/create',
  data: form,
});

export const listCompanies = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/company/list',
});

export const updateCompanies = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/company/update',
  data: form,
});

export const deleteCompany = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/company/delete/${id}`,
});