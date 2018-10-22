import {
  REQ_BANNER
}from './mutation-types'

export default {
  [REQ_BANNER](state,{banner}){
    state.banner = banner
  }
}
