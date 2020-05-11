import { http } from '@/service';

export default {
  install(Vue, name = '$http') {
    Object.defineProperty(Vue.prototype, name, { value: http });
  },
};
