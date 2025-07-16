import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../utils/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h1 className="product-name">{product.nombre}</h1>
      <img src={product.img} alt={product.nombre} />
      <p className="product-description">Descripción o más imágenes aquí...</p>
    </div>
  );
}

export default ProductDetail;
