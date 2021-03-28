import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
//* import of components and developer packages
import {rootReducer} from "./reducers";


// app root store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// store provider
const StoreProvider = ({children}) => (
    <Provider store={store}>{children}</Provider>
);

export {
    StoreProvider
}