import React from 'react';
import StepCard from './components/stepcard/StepCard.jsx';


export default class Apps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StepCard
          num="1"
          title="hahahahahaha"
          img="http://loremflickr.com/480/360"
          desc="Lorem ipsum coloradao manga ini adalah sangat indah"
        ></StepCard>
      </div>
    );
  }
}
