document.getElementById("date");
date.innerText = luxon.DateTime.now()
  .toFormat("MMMM dd, yyyy, hh:mm:ss a")
  .toString();

const a = document.querySelectorAll(".links a");
a.forEach((e) => {
  e.onclick = () => {
    if (e.classList.contains("active")) {
      return;
    }
    a.forEach((i) => i.classList.remove("active"));
    e.classList.add("active");
    let showMe = document.querySelector(".show-me");
    let divClass = document.querySelector(`.${e.id}`);
    showMe.classList.remove("show-me");
    divClass.classList.add("show-me");
  };
});
