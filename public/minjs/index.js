"use strict";var startX,startY,moveX,moveY,dom=document.getElementsByClassName("md")[0];dom.addEventListener("touchstart",function(e){console.log("touchstart",e);var t=e.touches[0];startX=t.clientX,startY=t.clientY}),dom.addEventListener("touchmove",function(e){console.log("touchmove",e.touches[0]);var t=e.touches[0];moveX=t.clientX,moveY=t.clientY}),dom.addEventListener("touchend",function(e){console.log("touchend"),moveY-startY>=100?dom.style.color="red":startY-moveY>=100&&(dom.style.color="#cecece");var t=parseInt(window.getComputedStyle(document.getElementsByClassName("md")[0]).fontSize);console.log(t),moveX-startX>=100?(t+=2,document.getElementsByClassName("md")[0].style.fontSize=t+"px"):startX-moveX>=100&&t>=14&&(t-=2,document.getElementsByClassName("md")[0].style.fontSize=t+"px")}),$.ajax({url:"api/index",type:"get",dataType:"json",success:function(e){console.log("result",e)},complete:function(e){console.log("res",e)}});