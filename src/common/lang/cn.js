let obj ={
    "icoachu1": "中文",
    "icoachu2": "退出登录",
    "icoachu3": "账号信息",
    "icoachu4": "修改密码"
}
      ;if(typeof module !== 'undefined' && typeof module.exports !== "undefined"){   module.exports = obj }else { if(typeof define === "function" && define.amd){  define([],function () {return obj}) }else { window.obj = obj }}