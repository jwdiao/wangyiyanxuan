
// import {mapState}from 'vuex'
//
// ...mapState(['homeDate']),
export default {

    homeDateFilter (state) {
      return  state.homeDate.tagList.filter((item,index) => index < 4 )

    }


}
