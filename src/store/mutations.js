import {
  REQ_BANNER,
  REQ_DETAIL,
  REQ_CLASSIFY,
  REQ_LOGINWAY,
  REQ_INDEX,
  REQ_HOMEDATE,
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
  },
  [REQ_LOGINWAY](state,{isLoginWay}){
    state.isLoginWay =isLoginWay
  },
  [REQ_INDEX](state,{index}){
    state.activeIndex = index
  },
  [REQ_HOMEDATE](state,{homeDate}){
    state.homeDate = homeDate
  }
}
