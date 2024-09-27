import api from '@/services/api';

export const createNew = (form) => api.request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
    },
    method: 'post',
    url: '/new/create',
    data: form,
  });
  
  export const listNews = (page) => api.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'get',
    url: '/new/list?page='+ page + '&size=9',
  });

  export const listThreeNews = () => api.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'get',
    url: '/new/get-three',
  });

  export const showOne = (obj) => api.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'get',
    data: obj.toString(),
    url: '/new/show-one/' + obj.id,
  });
  
  export const updateNew = (form) => api.request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
    },
    method: 'put',
    url: '/new/update',
    data: form,
  });
  
  export const deleteNew = (id) => api.request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.localStorage.getItem('refresh_token')}`,
    },
    method: 'delete',
    url: `/new/delete/${id}`,
  });

    
  export const searchNew = (query) => api.request({
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'get',
    url: `/new/search?query=` + query,
  });