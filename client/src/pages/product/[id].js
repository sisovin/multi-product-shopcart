import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import productService from '../../services/productService';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import formatPrice from '../../utils/formatPrice';
import Button from '../../components/Button';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      productService.getProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="product-detail">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{formatPrice(product.price)}</p>
            <Button onClick={() => console.log('Add to Cart')}>Add to Cart</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
