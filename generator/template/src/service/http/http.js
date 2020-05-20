import Vue from 'vue';
import instanceGen from './axiosInstanceGen';
import errorHandler from './errorHandler';

/**
 * http工厂函数, 返回一个axios实例
 * @param {boolean} origin 明确要求返回原始response header
 * @param {string} baseUrl 修改默认baseUrl设置,一般用于访问外部地址
 */
function httpFactory({ origin = false, baseUrl } = {}) {
  let sendOriginResponse = origin;
  const http = instanceGen(baseUrl);

  http.interceptors.request.use(
    config => {
      // blob请求返回原始response
      if (/[Bb]lob/.test(config.responseType)) {
        sendOriginResponse = true;
      }

      return config;
    },
    e => {
      errorHandler(
        e,
        `接口 ${_.get(e, 'config.url')} `,
        `: ${_.get(e, 'response.data.error.message', '请检查网络后重试')}`
      );
      return Promise.reject(e);
    }
  );

  http.interceptors.response.use(
    resp => {
      if (sendOriginResponse) {
        return resp;
      }

      return Vue.prototype.$lodash.get(resp, 'data');
    },
    e => {
      errorHandler(
        e,
        `接口 ${_.get(e, 'config.url')} `,
        `: ${_.get(e, 'response.data.error.message', '请检查网络后重试')}`
      );
      return Promise.reject(e);
    }
  );

  return http;
}

/**
 * axios实例封装, 用法:
 * http.get(url, { params: { a: 1, b: 1}}).then(data => {})
 * 或 http.post(url, data).then(data => {})
 * 或 http({ url, method, data/params }).then(data => {}).
 * 一般返回response.data, 配置responseType: 'blob'时返回原始返回头
 */
const http = httpFactory();

/**
 * 返回原始response, 用于需要response原始返回头的场合
 */
const httpOrigin = httpFactory({ origin: true });

export { http, httpOrigin, httpFactory };
