var index = 0;
var slides = document.getElementById("poster").getElementsByTagName("img");
var slidess = document.getElementById("posters").getElementsByTagName("img");

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slidess[i].style.display = "none";
  }
  index++;
  if (index > slides.length) { index = 1 }
  slides[index - 1].style.display = "block";
  slidess[index - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 1 second
}

showSlides();

//Hover danh mujc
var contentList = document.querySelector('.content-list');
var hoverBtn = document.querySelector('.header-category');

hoverBtn.addEventListener('mouseover', function () {
  contentList.style.zIndex = '-1';
});

hoverBtn.addEventListener('mouseout', function () {
  contentList.style.zIndex = '0';
});

//Gio hang
var giohang = document.querySelector(".header-shopping")

giohang.addEventListener("click", function () {
  document.querySelector(".trangchu").style.display = "none"
  document.querySelector("#thanhtoan").style.display = "none"
  document.querySelector("#timkiem").style.display = "none"
  document.querySelector("#conntent").style.display = "block"
  document.querySelector("#tonext").innerHTML = "Giỏ Hàng"
})

//Về trang chủ

var BackHome = document.querySelector("#backHome")

BackHome.addEventListener("click", function () {
  document.querySelector(".trangchu").style.display = "block"
  document.querySelector("#conntent").style.display = "none"
  document.querySelector("#thanhtoan").style.display = "none"
  document.querySelector("#timkiem").style.display = "none"
  document.querySelector("#tonext").innerHTML = "Điện Thoại "
})

// Sang thanh toan

var thanhToan = document.querySelector(".header-call")

thanhToan.addEventListener("click", function () {
  document.querySelector("#thanhtoan").style.display = "block"
  document.querySelector(".trangchu").style.display = "none"
  document.querySelector("#conntent").style.display = "none"
  document.querySelector("#timkiem").style.display = "none"
  document.querySelector("#tonext").innerHTML = "Thanh Toán "
})

var timkiem = document.querySelector("#seach-item");

timkiem.addEventListener("click", function () {
  document.querySelector("#timkiem").style.display = "flex"
  document.querySelector("#thanhtoan").style.display = "none"
  document.querySelector(".trangchu").style.display = "none"
  document.querySelector("#conntent").style.display = "none"
  document.querySelector("#tonext").innerHTML = "Tìm Kiếm "
})

var TK = document.querySelector("#dtpt");

TK.addEventListener("click", function () {
  document.querySelector("#timkiem").style.display = "flex"
  document.querySelector("#thanhtoan").style.display = "none"
  document.querySelector(".trangchu").style.display = "none"
  document.querySelector("#conntent").style.display = "none"
  document.querySelector("#tonext").innerHTML = "Tìm Kiếm "
})
