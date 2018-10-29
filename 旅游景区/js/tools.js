//得到对象
var get = {
    byId:function(id){
        return document.getElementById(id);
    },
    byClsName:function(clsName,oParent){
        var newClass=[];
        var reg=new RegExp("(^| )"+clsName+"( |$)");
        var allEl = this.byTagName("*",oParent);
        for(var i=0;i<allEl.length;i++)reg.test(allEl[i].className)&&newClass.push(allEl[i]);
        return newClass;
    },
    byTagName:function(el,obj){
        return ( obj||document).getElementsByTagName(el);
    },
     byStyle:function(obj,attr){
         if(obj.currentStyle){
             return obj.currentStyle[attr];
         }else{
             return getComputedStyle(obj,false)[attr];
         }
     }
};

 //淡入，淡出
 function fadeIn(obj){
     var iCur=get.byStyle(obj,'opacity');
     if(iCur==1)return false;
     var val=0;
     clearInterval(obj.timer);
     obj.timer=setInterval(function(){
         var iSpeed=5;
         if(val==100){
             clearInterval(obj.timer);
         }else{
             val+=iSpeed;
             obj.style.opacity = val/100;
             obj.style.filter = "alpha(opacity="+val+")";
         }
     },30)
 }
 function fadeOut(obj){
     var iCur=get.byStyle(obj,'opacity');
     if(iCur==0)return false;
     var val=100;
     clearInterval(obj.timer);
     obj.timer=setInterval(function(){
         var iSpeed=-5;
         if(val==0){
             clearInterval(obj.timer)
         }else{
             val+=iSpeed;
             obj.style.opacity = val/100;
             obj.style.filter = "alpha(opacity="+val+")";
         }
     },30)
 }
//图片移动
function moveImg(obj,oldPos,now){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var iSpeed = (now-oldPos)/10;
        iSpeed = iSpeed>0 ? Math.ceil(iSpeed):Math.floor(iSpeed);
        if(oldPos == now){
            clearInterval(obj.timer);
        }else{
            oldPos +=iSpeed;
            obj.style.left = oldPos + "px";
        }
    },20)
}

 