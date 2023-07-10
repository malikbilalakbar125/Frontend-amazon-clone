//  <!--Image Slider  -->

let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imageItem = document.querySelectorAll(".image-item");

//   console.log(imageItem.length - 1);

let startSlider = 0;
let endSlider = (imageItem.length - 1) * 100; // 500

slideBtnLeft.addEventListener("click", () => {
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  }

  imageItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
});

slideBtnRight.addEventListener("click", () => {
  if (startSlider >= -endSlider + 100) {
    startSlider = startSlider - 100;
  }

  imageItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
});

//   <!-- SideBar Navigation  -->

const sideBarNavigationEl = document.getElementById(
  "sidebar-container-navigation-id"
);
const sideBarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sideBarCloseNavigationEl = document.getElementById(
  "sidebar-navigation-close"
);

//   console.log(sideBarNavigationEl);

sideBarOpenNavigationEl.addEventListener("click", () => {
  // alert("Button is Press");
  sideBarNavigationEl.classList.toggle("sidebar-show");
});
sideBarCloseNavigationEl.addEventListener("click", () => {
  sideBarNavigationEl.classList.toggle("sidebar-show");
});
