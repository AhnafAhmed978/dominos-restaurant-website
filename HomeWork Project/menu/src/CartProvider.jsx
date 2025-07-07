import React from "react";
import CartApp from "./CartApp";

const CartProvider = () => {
  const products = [
    {
      title: "Veggie Pizza",
      price: 18.57,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRew1G46yIxpX9-_EKL7YJXgewHlD6mPJvGVQ&s", // Veggie Pizza image
    },
    {
      title: "Cheese Pizza",
      price: 10.99,
      image: "https://www.mashed.com/img/gallery/every-dominos-pizza-ranked-from-worst-to-best/13-dominos-wisconsin-6-cheese-pizza-1601322750.jpg", // Cheese Pizza image
    },
    {
      title: "MeatZZa",
      price: 16.39,
      image: "https://media-cdn.tripadvisor.com/media/photo-s/14/02/3d/1d/meatzza.jpg", // MeatZZa Pizza image
    },
  ];

  return <CartApp products={products} />;
};

export default CartProvider;
