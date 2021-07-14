import api from '../../api'
import { STORE_CATEGORY } from "../types";

export function getCategories({ commit }) {
  return api.getCategories().then(response => {
    console.log(response)
    if (response && response.data.status) {
      return commit(STORE_CATEGORY, response.data.data)
    } else {
      api.AlertServerError()
    }
  })
}
export function getCategory({ commit }, payload ) {
  console.log(payload)
  api.getCategory(payload.id).then(response => {
    if (response && response.data.status) {
      return commit(STORE_CATEGORY, response.data.data)
    } else {
      api.AlertServerError()
    }
  })
}