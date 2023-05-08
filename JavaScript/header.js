//Hover danh mujc
var contentList = document.querySelector('.content-list');
var hoverBtn = document.querySelector('.header-category');

hoverBtn.addEventListener('mouseover', function() {
  contentList.style.zIndex = '-1';
});

hoverBtn.addEventListener('mouseout', function() {
  contentList.style.zIndex = '0';
});


//Gio hang
var giohang = document.querySelector(".header-shopping")

giohang.addEventListener("click", function(){
  document.querySelector("#thanhtoan").style.display ="none"
  document.querySelector("#timkiem").style.display ="none"
  document.querySelector(".conntent").style.display = "block"
  document.querySelector("#tonext").innerHTML ="Giỏ Hàng"
  document.querySelector("#tintuc").style.display ="none"
})



// Sang thanh toan

var thanhToan = document.querySelector(".header-call")

thanhToan.addEventListener("click",function(){
  document.querySelector("#thanhtoan").style.display ="block"
  document.querySelector(".conntent").style.display = "none"
  document.querySelector("#timkiem").style.display ="none"
  document.querySelector("#tonext").innerHTML ="Thanh Toán "
  document.querySelector("#tintuc").style.display ="none"
})

var timkiem = document.querySelector("#seach-item");

timkiem.addEventListener("click",function(){
  document.querySelector("#timkiem").style.display ="flex"
  document.querySelector("#thanhtoan").style.display ="none"
  document.querySelector(".conntent").style.display = "none"
  document.querySelector("#tonext").innerHTML ="Tìm Kiếm "
  document.querySelector("#tintuc").style.display ="none"
})