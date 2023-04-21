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
  });
  close.addEventListener('click', () => {
    wrapper.classList.remove('active-btnlogin');
    document.body.style.overflow = "auto"
  });
  // var bgr_close = document.getElementById("handle_close-modal")


  // bgr_close.addEventListener('click', ()=>{
  //   wrapper.classList.remove('active-btnlogin');
  //   document.body.style.overflow = "auto"
  // });

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