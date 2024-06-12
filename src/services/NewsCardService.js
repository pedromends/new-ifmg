import api from '@/services/api'

export const createNewsCard = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'post',
  url: '/news-card/create',
  data: form,
});

export const listNewsCard = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/news-card/list',
});

export const updateNewsCard = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'put',
  url: '/news-card/update',
  data: form,
});

export const deleteNewsCard = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
  },
  method: 'delete',
  url: `/news-card/delete/${id}`,
});