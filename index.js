const menuCartElement = document.querySelector(".menu-cart");
const cartItemsElement = document.querySelector(".cart-list");
const cartElement = document.querySelector(".cart");
const mainElement = document.querySelector(".menu-main");
const menu = document.querySelector(".menu");
const addToCartElement = document.querySelector(".add-to-cart");
const productTitleElement = document.querySelector(".product")

const productID = document.querySelector('product');
addToCartElement.addEventListener("click", () => {
    console.log("add to cart");
    key = productTitleElement;
    let existingItem = cart.find(item => item.id === productID)
    if (existingItem) {
        existingItem.quantity += 1;
    }
    else {
        console.log("W");
    }
})

 let products = [
    {
        id: 1,
        name: "6 Cheese",
        images: "https://www.mashed.com/img/gallery/every-dominos-pizza-ranked-from-worst-to-best/13-dominos-wisconsin-6-cheese-pizza-1601322750.jpg",
        price: 10.99,
    },
    {
        id: 2,
        name: "Veggie",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRew1G46yIxpX9-_EKL7YJXgewHlD6mPJvGVQ&s",
        price: 18.57,
    },
    {
        id: 3,
        name: "MeatZZa",
        images: "https://media-cdn.tripadvisor.com/media/photo-s/14/02/3d/1d/meatzza.jpg",
        price: 16.39,
    },
];

let cart = [];

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


// const openShopping = document.querySelector(".shopping")
// const closeShopping = document.querySelector(".close-shopping");
// const list = document.querySelector(".list");
// const listCart = document.querySelector(".list-cart");
// const total = document.querySelector(".total");
// const body = document.body;
// const quantity = document.querySelector(".quantity");

// openShopping.addEventListener("click", () => {
//     body.classList.add("active")
//     if (window.innerWidth <= 768) {
//         document.querySelector(".cart").style.left = '0';
//     }
// })

// closeShopping.addEventListener("click", () => {
//     body.classList.remove("active")
//     if (window.innerWidth <= 768) {
//         document.querySelector(".cart").style.left = '4000%';
//     }
// })

// let products = [
//     {
//         id: 1,
//         name: "6 Cheese",
//         images: "https://www.mashed.com/img/gallery/every-dominos-pizza-ranked-from-worst-to-best/13-dominos-wisconsin-6-cheese-pizza-1601322750.jpg",
//         price: 10.99,
//     },
//     {
//         id: 2,
//         name: "Veggie",
//         images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRew1G46yIxpX9-_EKL7YJXgewHlD6mPJvGVQ&s",
//         price: 18.57,
//     },
//     {
//         id: 3,
//         name: "MeatZZa",
//         images: "https://media-cdn.tripadvisor.com/media/photo-s/14/02/3d/1d/meatzza.jpg",
//         price: 16.39,
//     },
// ];


// const listCards = [];
// const initApp = () => {
//     products.forEach((value, key) => {
//         let newdiv = document.createElement("div");
//         newdiv.classList.add("item");
//         newdiv.innerHTML = `
//             <img src = "${value.images}">
//             <div class = "title">${value.name}</div>
//             <div class = "price">$${value.price.toLocaleString()}</div>
//             <button onclick="addToCart(${key})">Add to Cart</button>
//         `;
//         list.appendChild(newdiv);
//     })
// }

// initApp();

// const addToCart = (key) => {
//     if (listCards[key] == null) {
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     else {
//         changeQuantity(key, listCards[key].quantity + 1);
//         // console.log("test");
//     }
//     relaodCart();
// }

// const relaodCart = () => {
//     console.log("reloading");
//     listCart.innerHTML = "";
//     let count = 0;
//     let ttlPrice = 0;
//     listCards.forEach((value, key) => {
//         ttlPrice += value.price;
//         count += value.quantity;
//         console.log(value);
//         if (value != null) {
//             let newli = document.createElement("li");
//             newli.innerHTML = `
//                 <div class = "cart-item-content"> 
//                     <div class = "cardTitle">${value.name}</div>
//                     <div style = "display:flex">
//                     <div class = "cardPrice">${value.price.toLocaleString()}</div>
//                     <div style = "display:flex; margin-left: auto">
//                         <button style = "background-color: #blue"
//                         class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})"> - </button>
//                         <div class = "count"> ${value.quantity} </div>
//                         <button style = "background-color: #green"
//                         class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})"> + </button>
//                     </div>
//                     </div>
//                 </div>
//             `
//             listCart.appendChild(newli);
//         }
//         total.innerText = ttlPrice.toLocaleString();
//         quantity.innerText = count;
//     })
// }

// const changeQuantity = (key, quantity) => {
//     if (quantity == 0) {
//         delete listCards[key];
//         total.innerText = 0;
//     }
//     else {
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     relaodCart();
// }