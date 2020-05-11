/* 优化编译器提示 */
import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $env: NodeJS.ProcessEnv;
  }
}
