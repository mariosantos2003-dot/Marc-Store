import React, { useEffect } from "react";
import { products } from "../../utils/products";
import "./Collection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Collection() {
  useEffect(() => {
    const items = gsap.utils.toArray(".collection-item");
  
    items.forEach((item) => {
      gsap.fromTo(item, 
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          }
        }
      );
    });

    // Limpiar ScrollTrigger al desmontar
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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