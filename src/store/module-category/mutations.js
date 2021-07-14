import {STORE_CATEGORY} from '../types'
const mutations = {
  [STORE_CATEGORY] (state, payload) {
    state.categories = payload.categories
  }
}
export default mutations


