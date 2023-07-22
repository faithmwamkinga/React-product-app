import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./style.css";
const ProductInfoPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductInfo();
  }, [productId]);
  if (!product) {
    return <p>Loading more product details...</p>;
  }
  return (
    <div className='info'>
      <h1>Product Details</h1>
      
      <div className='products'>
     
        <img src={product.thumbnail} alt={product.title} />
        </div>
        <p className='brand'>Title: {product.title}</p>
        <p className='brand'>Brand: {product.brand}</p>
        <p className='title'>Price: {product.price}</p>
        <p className='title'>Rating: {product.rating}</p>
     
    </div>
  );
};
export default ProductInfoPage;
