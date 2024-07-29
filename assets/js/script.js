document.querySelector("#checkbox").addEventListener("change", () => {
  if (document.querySelector("#checkbox").checked) {
    document.querySelector("html").setAttribute("data-theme", "dark");
  } else {
    document.querySelector("html").setAttribute("data-theme", "cupcake");
  }
});
gsap.from("#page1 #hero", {
  //   scale: 0,
  duration: 1.5,
  backgroundColor: "#000000",
  opecity: 0,
});
gsap.from("#page2 main div", {
  opecity: 0,
  scale: 0.5,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrup: 1,
    // markers: true,
    end: "top 50%",
  },
});

var logo = gsap.timeline();

logo.from("#logo span", {
  y: -50,
  duration: 1,
  stagger: 0.5,
});
