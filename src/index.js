import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { StateProvider } from './components/StateProvider';
import reducer,{initialState} from './components/reducer';




ReactDOM.render( 
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
        <App />
        </StateProvider>
       
    </React.StrictMode>

, document.getElementById( 'root' ) );
registerServiceWorker();
