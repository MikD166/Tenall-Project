AOS.init({
  once: true,
});
window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scroll1");

  if (window.innerWidth > 1200) {
    if (window.scrollY > 150) {
      scrollBtn.classList.remove("d-none");
    } else {
      scrollBtn.classList.add("d-none");
    }
  } else {
    scrollBtn.classList.remove("d-none");
    scrollBtn.classList.add("fixed-top");
  }
});

document.querySelectorAll(".carousel").forEach((carousel) => {
  const currentSlide = carousel.querySelector(".current-slide");
  const lines = carousel.querySelectorAll(".line");

  carousel.addEventListener("slid.bs.carousel", function (event) {
    const index = event.to;

    if (currentSlide) {
      currentSlide.innerText = (index + 1).toString().padStart(2, "0");
    }

    lines.forEach((line, i) => {
      line.classList.toggle("active", i === index);
    });
  });
});