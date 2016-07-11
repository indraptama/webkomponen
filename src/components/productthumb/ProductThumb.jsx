/**
usage example:
  <ProductThumb
    brand="Marina Vapes"
    name="That Thai Thea Tho"
    price="50000"
    img="img/juice.jpg"
    link="index.html"
    linkBrand="#"
  ></ProductThumb>
*/


import React from 'react';

const ProductThumb = ({brand,name,price,img,link,linkBrand}) => {

  const imgStyle = {
    backgroundImage: 'url(' + img + ')',
  }

  return (
    <div href={link} className="ProductThumb">
      <div className="ProductThumb-container">
        <div className="ProductThumb-img" style={imgStyle}>
          <div className="ProductThumb-imgRatio"></div>
          <a className="ProductThumb-imgContent" href={link}>
            <img src={img} />
          </a>
        </div>
        <div className="ProductThumb-body">
          <div className="ProductThumb-brand">
            <a href={linkBrand}>{brand}</a>
          </div>

          <div className="ProductThumb-name">
            <a href={link}>{name}</a>
          </div>
          <div className="ProductThumb-price">
            Rp {price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductThumb;
