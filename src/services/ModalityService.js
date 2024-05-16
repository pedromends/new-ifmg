import api from '@/services/api';

export const createModality = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'post',
  url: '/modality/create',
  data: form,
});

export const listModalities = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/modality/list',
});

export const updateModality = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/modality/update',
  data: form,
});

export const deleteModality = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/modality/delete/${id}`,
});