import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  
  const getPrice = () => {
    return (props.basePrice + props.sizes.find((size) => currentSize === size.name).additionalPrice);
  }
  const addToCart = e => {
    e.preventDefault()
    console.log('Summary');
    console.log('=========');
    console.log('Name:', props.title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductOptions
          addToCart={addToCart}
          currentSize={currentSize}
          currentColor={currentColor}
          colors={props.colors}
          sizes={props.sizes}
          setCurrentSize={setCurrentSize}
          setCurrentColor={setCurrentColor}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
