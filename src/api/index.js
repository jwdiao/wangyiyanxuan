/*
* 映射接口
* */
import ajax from './ajax'
export const  reqBanner = () =>ajax('/banner')
export const reqDetail = () =>ajax('/detail')
export const reqClassify = ()=>ajax('/classify')
export const reqHomeDate = () =>ajax('/home')
