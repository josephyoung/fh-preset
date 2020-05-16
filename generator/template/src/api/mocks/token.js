import API from '@/api/API';

class MockToken extends API {
  constructor({ url, errorUrl, username, password }) {
    super(url);
    this.errorUrl = errorUrl;
    this.username = username;
    this.password = password;
  }

  post({ username, password }) {
    if (this.username === username && this.password === password) {
      return this._http(this.url);
    }

    return this._http(this.errorUrl);
  }
}

const token = new MockToken({
  url: 'mock/token.json',
  errorUrl: 'mock/error.json',
  username: 'jack',
  password: '11',
});

export default token;
