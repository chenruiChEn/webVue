
let obj = {}, node_env = process.env.NODE_ENV;


if(node_env==="production"){
  obj.teacherUrl = 'http://ylb.icoachu.cn:18081/coachTechWeb/'
  obj.orgUrl = 'http://ylb.icoachu.cn:58071/coachOrgWeb/'
}else {
  obj.teacherUrl = 'http://116.62.65.65:18080/coachTechWeb/'
  obj.orgUrl = 'http://116.62.65.65:58070/coachOrgWeb/'
}



module.exports = obj
