import Vue from 'vue';
import instanceGen from './axiosInstanceGen';
import errorHandler from './errorHandler';

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
        '发送错误, 请检查网络后重试'
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
        '返回错误, 请检查网络后重试'
      );
      return Promise.reject(e);
    }
  );

  return http;
}

// 返回response.data
const http = httpFactory();

// 返回原始response, 用于需要response原始返回值的场合, 如: 异步下载获取headers中的filename
const httpOrigin = httpFactory({ origin: true });

export { http, httpOrigin, httpFactory };
