var images = document.querySelectorAll(".image-container img");
  var index = 0;
  function nextImage() {
    images[index].style.display = "none";  // Ẩn ảnh hiện tại
    index = (index + 1) % images.length;   // Tính chỉ mục của ảnh tiếp theo
    images[index].style.display = "block"; // Hiển thị ảnh tiếp theo
  }
  
  function backImage() {
    images[index].style.display = "none";  // Ẩn ảnh hiện tại
    index = (index - 1 + images.length) % images.length;  // Tính chỉ mục của ảnh trước đó
    images[index].style.display = "block"; // Hiển thị ảnh trước đó
  }
  