var xlsx2json = require("node-xlsx");
let fs = require('fs');

let name = 'icoachu'
let flag = true;




transfrom()


// console.log('监听translation.xls文件变化中.....');
// fs.watch('translation.xls',{},function (event,filename) {
//   if(event==='change'){
//     transfrom()
//   }
// })


function transfrom() {

  if(flag){
    flag = false
    let list = xlsx2json.parse("./translation.xls" ),en = {} , cn = {};

    list[0].data.forEach((v,i)=>{
      if(v.length){
        en[name + (i+1)] = v[1]
        cn[name + (i+1)] = v[0]
      }
    })

    //写入 src/common/lang/en.js  英文文案
    fs.readFile('src/common/lang/en.js', {flag: 'w+', encoding: 'utf8'}, function(err,fd){
      if(err){
        throw err;
      }
      let data = 'let obj =' + JSON.stringify(en,null,4) +`
      ;if(typeof module !== 'undefined' && typeof module.exports !== "undefined"){   module.exports = obj }else { if(typeof define === "function" && define.amd){  define([],function () {return obj}) }else { window.obj = obj }}`
      fs.writeFile('src/common/lang/en.js', data, {flag: 'w+', encoding: 'utf8'},function(err, written, string){
        if(err){
          throw err;
        }
      })
    })

    //写入 src/common/lang/cn.js  中文文案
    fs.readFile('src/common/lang/cn.js', {flag: 'w+', encoding: 'utf8'}, function(err,fd){
      if(err){
        throw err;
      }
      let data = 'let obj =' + JSON.stringify(cn,null,4) +`
      ;if(typeof module !== 'undefined' && typeof module.exports !== "undefined"){   module.exports = obj }else { if(typeof define === "function" && define.amd){  define([],function () {return obj}) }else { window.obj = obj }}`
      fs.writeFile('src/common/lang/cn.js', data, {flag: 'w+', encoding: 'utf8'},function(err, written, string){
        if(err){
          throw err;
        }
      })
    })
    console.log('编译完成...');

    flag = true
  }


}
