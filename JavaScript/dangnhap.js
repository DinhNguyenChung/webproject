// Hover danh muc 
var contentList = document.querySelector('.content-list');
var hoverBtn = document.querySelector('.header-category');

hoverBtn.addEventListener('mouseover', function () {
  contentList.style.zIndex = '-1';
});

hoverBtn.addEventListener('mouseout', function () {
  contentList.style.zIndex = '0';
});

//Dagd nhap

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
    document.querySelector(".content-list").style.zIndex = "-1"
  });
  close.addEventListener('click', () => {
    wrapper.classList.remove('active-btnlogin');
    document.body.style.overflow = "auto"
    document.querySelector(".content-list").style.zIndex = "0"
  });
  var bgr_close = document.getElementById("handle_close-modal")


  bgr_close.addEventListener('click', function (event) {
    if (event.target.closest(".form-box")) {
      return;
    }
    wrapper.classList.remove('active-btnlogin');
    document.body.style.overflow = "auto"
    document.querySelector(".content-list").style.zIndex = "0"
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

  var isValidUsername = validateInput(username, /^[a-zA-Z0-9_-]{3,16}$/);
  if (isValidUsername) {
    console.log("Username is valid.");
  } else {
    console.log("Username is invalid.");
  }

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
    document.querySelector("body").style.overflow = "auto"
    contentList.style.zIndex = '0';
    document.querySelector(".btnSignUp").classList.add("show");


  } else alert("Đăng nhập thất bại !")
}

var SignUp = document.querySelector(".btnSignUp");

SignUp.addEventListener("click", function (event) {
  event.preventDefault();
  SignUp.classList.remove("show");
  document.getElementById("info_user").innerHTML = "Đăng Nhập";
})



// Biểu thức Chính Quy
function validateInput(inputValue, regexPattern) {
  var regex = new RegExp(regexPattern);
  return regex.test(inputValue);
}

var toast = document.querySelector('.toast');

function checkUser() {
  let input = document.getElementById("username-res");
  let value = input.value;
  let error = document.getElementById("chkUser");
  const regex = /^[a-zA-Z0-9!@#$%^&*]{6,}$/;
  if (value === "") {
    document.querySelector('.toast_msg').innerHTML = "User không được để trống!";
    toast.classList.add('animation-fadeIn');
    setTimeout(function () {
      toast.classList.remove('animation-fadeIn');
    }, 4000);
  }
  else if (regex.test(value)) {
    error.innerHTML = "";
  } else {
    document.querySelector('.toast_msg').innerHTML = "User phải có ít nhất 8 ký tự (có thể có chữ, số và ký tự đặc biệt!)";
    toast.classList.add('animation-fadeIn');
    setTimeout(function () {
      toast.classList.remove('animation-fadeIn');
    }, 4000);
  }
}

function checkEmail() {
  let input = document.getElementById("email-res");
  let value = input.value;
  let error = document.getElementById("chkEmail");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === "") {
    document.querySelector('.toast_msg').innerHTML = "Email không được để trống!";
    toast.classList.add('animation-fadeIn');
    setTimeout(function () {
      toast.classList.remove('animation-fadeIn');
    }, 4000);
  }
  else if (regex.test(value)) {
    error.innerHTML = "";
  } else {
    document.querySelector('.toast_msg').innerHTML = "Email không hợp lệ";
    toast.classList.add('animation-fadeIn');
    setTimeout(function () {
      toast.classList.remove('animation-fadeIn');
    }, 4000);
  }
}

function checkPassword() {
  let input = document.getElementById("password-res");
  let value = input.value;
  let error = document.getElementById("chkPassword");
  const regex = /^[a-zA-Z0-9!@#$%&\.]{8,}/;
  if (value === "") {
    document.querySelector('.toast_msg').innerHTML = "Password không được để trống!";
    toast.classList.add('animation-fadeIn');
    setTimeout(function () {
      toast.classList.remove('animation-fadeIn');
    }, 4000);
  }
  else if (regex.test(value)) {
    error.innerHTML = "";
  } else {
    document.querySelector('.toast_msg').innerHTML = "Password phải có ít nhất 8 ký tự (bao gồm chữ, số và ký tự đặc biệt)";
    toast.classList.add('animation-fadeIn');
    setTimeout(function () {
      toast.classList.remove('animation-fadeIn');
    }, 4000);
  }
}

function checkRetypePassword() {
  let mk, mk2;
  mk = document.getElementById('password-res').value;
  mk2 = document.getElementById('retypepassword-res').value;
  let error = document.getElementById("chkRetypePassword");
  if (mk == mk2) {
    error.innerHTML = "";
  } else {
    document.querySelector('.toast_msg').innerHTML = "Password không khớp!";
    toast.classList.add('animation-fadeIn');
    setTimeout(function () {
      toast.classList.remove('animation-fadeIn');
    }, 4000);
    return false;
  }
}

//Mở modal thành viên nhóm
var btnShowmembers = document.querySelector("#modal-member");
var closeMembers = document.querySelector("#close");
var bodymembers = document.querySelector("#members");
var notclose = document.querySelector("#notclose")

btnShowmembers.addEventListener("click", function () {
  document.querySelector("#members").style.display = "block";
  document.body.style.overflow = "hidden"
})

closeMembers.addEventListener("click", function () {
  document.querySelector("#members").style.display = "none";
  document.body.style.overflow = "auto"
})

bodymembers.addEventListener("click", function (event) {
  if (event.target.closest("form")) {
    return;
  }
  document.querySelector("#members").style.display = "none";
  document.body.style.overflow = "auto"
})




