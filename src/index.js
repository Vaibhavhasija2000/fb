import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilder';




ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
