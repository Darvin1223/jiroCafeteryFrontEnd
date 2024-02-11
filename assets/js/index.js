document.addEventListener("DOMContentLoaded", (e) => {
  const time = document.getElementById("time");
  const date = new Date();
  const currentYear = date.getFullYear();
  time.innerText = currentYear;
});
