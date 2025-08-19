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