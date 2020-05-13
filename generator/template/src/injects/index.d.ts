/* 优化编译器提示 */
import { AxiosInstance } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    $env: NodeJS.ProcessEnv;
    $http: AxiosInstance;
  }
}
