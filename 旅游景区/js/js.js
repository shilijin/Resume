//banner的轮播
(function(){
    var oBan=get.byId('banner');
    //console.log(oBan);
    var aLi=get.byTagName('li',oBan);
    var iNow=0;
    timeId=setInterval(function(){
        if(iNow==0){
        iNow = aLi.length-1;
    }else{
        iNow--;
    }
    for(var i=0;i<aLi.length;i++){
        fadeOut(aLi[i]);
    }
    fadeIn(aLi[iNow]);
    },3000)
})();
//slider
(function(){
    var oMidLeft=get.byId('midleft');
    var oUl=get.byTagName('ul',oMidLeft)[0];
    var oOl=get.byTagName('ol',oMidLeft)[0];
    //console.log(oOl);
    var aImg=get.byTagName('li',oUl);
    var aNum=get.byTagName('li',oOl);
    //console.log(aNum);
    var timeId1 = timeId2 = null;
    for(var i=0;i<aNum.length;i++){
        aNum[i].index=i;
        aNum[i].onmouseover=function(){
            play(this.index);
        }
    }
    clearInterval(timeId2);
    oMidLeft.onmouseover=function(){
        clearInterval(timeId1);
    };
    oMidLeft.onmouseout=function(){
        autoplay();
    };
    autoplay();
    var index=0;
    function autoplay(){
         timeId1=setInterval(function(){
            index++;
            index>=aImg.length && (index=0);
            play(index);
        },2000)
    }
    function play(n){
        index =n;
        var alpha=0;
        for(var i=0;i<aNum.length;i++) aNum[i].className='';
        aNum[index].className='current';
        for(var j=0;j<aImg.length;j++){
            aImg[j].style.opacity = 0;
            aImg[j].style.filter = "alpha(opacity=0)";
        }
         clearInterval(timeId2);
            timeId2 =setInterval(function(){
            alpha+=4;
              if(alpha>100){
                  alpha=100;
              }
              aImg[index].style.opacity = alpha/100;
              aImg[index].style.filter = "alpha(opacity="+  alpha +")";
              if(alpha>=100){
                  clearInterval(timeId2)
              }
        },40)
    }
})();
//无缝滚动
(function(){
    var oUter=get.byId('list');
    var oUl=get.byTagName('ul',oUter)[0];
    var aLi=get.byTagName('li',oUl);
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
    var iNow=0;
    var timeId=0;
    autoplay();
    function autoplay(){
        timeId=setInterval(function(){
            if(iNow == aLi.length/2){
                iNow = 0;
                oUl.style.left = 0 ;
            }
            moveImg(oUl, -iNow* aLi[0].offsetWidth, -(iNow+1)*aLi[0].offsetWidth);
            iNow++;
        },2000)
    }
    oUter.onmouseover = function(){
        clearInterval(timeId)
    };
     oUter.onmouseout = function(){
         autoplay();
    };
})();
//