(() => {
  const btn = document.querySelector("header button");
  const nav = document.querySelector("nav");
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("open");
  });
  nav.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("open");
  });
})();
