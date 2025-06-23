const menuCartElement = document.querySelector(".menu-cart");
const cartItemsElement = document.querySelector(".cart-list");
const cartElement = document.querySelector(".cart");
const mainElement = document.querySelector(".menu-main");
const menu = document.querySelector(".menu");
const addToCartElements = document.querySelectorAll(".add-to-cart");
const productTitleElement = document.querySelector(".product")
const cartTitleElement = document.querySelector(".cart-title");
const cartBtnElement = document.querySelector(".cart-btn");
const cartAmtElement = document.querySelector(".cart-amount");
const cartCountElement = document.querySelector(".cart-count");
const clearCartBtnElement= document.querySelector(".clear-cart-btn");

cartBtnElement.addEventListener("click", () => {
    cartElement.classList.toggle('hide');
})


const productID = document.querySelector('product');
// console.log(addToCartElements);
let cart = {};
cartElements = {};

clearCartBtnElement.addEventListener("click", () => {
    cart = {};
    cartItemsElement.innerHTML = "";
    ttlAmount = 0;
    cartAmtElement.innerText = `$0.00`;
})

let ttlAmount = 0;

updateCartTotal = () => {
    cartAmtElement.innerText = `$ ${ttlAmount.toFixed(2)}`;
}

updateCartCount = () => {
    let count = 0;
    for (let product in cart) {
        count += cart[product];
    }
    cartCountElement.innerText = count;
}

addToCartElements.forEach((el) => {
    el.addEventListener("click", () => {
        const product = el.id;
        const productPrice = products[product].price;
        if (cart[product]) {
            cart[product] += 1;
            const quantityElement = cartElements[product].querySelector(".product-quantity") 
            quantityElement.innerText = cart[product];
            ttlAmount += productPrice;
            updateCartTotal();
            updateCartCount();
        }
        else {
            cart[product] = 1;
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.setAttribute("data-product-id", product);
            cartItem.innerHTML = `
                <div class="cart-item-content">
                    <span class="product-name">${products[product].name}</span>
                    <div class="cart-quantity-controls">
                    <button class="decrease">-</button>
                    <span class="product-quantity">${cart[product]}</span>
                    <button class="increase">+</button>
                    </div>
                </div>
            `;

            cartElements[product] = cartItem;
            cartItemsElement.appendChild(cartItem);

            const increaseBtn = cartItem.querySelector(".increase");
            const quantityEl = cartItem.querySelector(".product-quantity");
            const decreaseBtn = cartItem.querySelector(".decrease");

            decreaseBtn.addEventListener("click", () => {
                if (cart[product] > 1) {
                    cart[product] -= 1;
                    quantityEl.innerText = cart[product];
                    ttlAmount -= productPrice;
                    updateCartCount();
                }
                else {
                    delete cart[product];
                    cartItem.remove();
                    delete cartElements[product];
                    quantityEl.innerText = cart[product];
                    ttlAmount -= productPrice;
                }
                updateCartTotal();
                updateCartCount();
            })

            increaseBtn.addEventListener("click", () => {
                cart[product] += 1;
                quantityEl.innerText = cart[product];
                console.log(cart[el.id]);
                cartAmtElement.innerText += cart[product].price;
                ttlAmount += productPrice;
                updateCartTotal();
                updateCartCount();
            })
            ttlAmount += productPrice;
            updateCartTotal();
            updateCartCount();
        }

        // console.log(cart[el.id]);
        //have the id and each of it occurences. add html element to cart-title

    }) 
})


 let products = {
    "product2": {
        id: 1,
        name: "6 Cheese",
        images: "https://www.mashed.com/img/gallery/every-dominos-pizza-ranked-from-worst-to-best/13-dominos-wisconsin-6-cheese-pizza-1601322750.jpg",
        price: 10.99,
    },
    "product1": {
        id: 2,
        name: "Veggie",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRew1G46yIxpX9-_EKL7YJXgewHlD6mPJvGVQ&s",
        price: 18.57,
    },
    "product3": {
        id: 3,
        name: "MeatZZa",
        images: "https://media-cdn.tripadvisor.com/media/photo-s/14/02/3d/1d/meatzza.jpg",
        price: 16.39,
    },
 };

menuCartElement.addEventListener("click", () => {
    cartElement.classList.toggle('hide');
})

const addToCart = (key) => {
    // if (cart[key] == null) {
    //     cart[key] = JSON.parse(JSON.stringify(products[key]));
    //     cart[key].quantity = 1;
    // }
    console.log(cart[key].name);
}