import React, { useEffect } from "react";
import { products } from "../../utils/products";
import "./Collection.css";
import gsap from "gsap";

function Collection() {
  useEffect(() => {
    const items = gsap.utils.toArray(".collection-item");

    // Establecer estado inicial
    gsap.set(items, {
      opacity: 0,
      y: 50,
    });

    // Animar hacia el estado visible
    gsap.to(items, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <ul className="collection-list">
      {products.map((product) => (
        <li key={product.id} className="collection-item">
          <img
            src={product.img}
            alt={product.nombre}
            className="collection-image"
          />
          <h2 className="collection-name">{product.nombre}</h2>
        </li>
      ))}
    </ul>
  );
}

export default Collection;