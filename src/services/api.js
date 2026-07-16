import axios from 'axios';
import { API_BASE_URL } from '../constants';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export const generateQRCode = (payload) =>
  api.post('/qr/generate', payload).then((response) => response.data);

export const getHistory = () =>
  api.get('/qr').then((response) => response.data);

export const getQRCodeById = (id) =>
  api.get(`/qr/${id}`).then((response) => response.data);

export const deleteQRCode = (id) =>
  api.delete(`/qr/${id}`).then((response) => response.data);

export const downloadQRCode = async (id, filename = `qr_${id}.png`) => {
  const response = await api.get(`/qr/download/${id}`, { responseType: 'blob' });
  const url = URL.createObjectURL(new Blob([response.data], { type: 'image/png' }));
  const link = Object.assign(document.createElement('a'), {
    href: url,
    download: filename,
  });

  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

export const getQRHistory = () => getHistory();

export default api;
