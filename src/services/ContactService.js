import api from '@/services/api';

export const createContactMessage = (form) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'post',
  url: '/contact/create',
  data: form,
});