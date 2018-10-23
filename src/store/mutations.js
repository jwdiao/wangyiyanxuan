import {
  REQ_BANNER,
  REQ_DETAIL,
  REQ_CLASSIFY,
}from './mutation-types'

export default {
  [REQ_BANNER](state,{banner}){
    state.banner = banner
  },
  [REQ_DETAIL](state,{detail}){
    state.detail = detail
  },
  [REQ_CLASSIFY](state,{classify}){
    state.classify = classify
  }
}
