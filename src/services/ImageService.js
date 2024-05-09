import api from '@/services/api';

export const createPokemon = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  method: 'post',
  url: '/image/criar',
  data: form,
});

export const getOneImage = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: `/image/get-one/${id}`,
});

export const listPokemons = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/image/listar',
});

export const updatePokemon = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/image/atualizar',
  data: form,
});

export const deletePokemon = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/image/deletar/${id}`,
});