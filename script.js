var carouselItems = document.querySelectorAll(".carousel-item");
var currentItemIndex = 0;

Array.prototype.forEach.call(carouselItems, function(item, index) {
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

function loadMap(n) {
  window.close();
}