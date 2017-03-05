/**
 * Include CSS
 * -----------
 * We do this here so that we can hot-reload it later with webpack-dev-server, and for simplicity in development.
 * In production, however, this needs to be included from the HTML file as a separate css file.
 */
import styles from './styles'; // eslint-disable-line no-unused-vars

// JavaScript dependencies
import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { segmentReducer } from './redux-segmentize';

import { Counter, CustomComponent } from './sample-components';
import {
    countReducer,
    customValue,
    revisionCount
} from './sample-reducers';

const rootReducer = combineReducers({
    count: segmentReducer(countReducer),
    customValue,
    revisionCount: segmentReducer(revisionCount)
});

const store = createStore(rootReducer);
window.s = store;

render((
    <Provider store={store}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 header">
                    <h1>Welcome to Webpack!</h1>
                    <p>Feel free to start hacking!</p>
                </div>
                <div className="col-sm-12">
                    <Counter />
                    <Counter subscriberID="customIdentifier" />
                    <Counter id="anotherCustomIdentifier" />
                    <Counter id="dontUseThisID" subscriberID="useThisID" />
                    <Counter subscriberID="componentsLinked"/>
                    <Counter subscriberID="componentsLinked"/>
                    <CustomComponent />
                </div>
            </div>
        </div>
    </Provider>
), document.getElementById('react-wrapper'))
