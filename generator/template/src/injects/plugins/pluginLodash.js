import _ from 'lodash';

export default {
  install(Vue, name = '$lodash') {
    Object.defineProperty(Vue.prototype, name, { value: _ });
  },
};
