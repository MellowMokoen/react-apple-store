import React from 'react';
import products from './Products'; 
import '../Styles/ProductDetails.css'
const ProductDetails= () => {
  return (
    <div>
      <h2>Product Details</h2>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Rating: {product.rating}</p>
          <p>Description: {product.description}</p>
          <p>Price: {`${product.currency} ${product.price.toFixed(2)}`}</p>
          <h4>Specifications:</h4>
          <ul>
            {product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;

