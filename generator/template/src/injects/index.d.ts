/* 优化编译器提示 */
import { AxiosInstance } from 'axios';
import _ from 'lodash';
import fp from 'lodash/fp';

declare module 'vue/types/vue' {
  interface Vue {
    $env: NodeJS.ProcessEnv;
    $http: AxiosInstance;
    $lodash: _;
    $fp: fp;
  }
}
