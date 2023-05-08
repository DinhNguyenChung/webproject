// mau den

var images = document.querySelectorAll(".img-items");
var buttonleft = document.querySelector(".button-left")
var buttonright = document.querySelector(".button-right")
var index = 0;

 var currentImgIndex = 0;
    var imgs = document.getElementsByClassName("img-items");

    function backImage() {
        imgs[currentImgIndex].style.display = "none";
        currentImgIndex--;
        buttonright.style.display ="block"
        if (currentImgIndex < 0) {
            currentImgIndex = imgs.length - 1;
        }
           if(currentImgIndex==0){
              buttonleft.style.display ="none"
            }
        imgs[currentImgIndex].style.display = "block";
    }

    function nextImage() {
        imgs[currentImgIndex].style.display = "none";
        currentImgIndex++;
        buttonleft.style.display ="block"
        if (currentImgIndex >= imgs.length) {
            currentImgIndex = 0;
            
        }
        if(currentImgIndex==7){
        buttonright.style.display ="none"
    }
        imgs[currentImgIndex].style.display = "block";
    }



//   //  Chuyển sang điện thoại màu khác

  var btn_tim = document.querySelector(".cl-tim");
  var btn_vang = document.querySelector(".cl-vang");
  var btn_den = document.querySelector(".cl-den");
  var btn_bac = document.querySelector(".cl-bac") ;


function updateColorDisplay(color) {
  btn_tim.style.display = (color === 'tim') ? 'block' : 'none';
  btn_vang.style.display = (color === 'vang') ? 'block' : 'none';
  btn_den.style.display = (color === 'den') ? 'block' : 'none';
  btn_bac.style.display = (color === 'bac') ? 'block' : 'none';
}
function productTim() {
  updateColorDisplay('tim');
  buttonright.style.display ="block"
}

function productVang() {
  updateColorDisplay('vang');
  buttonleft.style.display ="none"
  buttonright.style.display ="none"
}

function productDen() {
  updateColorDisplay('den');
  buttonleft.style.display ="none"
  buttonright.style.display ="none"
}

function productBac() {
  updateColorDisplay('bac');
  buttonleft.style.display ="none"
  buttonright.style.display ="none"
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


//Mở hộp

var boxOpen = document.querySelector(".other-inbox")
var boxExits = document.querySelector(".exits")
var bodybox = document.querySelector(".box-open")

boxOpen.addEventListener("click",function(){
  document.querySelector(".box-open").style.display ="block";
})

boxExits.addEventListener("click",function(){
  document.querySelector(".box-open").style.display = "none";
})

bodybox.addEventListener("click", function(e){
  if(e.target.closest("img")){
    return;
  }
  document.querySelector(".box-open").style.display = "none";

})
