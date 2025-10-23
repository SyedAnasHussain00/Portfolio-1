gsap.to(`.nav`, {
    height : `90px`,
    duration : 0.8,
    scrollTrigger : {
        trigger : `.nav`,
        scroller : `body`,
        // markers : true,
        start : `top -30%`,
        end : `top -31%`,
        scrub : 3
    } 
})