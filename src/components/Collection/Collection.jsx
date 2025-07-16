import React, { useEffect } from "react";
import { products } from "../../utils/products";
import "./Collection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Collection() {
  useEffect(() => {
    const items = gsap.utils.toArray(".collection-item");

    items.forEach((item) => {
      gsap.fromTo(
        item,
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
          },
        }
      );
    });

    // Limpiar ScrollTrigger al desmontar
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="collection-container">
      <h1 className="collection-title"> Collection</h1>
      <h2 className="collection-subtitle">Discover what we make</h2>
      <ul className="collection-list">
        {products.map((product) => (
          <li key={product.id} className="collection-item">
            <Link to={`/collection/${product.id}`}>
              <div className="image-container">
                <img
                  loading="lazy"
                  src={product.img}
                  alt={product.nombre}
                  className="collection-image primary"
                />
                <img
                  loading="lazy"
                  src={product.img2}
                  alt={`${product.nombre} hover`}
                  className="collection-image secondary"
                />
              </div>
              <h2 className="collection-name">{product.nombre}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Collection;
