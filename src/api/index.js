import axios from 'axios'
import {API_ROOT} from '../config'
export default {
  AlertServerError() {
    console.log('AlertServerError')
  },
  getCategories () {
    return axios.get( API_ROOT + 'categories')
  },
  getCategory (id) {
    return axios.get( API_ROOT + 'categories/' + id)
  }
}