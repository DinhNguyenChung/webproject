var images = document.querySelectorAll(".image-container .img-items");
var buttonleft = document.querySelector(".button-left")
var buttonright = document.querySelector(".button-right")
var index = 0;

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
    }
  }


// var images = document.getElementsByClassName("image-container")[0].getElementsByTagName("img");
// // var images = document.querySelectorAll(".image-container .img-items")
// var buttonLeft = document.querySelector(".button-left");
// var buttonRight = document.querySelector(".button-right");

// var index = 0;

// function showHideButtons() {
//   // Hide left button when first image is shown
//   if (index === 0) {
//     buttonLeft.style.display = "none";
//   } else {
//     buttonLeft.style.display = "block";
//   }

//   // Hide right button when last image is shown
//   if (index === images.length - 1) {
//     buttonRight.style.display = "none";
//   } else {
//     buttonRight.style.display = "block";
//   }
// }

// function nextImage() {
//   images[index].style.display = "none";  // Hide current image
//   index = (index + 1) % images.length;   // Calculate index of next image
//   images[index].style.display = "block"; // Show next image
//   showHideButtons();
// }

// function backImage() {
//   images[index].style.display = "none";  // Hide current image
//   index = (index - 1 + images.length) % images.length; // Calculate index of previous image
//   images[index].style.display = "block"; // Show previous image
//   showHideButtons();
// }

// // Hide left button on initial load
// buttonLeft.style.display = "none";
// // Show first image
// images[index].style.display = "block";
// // Show/hide buttons based on index
// showHideButtons();



//   //  Chuyển sang điện thoại màu khác

  var btn_tim = document.querySelector(".cl-tim")
  var btn_vang = document.querySelector(".cl-vang")
  var btn_den = document.querySelector(".cl-den")
  var btn_bac = document.querySelector(".cl-bac") 


function updateColorDisplay(color) {
  btn_tim.style.display = (color === 'tim') ? 'block' : 'none';
  btn_vang.style.display = (color === 'vang') ? 'block' : 'none';
  btn_den.style.display = (color === 'den') ? 'block' : 'none';
  btn_bac.style.display = (color === 'bac') ? 'block' : 'none';
}
function productTim() {
  updateColorDisplay('tim');
}

function productVang() {
  updateColorDisplay('vang');
}

function productDen() {
  updateColorDisplay('den');
}

function productBac() {
  updateColorDisplay('bac');
}
// video
// Lấy tham chiếu đến các phần tử DOM
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalContainer");

// Khi người dùng nhấp vào button, mở modal container
openModalButton.addEventListener("click", function() {
  modalContainer.style.display = "block";
});

// Khi người dùng nhấp vào nút đóng, đóng modal container
closeModalButton.addEventListener("click", function() {
  modalContainer.style.display = "none";
});


// Get the modal
var modal = document.getElementById("image-modal");

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the image and title elements in the modal
var modalImage = document.getElementById("modal-image");
var modalTitle = document.getElementById("image-title");

// Get the list of images
var imageList = document.getElementById("image-list");

// Get the list items in the image list
var images = imageList.getElementsByTagName("img");

// When the user clicks on an image, open the modal and set the modal content
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    modal.style.display = "block";
    modalImage.src = this.src;
    modalTitle.innerHTML = this.alt;
  });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  modalImage.src = images[0].src;
  modalTitle.innerHTML = images[0].alt;
}
