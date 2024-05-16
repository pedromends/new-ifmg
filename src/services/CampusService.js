import api from '@/services/api';

export const createCampus = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
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
  },
  method: 'put',
  url: '/campus/atualizar',
  data: form,
});

export const deleteCampus = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/campus/deletar/${id}`,
});