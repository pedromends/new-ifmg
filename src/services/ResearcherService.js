import api from '@/services/api';

export const createResearcher = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'post',
  url: '/researcher/create',
  data: form,
});

export const listResearchers = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/researcher/list',
});

export const updateResearcher = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/researcher/atualizar',
  data: form,
});

export const deleteResearcher = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/researcher/deletar/${id}`,
});