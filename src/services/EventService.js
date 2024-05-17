import api from '@/services/api';

export const createEvent = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'post',
  url: '/event/create',
  data: form,
});

export const listEvents = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/event/list',
});

export const updateEvent = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'put',
  url: '/event/update',
  data: form,
});

export const deleteEvent = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/event/delete/${id}`,
});