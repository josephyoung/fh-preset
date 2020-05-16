import { http } from '@/service/http';
import qs from 'qs';

export default {
  getTableList({ pageSize, currentPage }) {
    return http.get('mock/getTableList', {
      params: { pageSize, currentPage },
    });
  },

  submitForm({ username, password }) {
    return http.post('mock/login', qs.stringify({ username, password }));
  },
};
