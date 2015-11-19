/*!
 *	 Angular Smooth Scroll (ngSmoothScroll)
 *	 Animates scrolling to elements, by David Oliveros.
 * 
 *   Callback hooks contributed by Ben Armston https://github.com/benarmston
 *	 Easing support contributed by Willem Liu. https://github.com/willemliu
 *	 Easing functions forked from Gaëtan Renaudeau. https://gist.github.com/gre/1650294
 *	 Infinite loop bugs in iOS and Chrome (when zoomed) by Alex Guzman. https://github.com/alexguzman
 *	 Support for scrolling in custom containers by Joseph Matthias Goh. https://github.com/zephinzer
 *	 Influenced by Chris Ferdinandi
 *	 https://github.com/cferdinandi
 *
 *	 Version: 1.7.3
 * 	 License: MIT
 */
(function(){var b=angular.module("smoothScroll",[]);var a=function(j,n){n=n||{};var h=n.duration||800,i=n.offset||0,l=n.easing||"easeInOutQuart",e=n.callbackBefore||function(){},g=n.callbackAfter||function(){},d=document.getElementById(n.containerId)||null,c=(d!=undefined&&d!=null);var f=function(){if(c){return d.scrollTop}else{if(window.pageYOffset){return window.pageYOffset}else{return document.documentElement.scrollTop}}};var m=function(o,p){switch(o){case"easeInQuad":return p*p;case"easeOutQuad":return p*(2-p);case"easeInOutQuad":return p<0.5?2*p*p:-1+(4-2*p)*p;case"easeInCubic":return p*p*p;case"easeOutCubic":return(--p)*p*p+1;case"easeInOutCubic":return p<0.5?4*p*p*p:(p-1)*(2*p-2)*(2*p-2)+1;case"easeInQuart":return p*p*p*p;case"easeOutQuart":return 1-(--p)*p*p*p;case"easeInOutQuart":return p<0.5?8*p*p*p*p:1-8*(--p)*p*p*p;case"easeInQuint":return p*p*p*p*p;case"easeOutQuint":return 1+(--p)*p*p*p*p;case"easeInOutQuint":return p<0.5?16*p*p*p*p*p:1+16*(--p)*p*p*p*p;default:return p}};var k=function(p){var o=0;if(p.offsetParent){do{o+=p.offsetTop;p=p.offsetParent}while(p)}o=Math.max(o-i,0);return o};setTimeout(function(){var v=null,x=f(),w=k(j),u=0,q=w-x,y,t,z,s;var p=function(){v=f();s=window.innerHeight+v;if(c){z=d.scrollHeight}else{z=document.body.scrollheight}if((t==w)||(v==w)||(s>=z)){clearInterval(o);g(j)}};var r=function(){u+=16;y=(u/h);y=(y>1)?1:y;t=x+(q*m(l,y));if(c){d.scrollTop=t}else{window.scrollTo(0,t)}p()};e(j);var o=setInterval(r,16)},0)};b.factory("smoothScroll",function(){return a});b.directive("smoothScroll",["smoothScroll",function(c){return{restrict:"A",scope:{callbackBefore:"&",callbackAfter:"&"},link:function(f,e,d){if(typeof d.scrollIf==="undefined"||d.scrollIf==="true"){setTimeout(function(){var g=function(i){if(d.callbackBefore){var j=f.callbackBefore({element:i});if(typeof j==="function"){j(i)}}};var h=function(i){if(d.callbackAfter){var j=f.callbackAfter({element:i});if(typeof j==="function"){j(i)}}};c(e[0],{duration:d.duration,offset:d.offset,easing:d.easing,callbackBefore:g,callbackAfter:h,containerId:d.containerId})},0)}}}}]);b.directive("scrollTo",["smoothScroll",function(c){return{restrict:"A",scope:{callbackBefore:"&",callbackAfter:"&"},link:function(f,e,d){var g;e.on("click",function(j){j.preventDefault();g=document.getElementById(d.scrollTo);if(!g){return}var h=function(k){if(d.callbackBefore){var l=f.callbackBefore({element:k});if(typeof l==="function"){l(k)}}};var i=function(k){if(d.callbackAfter){var l=f.callbackAfter({element:k});if(typeof l==="function"){l(k)}}};c(g,{duration:d.duration,offset:d.offset,easing:d.easing,callbackBefore:h,callbackAfter:i,containerId:d.containerId});return false})}}}])}());