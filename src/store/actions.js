import {
  reqBanner,
  reqDetail,
  reqClassify,
  reqHomeDate,
} from "../api";
import {
  REQ_BANNER,
  REQ_DETAIL,
  REQ_CLASSIFY,
  REQ_LOGINWAY,
  REQ_INDEX,
  REQ_HOMEDATE,
}from './mutation-types'

export default {
  async getBanner({commit},cb){
    const result = await reqBanner()
    const banner = result.focusList
    commit(REQ_BANNER,{banner})
    cb && cb()
  },
  async getDetail({commit},cb){
    const result = await reqDetail()
    const detail = result.detail
    commit(REQ_DETAIL,{detail})
    cb && cb()
  },
  async getClassify({commit},cb){
    const result = await reqClassify()
    console.log(result)
    const classify = result.categoryL1List
    commit(REQ_CLASSIFY,{classify})
    cb && cb()
  },
  gteIsLoginWay({commit},isLoginWay){
    commit(REQ_LOGINWAY,{isLoginWay})
  },
  getActiveIndex({commit},index){
    commit(REQ_INDEX,{index})
  },
  async getHomeDate({commit},cb){
    const result = await reqHomeDate()
    const homeDate = result.home
    commit(REQ_HOMEDATE,{homeDate})
  },
}
