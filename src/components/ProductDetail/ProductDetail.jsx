import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { products } from "../../utils/products";
import "./ProductDetail.css"; 
import gsap from "gsap";// Asegúrate de tener este archivo CSS

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }
  useEffect(() => {
    gsap.from(".product-detail", {
      opacity: 1,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
  
  return (
    <div className="product-detail">
      <div className="product-image-container">
        <img src={product.img} alt={product.nombre} />
        <button className="view-button"> Ver en 3d </button>
      </div>

      <div className="product-info">
        <h1 className="product-title">{product.nombre}</h1>

        <p className="product-description">{product.descripcion}</p>
        <p className="product-price">${product.precio}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
