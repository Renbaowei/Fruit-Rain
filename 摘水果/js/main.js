/**
 * Created by Administrator on 2017/4/28 0028.
 */
var newOne=200,
    svgIcon=$('#svgIcon'),
    flake=$('<div></div>').css({'position':'absolute','top':'-32px','cursor': 'pointer'}).html(svgIcon);
$(function(){
   var documentHeight = $(document).height();
   var documentWidth = $(document).width();
   var c = 0,i,cf,der;
   setInterval(function () {
        var startOpacity = 0.8 + Math.random() * 0.2;
        var startPositonLeft = documentWidth/4 + Math.random()*documentWidth/2;
        var endPositonTop = documentHeight;
        var endPositonLeft = Math.random()*documentWidth;
        var durationFall = 6000 + Math.random() * 2000;
        var rotateTo = (Math.random()-0.5)*360;
        svgIcon.children('use').attr('xlink:href',function(){
           var fruit = ['#icon-boluo',
               '#icon-dayouzi',
               '#icon-chelizi',
               '#icon-ganlan',
               '#icon-huolongguo',
               '#icon-longyan',
               '#icon-qingning',
               '#icon-pipa',
               '#icon-putao',
               '#icon-shiliu',
               '#icon-shuimitao',
               '#icon-xigua',
               '#icon-xiangjiao',
               '#icon-zao'
           ];
           i = parseInt(Math.random()*15);
           return fruit[i]
       });
       var newFruit = flake.clone().appendTo("body");
       newFruit.mouseover(function (e) {
           clearTimeout(cf);
           var addFruit = $(this),
               msg = $('#msg');
           c ++;
           if (c>=20) {
               alert('限量20！');
               newFruit.off(mouseover);
               return false
           }
           addFruit.stop();
           addFruit.fly({
               start : {
                   left: e.pageX,
                   top: e.pageY
               },
               end : {
                   left: 35,
                   top: documentHeight/2,
                   width: 0,
                   height: 0
               },
               onEnd : function () {
                   if (c<=20) {
                       switch (i) {
                           case 0:
                               der = '菠萝'; break;
                           case 1:
                               der = '大柚子'; break;
                           case 2:
                               der = '车厘子'; break;
                           case 3:
                               der = '橄榄'; break;
                           case 4:
                               der = '火龙果'; break;
                           case 5:
                               der = '龙岩'; break;
                           case 6:
                               der = '青柠'; break;
                           case 7:
                               der = '琵琶'; break;
                           case 8:
                               der = '葡萄'; break;
                           case 9:
                               der = '石榴'; break;
                           case 10:
                               der = '水蜜桃'; break;
                           case 11:
                               der = '西瓜'; break;
                           case 12:
                               der = '香蕉'; break;
                           case 13:
                               der = '枣'; break;
                       }
                   } else {
                       der = '购物篮已满，限量20';
                   }
                   $('#iconNum').css(
                       'display','block'
                   ).text(c);
                   msg.css(
                       'display','table'
                   ).children(
                       'span'
                   ).text(der);
                   addFruit.remove();
                   cf = setTimeout(function () {
                       msg.css(
                           'display','none'
                       )
                   },6000);
               }
           });
       });
           newFruit.css({
               'left' : startPositonLeft,
               'opacity' : function () {
                   $(this).rotate({
                       duration : durationFall,
                       angle : 0,
                       animateTo : rotateTo
                   });
                   return startOpacity
               }
           }).animate({
               'top' : endPositonTop - '32',
               'left' : endPositonLeft,
               'opacity' :0.8
           },durationFall,function () {
               var ci = 0;
               setInterval(function () {
                   ci++;
                   if (ci===2) {
                       newFruit.fadeOut(500).remove();
                   }
               },2000)
           });
   },newOne);
});
