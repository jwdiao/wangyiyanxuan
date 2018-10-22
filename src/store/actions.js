import {
  reqBanner
} from "../api";
import {
  REQ_BANNER,
}from './mutation-types'

export default {
  async getBanner({commit},cb){
    const result = await reqBanner()
    const banner = result.focusList
    commit(REQ_BANNER,{banner})
    cb && cb()
  }
}
