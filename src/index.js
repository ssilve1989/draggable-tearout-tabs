/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './routes';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
