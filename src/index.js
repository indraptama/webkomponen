require('./style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx';
import Apps from './App.jsx';

ReactDOM.render(<Apps />, document.querySelector('#app'));
