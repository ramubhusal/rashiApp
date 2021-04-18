import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';

import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
import '../node_modules/framework7/framework7-bundle.min.css';

// Init F7-React Plugin
Framework7.use(Framework7React);

ReactDOM.render(<Main />, document.getElementById('root'));