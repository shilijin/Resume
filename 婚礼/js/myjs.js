//下拉菜单
(function () {
    //head
    var $Btn=$('.head ul li');
    var $Sub=$('.head ol');
    $Btn.eq(4).click(function () {
        $Sub.eq(0).toggle();
    });
    $Btn.eq(3).click(function () {
        $Sub.eq(1).toggle();
    });
    $Btn.eq(2).click(function () {
        $Sub.eq(2).toggle();
    });
    $Btn.eq(1).click(function () {
        $Sub.eq(3).toggle();
    });
    $Btn.eq(0).click(function () {
        $Sub.eq(4).toggle();
    });
    //title
    var $Btn1=$('.title ol span');
    $Btn1.click(function () {
        $('.title dl').toggle();
    });
    //title2
    var $Btn2=$('.til2 .title2 ol em');
    $Btn2.click(function () {
        $('.til2 .title2 dl').toggle();
    });
})();

//文字切换
(function () {
    //title输入
    var $btn=$('.title ol li a');
    var arrText=[
        '宝贝搜索...',
        '店铺搜索...'
    ];
    var oText=$('.title input');
    var iCur=0;
    oText.val(arrText[iCur]);
    $btn.each(function (index) {
        $(this).click(function () {
            iCur=index;
            oText.val(arrText[iCur]);
            $(this).addClass('active').siblings().removeClass('active');
        })
    });
    oText.focus(function(){
        if($(this).val()==arrText[iCur]){
            $(this).val('');
        }
    });
    oText.blur(function(){
        if($(this).val()==''){
            $(this).val(arrText[iCur]);
        }
    });
})();

//二级菜单
(function () {
    var $UlLi=$('.title ul li');
    var $Div=$('.til2 .title2');
    var iCur=0;
    $Div.eq(0).show();
    $UlLi.each(function (index) {
        $(this).click(function () {
          iCur=index;
            $(this).addClass('active').siblings().removeClass('active');
            $Div.eq(iCur).show().siblings().hide();
            $('.til2 a').show();
        })
    })

})();

//注册框
(function () {
    var oRegister=$('.head ul dl a');
    var oMark=$('#mark');
    var oClose=$('#close');
    oRegister.click(function () {
        oMark.show();
    });
    oClose.click(function () {
        oMark.hide();
    })
})();

//banner 平移
(function(){
    var $Ol=$('.banner ol');
    var $OlLi=$Ol.find('li');//oli
    var $UlLi=$('.banner ul li');//mum
    var $oA=$UlLi.find('a');
    var aLiWidth =$OlLi.eq(0).width();
   // console.log(aLiWidth);
    var iCur=0;//控制图片
    var iNow=0;//控制按钮
    var timeId=0;
    var $box=$('.banner');
    $box.hover(function () {
        clearInterval(timeId);
    },function () {
        autoPlay();
    });
    $UlLi.each(function(index){
        $(this).click(function(){
            iNow=index;
            iCur=iNow;
            //console.log(iCur);
            Play();
        })
    });
    function Play() {
        $Ol.animate({left:-aLiWidth*iCur},1000);
        $UlLi.eq(iNow).addClass('active').siblings().removeClass('active');
        $oA.removeClass('active');
        $UlLi.eq(iNow).find('a').addClass('active');
    }
    autoPlay();
    //console.log($UlLi.eq(0).clone());

    function autoPlay() {
     timeId=setInterval(function () {
         if(iCur==4){
           $Ol.append($OlLi.eq(0).clone());
         }
         if(iCur==5){
             $Ol.animate({left:0},0);
             iCur=1;
             $Ol.children().eq(-1).remove();
         }
         if(iNow==4) iNow=0;
         Play();
         iCur++;
         //console.log(iCur);
         iNow++;
         //console.log(iNow);
     },2000)
    }
})();

//导航图片
(function(){
    var timeId=null;
    var oBox = document.getElementById("box");
    var posTop = oBox.offsetTop;
    window.onscroll = function(){
               var scrollTop = window.pageYOffset  //用于FF    解决 找根元素的起始点不一致的情况；
                       || document.documentElement.scrollTop
                       || document.body.scrollTop
                       || 0;

        if(oBox.offsetTop==posTop+scrollTop){
            clearTimeout(timeId);
        }
        else{
            timeId=setTimeout(function(){
            oBox.style.top = posTop + scrollTop + 'px';//console.log(iSpeed);
        },300)
        }
    }
})();

//倒计时
(function(){
    var intDiff = parseInt(20000);//倒计时总秒数量
    function timer(intDiff){
        window.setInterval(function(){
        var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值
        if(intDiff > 0){
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        $('#day_show').html(day+"天");
        $('#hour_show').html('<s id="h"></s>'+hour);
        $('#minute_show').html('<s></s>'+minute);
        $('#second_show').html('<s></s>'+second);
        intDiff--;
        }, 1000);
    }
    $(function(){
        timer(intDiff);
    });
})();

//灰度图
(function () {
    //main2
    var $Span=$('.main2 ol span');
    var $Ol=$('.main2 ol');
    var $OlLi=$Ol.find('li');
    $OlLi.each(function () {
        $(this).hover(function () {
            $Span.addClass('active');
            $(this).find('span').removeClass('active');
            $(this).find('img').stop().show('normal');
        },function () {
            $Span.removeClass('active');
            $(this).find('img').stop().hide('normal');
        })
    });

    //main3
    var $Span1=$('.main3 ol span');
    var $Ol1=$('.main3 ol');
    var $OlLi1=$Ol1.find('li');
    $OlLi1.each(function () {
        $(this).hover(function () {
            $Span1.addClass('active');
            $(this).find('span').removeClass('active');
            $(this).find('img').stop().show('normal');
        },function () {
            $Span1.removeClass('active');
            $(this).find('img').stop().hide('normal');
        })
    })
    //main4
    var $Span2=$('.main4 ol span');
    var $Ol2=$('.main4 ol');
    var $OlLi2=$Ol2.find('li');
    $OlLi2.each(function () {
        $(this).hover(function () {
            $Span2.addClass('active');
            $(this).find('span').removeClass('active');
            $(this).find('img').stop().show('normal');
        },function () {
            $Span2.removeClass('active');
            $(this).find('img').stop().hide('normal');
        })
    })
})();
