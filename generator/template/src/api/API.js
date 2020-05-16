import { httpFactory } from '@/service/http';
import qs from 'qs';

class API {
  constructor(url, baseUrl, origin) {
    this._url = url;
    this._http = httpFactory({ origin, baseUrl });
  }

  get url() {
    return this._url;
  }

  get(config) {
    return this._http.get(this.url, config);
  }

  delete(config) {
    return this._http.delete(this.url, config);
  }

  post(data, config) {
    return this._http.post(this.url, data, config);
  }

  put(data, config) {
    return this._http.put(this.url, data, config);
  }

  patch(data, config) {
    return this._http.patch(this.url, data, config);
  }
}

export default API;
