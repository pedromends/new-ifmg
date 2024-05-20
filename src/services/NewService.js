import api from '@/services/api';

export const createNew = (form) => api.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    url: '/new/create',
    data: form,
  });
  
  export const listNews = () => api.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'get',
    url: '/new/list',
  });

  export const showOne = (obj) => api.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'get',

    data:obj.toString(),
    url: '/new/show-one/' + obj.id,
  });
  
  export const updateNew = (form) => api.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'put',
    url: '/new/update',
    data: form,
  });
  
  export const deleteNew = (id) => api.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'delete',
    url: `/new/delete/${id}`,
  });