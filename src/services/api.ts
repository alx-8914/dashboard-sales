import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchDashboardData = async () => {
  try {
    const response = await api.get('/dashboard');
    return response.data;
  } catch (err) {
    console.error('Erro ao buscar dados do dashboard:', err);
    throw new Error('Erro ao buscar dados do dashboard');
  }
};

export const fetchRecentClients = async () => {
  try {
    const response = await api.get('/clients/recent');
    return response.data;
  } catch (err) {
    console.error('Erro ao buscar clientes recentes:', err);
    throw new Error('Erro ao buscar clientes recentes');
  }
};

export const fetchSalesData = async () => {
  try {
    const response = await api.get('/sales/analytics');
    return response.data;
  } catch (err) {
    console.error('Erro ao buscar dados de vendas:', err);
    throw new Error('Erro ao buscar dados de vendas');
  }
};

// Adicione outros métodos conforme necessário