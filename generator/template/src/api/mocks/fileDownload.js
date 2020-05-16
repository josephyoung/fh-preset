import { http } from '@/service/http';

export default () =>
  http.get('mock/compressed.tar.gz', {
    responseType: 'blob',
  });
