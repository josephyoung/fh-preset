import Vue from 'vue';
import instanceGen from './axiosInstanceGen';
import errorHandler from './errorHandler';

function httpFactory({ origin = false } = {}) {
  let sendOriginResponse = origin;
  const http = instanceGen();

  http.interceptors.request.use(
    config => {
      if (/[Bb]lob/.test(config.responseType)) {
        sendOriginResponse = true;
      }

      return config;
    },
    e => {
      console.error({ e });
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
    e => Promise.reject(e)
  );

  return http;
}

export default httpFactory();
