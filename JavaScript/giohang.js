const btn = document.querySelectorAll(".button");
const tbns = document.querySelectorAll("fa-cart-plus")
//cpnslo.log(btn)

btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector("h1").innerText
            var productPrice = product.querySelector("span").innerText

            // console.log(productPrice)
            addCart(productImg, productName, productPrice)
        }

    })
});
function addCart(productImg, productName, productPrice) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            // alert("Sản phẩm đã có trong giỏ hàng !")
           
            document.querySelector("#tb").innerHTML = "Sản phẩm đã có trong giỏ hàng,nếu cần thêm vui lòng tăng số lượng !"
            return
        }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img src="' + productImg + '" alt="" style="width: 70px;"><span class="title">' + productName + '</span></td><td><p><span class="price">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width: 35px;outline: none;" type="number" value="1" min="1" id="number"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var carTable = document.querySelector("tbody")
    carTable.append(addtr)
    document.querySelector("#tb").innerHTML = ""
    cartTotal();
    cartDelete();
}

//<>--------cartTotal---------------</>
function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem)
    var total = 0;
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = parseInt(cartItem[i].querySelector("input").value);
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        productPrice = productPrice.replace(".", "")
        productPrice = parseFloat(productPrice)
        if (!isNaN(productPrice)) {
            total += inputValue * productPrice * 1000;
        }
    }
    // console.log(total);
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = total.toLocaleString('de-DE')

    var pricesValue = document.querySelector(".prices")
    // console.log(pricesValue)
    pricesValue.innerHTML = total.toLocaleString('de-DE')
    inputchange();
}

//<>--------cart_delete---------------</>

function cartDelete() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function (event) {
            var cartdelete = event.target
            var cartItemtr = cartdelete.parentElement.parentElement
            cartItemtr.remove()
            cartTotal()
            // console.log(cartItemtr)

        });

    }
}
/// Thay doi số lượng

function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr")
    document.querySelector("#tb").innerHTML ="";
    for (var i = 0; i < cartItem.length; i++) {
        var valueInput = cartItem[i].querySelector("input")
        valueInput.addEventListener("change", function () {
            cartTotal();
        });

    }
}

var btnClose = document.querySelector(".close")
var btnshow = document.querySelector(".cart-icon")

btnshow.addEventListener("click", function () {
    document.querySelector(".cart").style.display = "block"
    document.querySelector(".content-cotai").style.display = "grid"
    document.querySelector(".content-cotai").style.gridtemplatecolumns = "60% 40%"
    var items = document.querySelectorAll(".product-item"); // Đã sửa lại từ 'document.querySelectorAllA' sang 'document.querySelectorAll'
    for (var i = 0; i < items.length; i++) {
        items[i].style.width = "28%";
    }
});

btnClose.addEventListener("click", function () {
    document.querySelector(".cart").style.display = "none"
    document.querySelector(".content-cotai").style.display = "flex"
    document.querySelector(".content-cotai").style.width = "100%"

    var items = document.querySelectorAll(".product-item"); // Đã sửa lại từ 'document.querySelectorAllA' sang 'document.querySelectorAll'
    for (var i = 0; i < items.length; i++) {
        items[i].style.width = "20%";
    }
    document.querySelector("#tb").innerHTML ="";
});



//Đây là JS mới để mở bảng thanh toán

// const buyBtns = document.querySelectorAll('.cart-icon') //gom 3 nut thanh 1 bien
// const model = document.querySelector('.cart')
// const modelClose = document.querySelector('.close')
// const modelContainer = document.querySelector('.model-container')

// //Hàm hiển thị model mua vé, them class open vào class model
// function showBuyTicket() {
//     model.classList.add('open')
// }
// //Hàm ẩn model mua vé, loại bỏ class open trong class model
// function hideBuyTickets() {
//     model.classList.remove('open')
// }

// for (const buyBtn of buyBtns) { // mot bien btn nam trong btns
//     buyBtn.addEventListener('click', showBuyTicket)
// }

// modelClose.addEventListener('click', hideBuyTickets)

// //Tránh bị ẩn buy-model khi click vào trong form (liên quna đến đến nổi bọt)
// model.addEventListener('click', hideBuyTickets)
// modelContainer.addEventListener('click', function (event) {
//     event.stopPropagation()
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

