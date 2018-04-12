import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DatePage from './Components/DatePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
registerServiceWorker();
