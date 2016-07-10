import React from 'react';
import StepCard from './components/stepcard/StepCard.jsx';
import ProductThumb from './components/productthumb/ProductThumb.jsx';

export default class Apps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 className="Title-component">StepCard Component</h3>
        <StepCard
          num="1"
          title="hahahahahaha"
          img="http://loremflickr.com/480/360"
          desc="Lorem ipsum coloradao manga ini adalah sangat indah"
        ></StepCard>
        <hr />
        <h3 className="Title-component">ProductThumb Component</h3>
        <ProductThumb
          brand="Marina Vapes"
          name="That Thai Thea Tho"
          price="50000"
          img="http://lcdn.westcoastvapesupply.com/801AA8F/westcoastvapesupply/prodImages/lrg_img_2003.jpg"
          link="index.html"
          linkBrand="#"
        ></ProductThumb>
      </div>
    );
  }
}
