const carouselItems = document.querySelectorAll(".carousel-item");
let currentItemIndex = 0;

carouselItems.forEach((item, index) => {
  if (index !== currentItemIndex) {
    item.style.display = "none";
  }
});

function previousItem() {
  carouselItems[currentItemIndex].style.display = "none";
  currentItemIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentItemIndex].style.display = "flex";
}

function nextItem() {
  carouselItems[currentItemIndex].style.display = "none";
  currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
  carouselItems[currentItemIndex].style.display = "flex";
}
