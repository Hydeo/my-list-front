import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, {history} from './store'
import App from './containers/app'


ReactDOM.render(
	<div>
		
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<div>
					<App/>
				</div>
			</ConnectedRouter>
		</Provider>
	</div>

	, document.getElementById('root'));