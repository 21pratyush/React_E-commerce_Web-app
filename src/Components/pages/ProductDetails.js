/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';
import { useSpring } from 'react-spring';
import * as ProductDetailsStyle from '../../Styles/ProductDetailsStyle';


const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { title } = useParams();
  const { addItemToCart, isItemInCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const productData = response.data.find(
          item => item.title.trim() === title.trim()
        );
        setProduct(productData);
        if (productData) {
          const relatedProductsData = response.data.filter(
            item => item.category === productData.category && item.id !== productData.id
          );
          setRelatedProducts(relatedProductsData);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [title]);

  useEffect(() => {
    if (product) {
      const isInCart = isItemInCart(product.id);
      setAddedToCart(isInCart);
    }
  }, [product, isItemInCart]);

  const handleAddToCart = (product) => {
    if (!addedToCart) { // Adding this condition to prevent adding the item multiple times
      addItemToCart(product);
      setAddedToCart(true);
    }
  };

  const productImageAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.5)' },
    config: { tension: 20, friction: 15 },
  });

  return (
    <>
      <ProductDetailsStyle.ProductDetailsWrapper>
        {product ? (
          <>
            {product && (
              <ProductDetailsStyle.AnimatedProductImage
                src={product.image}
                alt={product.title}
                style={productImageAnimation}
              />
            )}
            <ProductDetailsStyle.ProductDetailsContainer>
              <ProductDetailsStyle.ProductTitle>{product.title}</ProductDetailsStyle.ProductTitle>
              <ProductDetailsStyle.ProductPrice>Price: <span>Rs.</span> {product.price}</ProductDetailsStyle.ProductPrice>
              <ProductDetailsStyle.ProductRatings>Rating: {product.rating.rate}</ProductDetailsStyle.ProductRatings>
              <ProductDetailsStyle.ProductCategory>Category -{product.category}</ProductDetailsStyle.ProductCategory>
              <ProductDetailsStyle.ProductDescription>Description: {product.description}</ProductDetailsStyle.ProductDescription>
              <ProductDetailsStyle.AddToCartButton
                added={addedToCart ? true : undefined}  //used ternary operator to avoid warning-error in console
                onClick={() => handleAddToCart(product)}
              >
                {addedToCart ? (
                  <>
                    <ProductDetailsStyle.TickIcon /> Added
                  </>
                ) : (
                  'Add to Cart'
                )}
              </ProductDetailsStyle.AddToCartButton>
            </ProductDetailsStyle.ProductDetailsContainer>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </ProductDetailsStyle.ProductDetailsWrapper>
      <ProductDetailsStyle.RelatedProducts_Section>
        <h2>Related Products: </h2>
        {relatedProducts.length > 0 && (
          <ProductDetailsStyle.ProductItemsWrapper>
            {relatedProducts.map((relatedProduct) => (
              <ProductDetailsStyle.ProductItemCard key={relatedProduct.id}>
                <Link to={{ pathname: `/ProductDetails/${encodeURIComponent(relatedProduct.title)}`, state: { product: relatedProduct } }}>
                  <ProductDetailsStyle.ProductItemCardImage
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                  />
                </Link>
                <ProductDetailsStyle.ProductItemTitle>
                  <Link to={{ pathname: `/ProductDetails/${encodeURIComponent(relatedProduct.title)}`, state: { product: relatedProduct } }}>
                    {relatedProduct.title}
                  </Link>
                </ProductDetailsStyle.ProductItemTitle>
                <ProductDetailsStyle.ProductItemPrice>Rs. {relatedProduct.price}</ProductDetailsStyle.ProductItemPrice>
              </ProductDetailsStyle.ProductItemCard>
            ))}
          </ProductDetailsStyle.ProductItemsWrapper>
        )}
      </ProductDetailsStyle.RelatedProducts_Section>
      <Link to="/ProductListing">
        <ProductDetailsStyle.ExploreButton>
          Explore more...
        </ProductDetailsStyle.ExploreButton>
      </Link>
    </>
  );
};

export default ProductDetails;
