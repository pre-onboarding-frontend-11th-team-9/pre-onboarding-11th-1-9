const TOKEN_NAME = 'access_token';

const storage = {
  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  },
  setToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
  },
  removeToken() {
    localStorage.removeItem(TOKEN_NAME);
  },
};

export default storage;
