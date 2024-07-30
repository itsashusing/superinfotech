const theme = localStorage.getItem("theme") || "cupcake";

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.querySelector("html").setAttribute("data-theme", theme);
}
setTheme(theme);
document.querySelector("#checkbox").addEventListener("change", () => {
  if (document.querySelector("#checkbox").checked) {
    document.querySelector("html").setAttribute("data-theme", "dark");
    setTheme("dark");
  } else {
    document.querySelector("html").setAttribute("data-theme", "cupcake");
    setTheme("cupcake");
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
    start: "top 40%",
    // end: "top 50%",
  },
});

var logo = gsap.timeline();

logo.from("#logo span", {
  y: -50,
  duration: 0.5,
  stagger: 0.09,
});
