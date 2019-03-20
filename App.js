/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { Provider } from 'react-redux'
import reducers from './reducers';
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import React, {Component} from 'react';
import RootNavigation from './navigation/RootNavigation';
import codePush from "react-native-code-push";
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,installMode: codePush.InstallMode.IMMEDIATE};
import instance from 'axios';
const axios = instance.create({
    withCredentials: true,
    baseURL: "https://aapi.otopac.com.hk"
});
import {fetchMiddleware} from './axios';
let middleware = [thunk, fetchMiddleware(axios)];
if (process.env.NODE_ENV !== 'production') {
    function logger({ getState }) {
        return next => action => {
            //console.log('will dispatch', action);
            // Call the next dispatch method in the middleware chain.
            let returnValue = next(action)
            // console.log('state after' +action.type, getState())
            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue
        }
    }
    middleware = [...middleware, logger]
}

store = createStore(reducers, {},  applyMiddleware(...middleware));
type Props = {};
class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <RootNavigation/>
            </Provider>
        );
    }
}

App = codePush(codePushOptions)(App);
export default App
