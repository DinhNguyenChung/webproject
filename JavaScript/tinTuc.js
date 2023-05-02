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
    btnSuKien.classList.remove('clicked');
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


