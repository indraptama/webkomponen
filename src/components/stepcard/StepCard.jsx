import React from 'react';

const StepCard = ({num,img,title,desc}) => {
  const Style = {
    backgroundImage: 'url(' + img + ')',
  };

  return (
    <div className="StepCard StepCard--floatShadow">
      <div className="StepCard-container">
        <span className="StepCard-number">{num}</span>
        <div className="StepCard-img" style={Style}>
          <img src={img} />
        </div>
        <div className="StepCard-body">
          <h4 className="StepCard-title">{title}</h4>
          <p className="StepCard-desc">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default StepCard;



// -- React Class Test
// export default class StepCard extends React.Component {
//   render() {
//     return (
//       <div className="StepCard StepCard--floatShadow">
//         <div className="StepCard-img">
//           <span className="StepCard-number">1</span>
//           <img src="http://loremflickr.com/480/360" />
//         </div>
//         <div className="StepCard-body">
//           <h4 className="StepCard-title">Hallo</h4>
//           <p className="StepCard-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//         </div>
//       </div>
//     );
//   }
// }
