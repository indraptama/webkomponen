import React from "react";
import cssModules from 'react-css-modules';
import styles from './ProductThumb2.css';

const ProductThumb2 = () => {
  return (
    <div styleName="ProductThumb2">
      <div styleName="ProductThumb2-container">
        <div styleName="ProductThumb2-img">
          <a href="">
            <img src="img/juice.jpg"/>
          </a>
        </div>
        <div styleName="ProductThumb2-body">
          <div styleName="ProductThumb2-desc">
            <div href="#" styleName="ProductThumb2-brand">Juice Shop</div>
            <div href="#" styleName="ProductThumb2-title">Juice Shop Strawberry</div>
            <div styleName="ProductThumb2-price">Rp. 50.000</div>
          </div>
          <div styleName="ProductThumb2-action">
            <button>Hallo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cssModules(ProductThumb2, styles);
// export default CSSModules(Table, styles);
