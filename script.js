gsap.to("nav",{
    backgroundColor: "black",
    delay: 1,
    duration: 1,
    height:110,
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        marker:true,
        start:"top -30%",
        end:"top -65%",
        scrub:1,
    }
})

gsap.from(".page2-part2" ,{
    y:70,
    opacity:0,
    scrollTrigger:{
        trigger:".page2-part2",
        scroller:"body",
        // markers:true,
        start: "top 86%",
        end:"top 86%",
        scrub:2
    }
})

gsap.from(".page2-part3" ,{
    scale:0.7,
    scrollTrigger:{
        trigger:".page2-part3",
        scroller:"body",
        // markers:true,
        start: "top 95%",
        end:"top 95%",
        scrub:1,
    }
})

gsap.from("#quotes1",{
    x:-50,
    y:-50,
    scrollTrigger:{
        trigger:"#quotes1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#quotes2",{
    x:50,
    y:50,
    scrollTrigger:{
        trigger:"#quotes1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from(".page4-part2",{
    y:76,
    scrollTrigger:{
        trigger:".page4-part2",
        scroller:"body",
        scrub:3,
        // markers:true,
        start:"top 60%",
        end:"top 55%"
    }
})