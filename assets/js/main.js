(() => {
  const btn = document.querySelector(".contents-wrapper button");
  const header = document.querySelector("header");
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    header.classList.toggle("open");
  });
  header.addEventListener("click", () => {
    btn.classList.toggle("open");
    header.classList.toggle("open");
  });
})();
