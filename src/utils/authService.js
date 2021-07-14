import Cookies from 'universal-cookie'
const cookies = new Cookies()
import { CookieDomain } from '../config.js'

let cookieConfig = {
}
if(CookieDomain !== ''){
  cookieConfig = { domain: CookieDomain } //path:'/',maxAge:365*24*60*60
}

export function saveCookie(name,value,exdays = 2) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  cookieConfig = {
    expires: d
  }
  cookies.set(name, value, cookieConfig)
}

export function getCookie(name) {
  return cookies.get(name)
}

export function removeCookie(name) {
  cookies.remove(name, cookieConfig)
}

export function signOut() {
  cookies.remove('token', cookieConfig)
  window.localStorage.clear()
}

export function isLogin() {
  return !!cookies.get('token')
}