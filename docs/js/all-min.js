const flightPath={curviness:1.25,autoRotate:!0,values:[{x:150,y:-20},{x:300,y:10},{x:500,y:100},{x:750,y:-100},{x:500,y:-50},{x:window.innerWidth,y:-50}]},tween=new TimelineLite;tween.add(TweenLite.to(".paper-plane",1.2,{bezier:flightPath,ease:Power1.easeInOut}));const controller=new ScrollMagic.Controller,scene=new ScrollMagic.Scene({triggerElement:".animation",duration:3e3,triggerHook:0}).setTween(tween).setPin(".animation").addTo(controller);