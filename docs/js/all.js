const flightPath = {
        curviness: 1.25,
        autoRotate: true,
        values: [
            { x: 150, y: -20 },
            { x: 300, y: 10 },
            { x: 500, y: 100 },
            { x: 750, y: -100 },
            { x: 500, y: -50 },
            { x: window.innerWidth, y: -50 }
        ]
    },
    tween = new TimelineLite();
tween.add(
    TweenLite.to(".paper-plane", 1.2, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);
const controller = new ScrollMagic.Controller(), //-
    scene = new ScrollMagic.Scene({
        triggerElement: ".animation",
        duration: 3000,
        triggerHook: 0 //- 0 up, 0.5 default , 1 down
    }) //- Object Parameter
    .setTween(tween) //- To set scrool with tween animation
    //  .addIndicators() //- To show indiicators
    .setPin(".animation") //- To stuck the section untill the end of the animation
    .addTo(controller)