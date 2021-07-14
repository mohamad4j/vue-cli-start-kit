const publicUrl = (process.env.NODE_ENV === 'production') ? 'https://cards-api.bitalone.com' :
  'http://localhost/cards/cards-api/public'
export const API_ROOT = publicUrl + '/api/v1/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
  ? publicUrl
  : 'http://localhost:8080/'
