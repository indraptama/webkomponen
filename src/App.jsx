import React from 'react';
import StepCard from './components/stepcard/StepCard.jsx';
import ProductThumb from './components/productthumb/ProductThumb.jsx';
import ProductThumb2 from './components/productthumb2/ProductThumb2.jsx';

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
          img="img/juice.jpg"
          link="index.html"
          linkBrand="#"
        ></ProductThumb>

        <hr/>

        <h3> ProductThumb 2 </h3>
        <ProductThumb2 />
      </div>
    );
  }
}
