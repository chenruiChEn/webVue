let obj ={
    "icoachu1": "English",
    "icoachu2": "Log Off",
    "icoachu3": "Account",
    "icoachu4": "Change Password"
}
      ;if(typeof module !== 'undefined' && typeof module.exports !== "undefined"){   module.exports = obj }else { if(typeof define === "function" && define.amd){  define([],function () {return obj}) }else { window.obj = obj }}