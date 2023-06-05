import Cookies from 'js-cookie';
const TokenKey = 'token-key';

export function getToken() {
  return Cookies.get(TokenKey) || localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  localStorage.removeItem(TokenKey);
  Cookies.remove(TokenKey);
}
export function setLocalStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}
