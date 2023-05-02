//Hover danh mujc
var contentList = document.querySelector('.content-list');
var hoverBtn = document.querySelector('.header-category');

hoverBtn.addEventListener('mouseover', function() {
  contentList.style.zIndex = '-1';
});

hoverBtn.addEventListener('mouseout', function() {
  contentList.style.zIndex = '0';
});


//Thanh toasn



var thanhtoan = document.querySelector("#thanhtoan");

var header = document.querySelector(".header");

 thanhtoan.addEventListener("mouseover",function(){
  contentList.style.zIndex = "1";
  header.style.zIndex = "1"

 })