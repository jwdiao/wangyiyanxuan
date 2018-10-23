import {
  reqBanner,
  reqDetail,
  reqClassify,
} from "../api";
import {
  REQ_BANNER,
  REQ_DETAIL,
  REQ_CLASSIFY
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
  }
}
