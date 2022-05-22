new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        //section refers to each page element (s1, s2, s3)
        const section = destination.item;
        const title = section.querySelector('.heading');
        const desc = section.querySelector('.desc');
            //important to delay 0.5s, otherwise no obvious animation effect
        const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(title, 0.5, {y: "50", opacity: 0 }, {y: "0", opacity: 1 });

        tl.fromTo(desc, 0.6, {y: "50", opacity: 0 }, {y: "-110", opacity: 1 });

        //Animation for page 2, index is 1
        if(destination.index === 1){
            const aboutimage = document.querySelectorAll('.aboutimage');
            const aboutmain = document.querySelector('.aboutmain');
            const aboutdesc = document.querySelector('.aboutdesc');
            const infobox = document.querySelector('.info-box');

            tl.fromTo(aboutimage, 0.8, {x: "-100%"}, {x: "0"}, "-=1.2")
              .fromTo(aboutmain, 0.4, {y: "50", opacity: 0 }, {y: "0", opacity: 1 })
              .fromTo(aboutdesc, 0.4, {y: "50", opacity: 0 }, {y: "0", opacity: 1 })
              .fromTo(infobox, 0.4, {y: "50", opacity: 0 }, {y: "0", opacity: 1 })
            //     //here opacity needs to be 1, otherwise no push in visual effect
            //   .fromTo(aboutibs[0], 0.6, {opacity: 1}, {opacity: 1})
            //   .fromTo(aboutibs[1], 0.7, {opacity: 0}, {opacity: 1});
        }

        if(destination.index === 2){
            const servicetext = document.querySelectorAll('.service-container1');
            const servicebox1 = document.querySelectorAll('.service-box1');
            const servicebox2 = document.querySelectorAll('.service-box2');
            const servicebox3 = document.querySelectorAll('.service-box3');
            const servicebox4 = document.querySelectorAll('.service-box4');
            const servicebox5 = document.querySelectorAll('.service-box5');
            const servicebox6 = document.querySelectorAll('.service-box6');
        

            tl.fromTo(servicetext, 0.6, {y: "50", opacity: 0 }, {y: 0, opacity: 1 }, "-=0.8")
            tl.fromTo(servicebox1, 0.4, {x: "-50", y: "50", opacity: 0 }, {x: "0", y: "0", opacity: 1 }, "-=0.2")
            tl.fromTo(servicebox2, 0.4, {x: "-50", y: "50", opacity: 0 }, {x: "0", y: "0", opacity: 1 })
            tl.fromTo(servicebox3, 0.4, {x: "-50", y: "50", opacity: 0 }, {x: "0", y: "0", opacity: 1 })
            tl.fromTo(servicebox4, 0.4, {x: "-50", y: "50", opacity: 0 }, {x: "0", y: "0", opacity: 1 })
            tl.fromTo(servicebox5, 0.4, {x: "-50", y: "50", opacity: 0 }, {x: "0", y: "0", opacity: 1 })
            tl.fromTo(servicebox6, 0.4, {x: "-50", y: "50", opacity: 0 }, {x: "0", y: "0", opacity: 1 })
        }

    }
});


