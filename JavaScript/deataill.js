var images = document.querySelectorAll(".image-container img");
var buttonleft = document.querySelector(".button-left")
var buttonright = document.querySelector(".button-right")
  var index = 0;
  // function nextImage() {
  //   images[index].style.display = "none";  // Ẩn ảnh hiện tại
  //   index = (index + 1) % images.length;   // Tính chỉ mục của ảnh tiếp theo
  //   images[index].style.display = "block"; // Hiển thị ảnh tiếp theo
  // }

  function nextImage() {
    images[index].style.display = "none";  // Ẩn ảnh hiện tại
    index = (index + 1) % images.length;   // Tính chỉ mục của ảnh tiếp theo
    buttonleft.style.display ="block"
    // Kiểm tra nếu đang ở ảnh thứ 8 thì chuyển về ảnh đầu tiên
    // if (index == 8&& images.length >7) {
    //   images[images.length-1].style.display = "none"; // Ẩn ảnh cuối cùng
    //   index = 0;  // Reset lại chỉ mục
    // }
    if(index==7){
      buttonright.style.display ="none"
    }
    
    images[index].style.display = "block"; // Hiển thị ảnh tiếp theo
  }
  
  
  function backImage() {
    images[index].style.display = "none";  // Ẩn ảnh hiện tại
    index = (index - 1 + images.length) % images.length;  // Tính chỉ mục của ảnh trước đó
    buttonright.style.display ="block"
    images[index].style.display = "block"; // Hiển thị ảnh trước đó
    if(index==0){
      buttonleft.style.display ="none"
      // buttonright.style.display ="block"
    }
  }


  //  Chuyển sang điện thoại màu khác

  var btn_tim = document.querySelector(".cl-tim")
  var btn_vang = document.querySelector(".cl-vang")
  var btn_den = document.querySelector(".cl-den")
  var btn_bac = document.querySelector(".cl-bac")

  function productTim(){
    btn_tim.style.display ="block"
    btn_vang.style.display ="none"
    btn_den.style.display ="none"
    btn_bac.style.display ="none"
  }
  

  function productVang(){
    btn_tim.style.display ="none"
    btn_vang.style.display ="block"
    btn_den.style.display ="none"
    btn_bac.style.display ="none"
  }
  
  function productDen(){
    btn_tim.style.display ="none"
    btn_vang.style.display ="none"
    btn_den.style.display ="block"
    btn_bac.style.display ="none"
  }
  
  function productBac(){
    btn_tim.style.display ="none"
    btn_vang.style.display ="none"
    btn_den.style.display ="none"
    btn_bac.style.display ="block"
  }
  
  
  