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


// const wrapper = document.querySelector('.wrapper');
// const loginlink = document.querySelector('.login-link');
// const registerlink = document.querySelector('.register-link');
// const btnLogin = document.querySelector('.btnLogin');
// const close = document.querySelector('.icon-close');
// document.addEventListener('DOMContentLoaded', () => {
//   // const bodyclose = document.querySelector('#body');


//   registerlink.addEventListener('click', () => {
//     wrapper.classList.add('active');
//   });

//   loginlink.addEventListener('click', () => {
//     wrapper.classList.remove('active');
//   });
//   btnLogin.addEventListener('click', () => {
//     wrapper.classList.add('active-btnlogin');
//     document.body.style.overflow = "hidden"
//     document.querySelector(".content-list").style.zIndex ="-1"
//   });
//   close.addEventListener('click', () => {
//     wrapper.classList.remove('active-btnlogin');
//     document.body.style.overflow = "auto"
//     document.querySelector(".content-list").style.zIndex ="0"
//   });
//   var bgr_close = document.getElementById("handle_close-modal")


//   bgr_close.addEventListener('click',function (event){
//     if(event.target.closest(".form-box")){
//       return;
//     }
//     wrapper.classList.remove('active-btnlogin');
//     document.body.style.overflow = "auto"
//     document.querySelector(".content-list").style.zIndex ="0"
//   });

//   // bodyclose.addEventListener('click',()=>{
//   //   wrapper.classList.add('active-btnlogin');
//   // });
//   // bodyclose.addEventListener('click',()=>{
//   //   wrapper.classList.remove('active-btnlogin');
//   // });
// });


// function signUp(e) {
//   event.preventDefault();


//   var username = document.getElementById("username-res").value;
//   var email = document.getElementById("email-res").value;
//   var password = document.getElementById("password-res").value;
//   var retypepassword = document.getElementById("retypepassword-res").value;

//   var isValidUsername = validateInput(username, /^[a-zA-Z0-9_-]{3,16}$/);
//   if (isValidUsername) {
//     console.log("Username is valid.");
//   } else {
//     console.log("Username is invalid.");
//   }
  

 
 
  
//   // if(email==""){
//   //   document.querySelector("#tbRegister").innerHTML ="Không để trống email"
//   //   return ;
//   // }
  
//   // if(password==""){
//   //   document.querySelector("#tbRegister").innerHTML ="Không để trống password"
//   //   return ;
//   // }
  
//   // if(retypepassword==""){
//   //   document.querySelector("#tbRegister").innerHTML ="Không để trống xác nhận mật khẩu"
//   //   return ;
//   // }


//   if (password == retypepassword) {
//     var user =
//     {
//       username: username,
//       email: email,
//       password: password,
//     }
//     var json = JSON.stringify(user);
//     localStorage.setItem(username, json);
//     alert("Đăng ký thành công");
//   }
//   else alert("Mật khẩu không khớp !")

// }




// document.addEventListener('DOMContentLoaded', () => {
//   const dangnhap = document.getElementsByClassName(".btndangnhap");
// });

// function login(e) {
//   console.log("click");
//   event.preventDefault();
//   var username = document.getElementById("username-login").value;
//   var email = document.getElementById("email-login").value;
//   var password = document.getElementById("password-login").value;

//   if (username == "" || email == "" || password == "") alert("Vui lòng nhập thông tin ");
//   else {

//     var user = localStorage.getItem(username);
//     var data = JSON.parse(user);
//   }
//   console.log(user)
//   console.log(data)
//   if (user == null) {
//     alert("Tài khoản không tồn tại")
//   }
//   else if (username == data.username && email == data.email && password == data.password) {
//     alert("dang nhap thanh cong")
//     wrapper.classList.remove('active-btnlogin');
//     // document.getElementById("btn_login-line").style.display="none";
//     document.getElementById("info_user").innerHTML = "";
//     document.getElementById("info_user").innerHTML = username;
//     document.querySelector("body").style.overflow ="auto"
//     contentList.style.zIndex = '0';
//     document.querySelector(".btnSignUp").classList.add("show");


//   } else alert("Đăng nhập thất bại !")
// }

// var SignUp = document.querySelector(".btnSignUp");

// SignUp.addEventListener("click",function(event){
//   event.preventDefault();
//   SignUp.classList.remove("show");
//   document.getElementById("info_user").innerHTML = "Đăng Nhập";
// })



// // Biểu thức Chính Quy


// function validateInput(inputValue, regexPattern) {
//   var regex = new RegExp(regexPattern);
//   return regex.test(inputValue);
// }


// //Mở modal thành viên nhóm
// var btnShowmembers = document.querySelector("#modal-member");
// var closeMembers = document.querySelector("#close");
// var bodymembers = document.querySelector("#members");
// var notclose = document.querySelector("#notclose")

// btnShowmembers.addEventListener("click",function(){
//   document.querySelector("#members").style.display ="block";
//   document.body.style.overflow = "hidden"
// })

// closeMembers.addEventListener("click",function(){
//   document.querySelector("#members").style.display ="none";
//   document.body.style.overflow = "auto"
// })

// bodymembers.addEventListener("click",function(event){
//   if(event.target.closest("form")){
//     return;
//   }
//   document.querySelector("#members").style.display ="none";
//   document.body.style.overflow = "auto"
// })

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



// var thanhtoan = document.querySelector("#thanhtoan");

// var header = document.querySelector(".header");

//  thanhtoan.addEventListener("mouseover",function(){
//   contentList.style.zIndex = "1";
//   header.style.zIndex = "1"

//  })


//Gio hang
var giohang = document.querySelector(".header-shopping")

giohang.addEventListener("click", function(){
  document.querySelector(".trangchu").style.display ="none"
  document.querySelector("#thanhtoan").style.display ="none"
  document.querySelector("#timkiem").style.display ="none"
  document.querySelector(".conntent").style.display = "block"
  document.querySelector("#tonext").innerHTML ="Giỏ Hàng"
})

//Về trang chủ

var BackHome = document.querySelector("#backHome")

BackHome.addEventListener("click",function(){
  document.querySelector(".trangchu").style.display ="block"
  document.querySelector(".conntent").style.display = "none"
  document.querySelector("#thanhtoan").style.display ="none"
  document.querySelector("#timkiem").style.display ="none"
  document.querySelector("#tonext").innerHTML ="Điện Thoại "
})

// Sang thanh toan

var thanhToan = document.querySelector(".header-call")

thanhToan.addEventListener("click",function(){
  document.querySelector("#thanhtoan").style.display ="block"
  document.querySelector(".trangchu").style.display ="none"
  document.querySelector(".conntent").style.display = "none"
  document.querySelector("#timkiem").style.display ="none"
  document.querySelector("#tonext").innerHTML ="Thanh Toán "
})

var timkiem = document.querySelector("#seach-item");

timkiem.addEventListener("click",function(){
  document.querySelector("#timkiem").style.display ="flex"
  document.querySelector("#thanhtoan").style.display ="none"
  document.querySelector(".trangchu").style.display ="none"
  document.querySelector(".conntent").style.display = "none"
  document.querySelector("#tonext").innerHTML ="Tìm Kiếm "
})