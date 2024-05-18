import api from '@/services/api';

export const createTalent = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'post',
  url: '/talent/create',
  data: form,
});

export const getTalents = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/talent/list',
});

export const updateTalent = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'put',
  url: '/talent/update',
  data: form,
});

export const deleteTalent = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/talent/delete/${id}`,
});