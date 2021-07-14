import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'



export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}