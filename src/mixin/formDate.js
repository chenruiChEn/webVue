function timeHtml(time,str){
  time = time || new Date().getTime();
  time=new Date(time).getTime()+new Date(time).getTimezoneOffset() * 60000+3600000 * 8;
  var date = new Date(time);
  Y = date.getFullYear() + '-';
  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  _M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
  mM = date.getMonth()+1 ;
  D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
  h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
  m = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
  s =date.getSeconds() < 10 ? ":0"+date.getSeconds():":"+date.getSeconds();
  if(str=="YY-MM-DD"){
    return (Y+M+D);
  }else if(str=="YY-MM-DD-HH-MM-SS"){
    return (Y+M+D+' '+h+m+s);
  }else if(str=="YY-MM-DD-HH-MM"){
    return (Y+M+D+' '+h+m);
  }else if(str=="MM-DD"){
    return (M+D);
  }else if(str=="MM/DD"){
    return (_M+D);
  }else if(str=="hh-mm"){
    return (h+m);
  }else if(str=="YY-MM-DD-Week"){
    return (Y+M+D+' '+week(date.getDay()));
  }else if(str=="hh"){
    return (h);
  }else if(str=="MM-DD-HH-MM-CN"){
    return (M.substring(0,M.length-1)+"月"+D+"日"+' '+h+m);
  }else if(str=="MM-DD-CN"){
    return (M.substring(0,M.length-1)+"月"+D+"日");
  }else if(str=="YY-MM-DD-CN"){
    return Y.substring(0,Y.length-1)+"年"+(M.substring(0,M.length-1)+"月"+D+"日");
  }else if(str=="mm"){
    return (mM);
  }else if(str=="m"){
    return (m);
  }
}


export default timeHtml;
