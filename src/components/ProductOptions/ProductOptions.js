import styles from './ProductOptions.module.scss'
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';


const ProductOptions = props => {
    return (
        <form onSubmit={props.addToCart}>
          <OptionSize setCurrentSize={props.setCurrentSize} currentSize={props.currentSize} sizes={props.sizes} />
          <OptionColor setCurrentColor={props.setCurrentColor} currentColor={props.currentColor} colors={props.colors} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
        )
}

ProductOptions.propTypes = {
    addToCart: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
}

export default ProductOptions;