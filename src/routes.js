import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Pages
import App from './pages/App';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

// Router and the routes that utilize their respective components
export default (
    <Router history={browserHistory} >
		<Route component={App} >
			<Route component={Layout} >
				<Route path="/" component={Home} />
			</Route>
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
);
