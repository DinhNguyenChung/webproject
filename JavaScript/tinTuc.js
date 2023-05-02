var btnTinMoi = document.querySelector(".tin-moi");
var btnKhuyenMai = document.querySelector(".khuyen-mai");
var btnDienMay = document.querySelector(".dienmay-giadung");
var btnThuThuat = document.querySelector(".thu-thuat");
var btnForGamer = document.querySelector(".for-gamer");
var btnDanhGia = document.querySelector(".danh-gia");
var btnAppGame = document.querySelector(".app-game");
var title = document.getElementById('title');

document.querySelector(".modal-khuyen-mai").style.display = "none";
document.querySelector(".modal-tin-moi").style.display = "flex";
document.querySelector(".modal-dienmay").style.display = "none";
document.querySelector(".modal-thu-thuat").style.display = "none";
document.querySelector(".modal-for-gamer").style.display = "none";
document.querySelector(".modal-video").style.display = "none";
document.querySelector(".modal-danh-gia").style.display = "none";
document.querySelector(".modal-app-game").style.display = "none"
title.innerHTML = "TIN MỚI";
btnTinMoi.classList.add('clicked');

btnKhuyenMai.addEventListener("click", function () {
    document.querySelector(".modal-khuyen-mai").style.display = "flex";
    document.querySelector(".modal-tin-moi").style.display = "none";
    document.querySelector(".modal-dienmay").style.display = "none";
    document.querySelector(".modal-thu-thuat").style.display = "none";
    document.querySelector(".modal-for-gamer").style.display = "none";
    document.querySelector(".modal-video").style.display = "none";
    document.querySelector(".modal-danh-gia").style.display = "none";
    document.querySelector(".modal-app-game").style.display = "none";
    title.innerHTML = "KHUYẾN MÃI";
    btnTinMoi.classList.remove('clicked');
    btnKhuyenMai.classList.add('clicked');
    btnDienMay.classList.remove('clicked');
    btnThuThuat.classList.remove('clicked');
    btnForGamer.classList.remove('clicked');
    btnDanhGia.classList.remove('clicked');
    btnAppGame.classList.remove('clicked');
})

btnTinMoi.addEventListener("click", function () {
    document.querySelector(".modal-khuyen-mai").style.display = "none";
    document.querySelector(".modal-tin-moi").style.display = "flex";
    document.querySelector(".modal-dienmay").style.display = "none";
    document.querySelector(".modal-thu-thuat").style.display = "none";
    document.querySelector(".modal-for-gamer").style.display = "none";
    document.querySelector(".modal-video").style.display = "none";
    document.querySelector(".modal-danh-gia").style.display = "none";
    document.querySelector(".modal-app-game").style.display = "none";
    title.innerHTML = "TIN MỚI";
    btnTinMoi.classList.add('clicked');
    btnKhuyenMai.classList.remove('clicked');
    btnDienMay.classList.remove('clicked');
    btnThuThuat.classList.remove('clicked');
    btnForGamer.classList.remove('clicked');
    btnDanhGia.classList.remove('clicked');
    btnAppGame.classList.remove('clicked');
})

btnDienMay.addEventListener("click", function () {
    document.querySelector(".modal-khuyen-mai").style.display = "none";
    document.querySelector(".modal-tin-moi").style.display = "none";
    document.querySelector(".modal-dienmay").style.display = "flex";
    document.querySelector(".modal-thu-thuat").style.display = "none";
    document.querySelector(".modal-for-gamer").style.display = "none";
    document.querySelector(".modal-video").style.display = "none";
    document.querySelector(".modal-danh-gia").style.display = "none";
    document.querySelector(".modal-app-game").style.display = "none";
    title.innerHTML = "ĐIỆN MÁY - GIA DỤNG";
    btnTinMoi.classList.remove('clicked');
    btnKhuyenMai.classList.remove('clicked');
    btnDienMay.classList.add('clicked');
    btnThuThuat.classList.remove('clicked');
    btnForGamer.classList.remove('clicked');
    btnDanhGia.classList.remove('clicked');
    btnAppGame.classList.remove('clicked');
    // btnSuKien.classList.remove('clicked');
})

btnThuThuat.addEventListener("click", function () {
    document.querySelector(".modal-khuyen-mai").style.display = "none";
    document.querySelector(".modal-tin-moi").style.display = "none";
    document.querySelector(".modal-dienmay").style.display = "none";
    document.querySelector(".modal-thu-thuat").style.display = "flex";
    document.querySelector(".modal-for-gamer").style.display = "none";
    document.querySelector(".modal-video").style.display = "none";
    document.querySelector(".modal-danh-gia").style.display = "none";
    document.querySelector(".modal-app-game").style.display = "none";
    title.innerHTML = "THỦ THUẬT";
    btnTinMoi.classList.remove('clicked');
    btnKhuyenMai.classList.remove('clicked');
    btnDienMay.classList.remove('clicked');
    btnThuThuat.classList.add('clicked');
    btnForGamer.classList.remove('clicked');
    btnDanhGia.classList.remove('clicked');
    btnAppGame.classList.remove('clicked');
})

btnForGamer.addEventListener("click", function () {
    document.querySelector(".modal-khuyen-mai").style.display = "none";
    document.querySelector(".modal-tin-moi").style.display = "none";
    document.querySelector(".modal-dienmay").style.display = "none";
    document.querySelector(".modal-thu-thuat").style.display = "none";
    document.querySelector(".modal-for-gamer").style.display = "flex";
    document.querySelector(".modal-video").style.display = "none";
    document.querySelector(".modal-danh-gia").style.display = "none";
    document.querySelector(".modal-app-game").style.display = "none";
    title.innerHTML = "FOR GAMERS";
    btnTinMoi.classList.remove('clicked');
    btnKhuyenMai.classList.remove('clicked');
    btnDienMay.classList.remove('clicked');
    btnThuThuat.classList.remove('clicked');
    btnForGamer.classList.add('clicked');
    btnDanhGia.classList.remove('clicked');
    btnAppGame.classList.remove('clicked');
})

btnDanhGia.addEventListener("click", function () {
    document.querySelector(".modal-khuyen-mai").style.display = "none";
    document.querySelector(".modal-tin-moi").style.display = "none";
    document.querySelector(".modal-dienmay").style.display = "none";
    document.querySelector(".modal-thu-thuat").style.display = "none";
    document.querySelector(".modal-for-gamer").style.display = "none";
    document.querySelector(".modal-video").style.display = "none";
    document.querySelector(".modal-danh-gia").style.display = "flex";
    document.querySelector(".modal-app-game").style.display = "none";
    title.innerHTML = "ĐÁNH GIÁ";
    btnTinMoi.classList.remove('clicked');
    btnKhuyenMai.classList.remove('clicked');
    btnDienMay.classList.remove('clicked');
    btnThuThuat.classList.remove('clicked');
    btnForGamer.classList.remove('clicked');
    btnDanhGia.classList.add('clicked');
    btnAppGame.classList.remove('clicked');
})

btnAppGame.addEventListener("click", function () {
    document.querySelector(".modal-khuyen-mai").style.display = "none";
    document.querySelector(".modal-tin-moi").style.display = "none";
    document.querySelector(".modal-dienmay").style.display = "none";
    document.querySelector(".modal-thu-thuat").style.display = "none";
    document.querySelector(".modal-for-gamer").style.display = "none";
    document.querySelector(".modal-video").style.display = "none";
    document.querySelector(".modal-danh-gia").style.display = "none";
    document.querySelector(".modal-app-game").style.display = "flex";
    title.innerHTML = "APP GAME";
    btnTinMoi.classList.remove('clicked');
    btnKhuyenMai.classList.remove('clicked');
    btnDienMay.classList.remove('clicked');
    btnThuThuat.classList.remove('clicked');
    btnForGamer.classList.remove('clicked');
    btnDanhGia.classList.remove('clicked');
    btnAppGame.classList.add('clicked');
})


<<<<<<< HEAD
// btnSuKien.addEventListener("click", function () {
//     document.querySelector(".modal-khuyen-mai").style.display = "none";
//     document.querySelector(".modal-tin-moi").style.display = "none";
//     document.querySelector(".modal-dienmay").style.display = "none";
//     document.querySelector(".modal-thu-thuat").style.display = "none";
//     document.querySelector(".modal-for-gamer").style.display = "none";
//     document.querySelector(".modal-video").style.display = "none";
//     document.querySelector(".modal-danh-gia").style.display = "none";
//     document.querySelector(".modal-app-game").style.display = "none";
//     title.innerHTML = "SỰ KIỆN";
//     btnTinMoi.classList.remove('clicked');
//     btnKhuyenMai.classList.remove('clicked');
//     btnDienMay.classList.remove('clicked');
//     btnThuThuat.classList.remove('clicked');
//     btnForGamer.classList.remove('clicked');
//     btnDanhGia.classList.remove('clicked');
//     btnAppGame.classList.remove('clicked');
// })


///Dang Nhap

const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnLogin');
const close = document.querySelector('.icon-close');
document.addEventListener('DOMContentLoaded', () => {
  // const bodyclose = document.querySelector('#body');


  registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
  });

  loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  });
  btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active-btnlogin');
    document.body.style.overflow = "hidden"
    document.querySelector(".content-list").style.zIndex ="-1"
  });
  close.addEventListener('click', () => {
    wrapper.classList.remove('active-btnlogin');
    document.body.style.overflow = "auto"
    document.querySelector(".content-list").style.zIndex ="0"
  });
  var bgr_close = document.getElementById("handle_close-modal")


  bgr_close.addEventListener('click',function (event){
    if(event.target.closest(".form-box")){
      return;
    }
    wrapper.classList.remove('active-btnlogin');
    document.body.style.overflow = "auto"
    document.querySelector(".content-list").style.zIndex ="0"
  });

  // bodyclose.addEventListener('click',()=>{
  //   wrapper.classList.add('active-btnlogin');
  // });
  // bodyclose.addEventListener('click',()=>{
  //   wrapper.classList.remove('active-btnlogin');
  // });
});

function signUp(e) {
  event.preventDefault();
  var username = document.getElementById("username-res").value;
  var email = document.getElementById("email-res").value;
  var password = document.getElementById("password-res").value;
  var retypepassword = document.getElementById("retypepassword-res").value;



  if (password == retypepassword) {
    var user =
    {
      username: username,
      email: email,
      password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công");
  }
  else alert("Mật khẩu không khớp !")

}

document.addEventListener('DOMContentLoaded', () => {
  const dangnhap = document.getElementsByClassName(".btndangnhap");
});

function login(e) {
  console.log("click");
  event.preventDefault();
  var username = document.getElementById("username-login").value;
  var email = document.getElementById("email-login").value;
  var password = document.getElementById("password-login").value;

  if (username == "" || email == "" || password == "") alert("Vui lòng nhập thông tin ");
  else {

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
  }
  console.log(user)
  console.log(data)
  if (user == null) {
    alert("Tài khoản không tồn tại")
  }
  else if (username == data.username && email == data.email && password == data.password) {
    alert("dang nhap thanh cong")
    wrapper.classList.remove('active-btnlogin');
    // document.getElementById("btn_login-line").style.display="none";
    document.getElementById("info_user").innerHTML = "";
    document.getElementById("info_user").innerHTML = username;

  } else alert("Đăng nhập thất bại !")
}
=======
>>>>>>> fb2da05edf8416d9acca597228a4e41e8f46703e
