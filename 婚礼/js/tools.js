function getByClass(oParent,cls){
    var aEle = oParent.getElementsByTagName('*');
    var arr=[];
    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className==cls){
            arr.push(aEle[i]);
        }
    }

   return arr;
}


function getStyle(obj,attr){
   if(obj.currentStyle){
       return obj.currentStyle[attr];
   }else{
       return getComputedStyle(obj,false)[attr];
  }
}