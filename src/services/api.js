import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://quickqr-backend-production.up.railway.app/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export const generateQr = (data) => api.post('/qr/generate', data).then((response) => response.data);
export const getQrById = (id) => api.get(`/qr/${id}`).then((response) => response.data);
export const downloadQr = (id) => `${import.meta.env.VITE_API_URL}/qr/download/${id}`;

export default api;
