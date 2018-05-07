import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, {history} from './store'
import App2 from './containers/app'

ReactDOM.render(
	<div>
		<App />

		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					<App2/>
				</div>
			</ConnectedRouter>
		</Provider>
	</div>

	, document.getElementById('root'));
registerServiceWorker();
