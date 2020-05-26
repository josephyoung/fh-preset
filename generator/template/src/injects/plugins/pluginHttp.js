import { http } from '@/service';
import install from './install';

export default {
  install: install('$http', http),
};
