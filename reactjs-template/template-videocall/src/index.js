import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './approuter';

ReactDOM.render(   <AppRouter />, document.getElementById('root'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}