
function navAnimation() {
            const nav = document.querySelector("nav");
            const subMenus = document.querySelectorAll(".nav-part2 h5 span");
            const subMenuContainers = document.querySelectorAll(".nav-part2 h5");

            console.log("subMenus selected:", subMenus.length); 
            console.log("subMenuContainers selected:", subMenuContainers.length); 

            gsap.set(subMenuContainers, { display: 'none', opacity: 0 });
            gsap.set(subMenus, { opacity: 0, y: 25 });

            nav.addEventListener("mouseenter", () => {
                let tl = gsap.timeline();
                tl.to("#nav-bottom", {
                    height: "24vh", 
                    duration: 0.4,
                    ease: "power2.out"
                })
                .to(subMenuContainers, {
                    display: 'block', 
                    opacity: 1,
                    duration: 0
                }, "-=0.4")
                .to(subMenus, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05, 
                    ease: "power2.out"
                }, "-=0.3");
            });

            nav.addEventListener("mouseleave", () => {
                let tl = gsap.timeline();
                tl.to(subMenus, {
                    opacity: 0,
                    y: 25,
                    stagger: 0.03,
                    ease: "power2.in"
                })
                .to(subMenuContainers, {
                    opacity: 0,
                    duration: 0
                }, "-=0.2")
                .to("#nav-bottom", {
                    height: 0,
                    duration: 0.2,
                    ease: "power2.in"
                }, "-=0.1")
                .to(subMenuContainers, {
                    display: 'none',
                    duration: 0
                });
            });
        }

        navAnimation();


function page2Animation() {
    var rightElems=document.querySelectorAll(".right-elem")
        rightElems.forEach(function(elem){
           elem.addEventListener("mouseenter",function(){

            //  console.log(elem.getBoundingClientRect())

            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
           })
           elem.addEventListener("mouseleave",function(){
             gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
             })
           })
           elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x-20,
                y:dets.y - elem.getBoundingClientRect().y-100
            })
           })
        })
}
page2Animation()

var sections = document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].load()
    })
})

// var tl=gsap.timeline()
// tl.from("#page1",{
//     opacity:0,
//     // duration:0.3,
//     // delay:0.2
// })
// tl.from ("#page1",{
//     transform:"scaleX(0.1) scaleY(0.2)",
//     borderRadius:"50px",
//     // duration:2,
//     ease:"ease-out"
// })
// tl.from("#nav",{
//     opacity:0
// })
// tl.from("#page1 h1, #page1 p, #page1 div",{
//     opacity:0,
//     duration:0.5,
//     stagger:0.2
// })