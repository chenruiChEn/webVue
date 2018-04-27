export default {
  increment (state) {
    state.count++
  },
  decrement(state){
    state.count--
  },
  login(state){
    state.isLogin = true
  },
  changeLang(state){
    state.lang = state.lang == 'cn'?'en':'cn';
  }
}
