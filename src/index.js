import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Route, HashRouter, BrowserRouter,Switch,Router } from 'react-router-dom'
import store from './store.jsx'
import { Provider } from 'react-redux'
import Second from './components/Second';
import First from './components/First';
import Home from './components/Home';
import Third from './components/Third';
import SubmitPage from './components/SubmitPage'
import Feed from './components/Feed'
import createBrowserHistory  from  'history/createBrowserHistory';
import signUpFilter from './components/hoc/SignUpHOC'

const customHistory = createBrowserHistory()
const router = (
    <Provider store={store}>
        <Router history={customHistory}>
            <Switch className='container'>
                <Route exact path='/' component={signUpFilter(App)} history ={customHistory}/>
                <Route exact path='/First' component={First} history ={customHistory}/>
                <Route exact path='/Second' component={signUpFilter(Second)} history ={customHistory}/>
                <Route exact path='/Submit' component={signUpFilter(SubmitPage)} history ={customHistory}/>
                <Route exact path='/Third' component={signUpFilter(Third)} history ={customHistory}/>
                <Route exact path='/Feed' component={signUpFilter(Feed)} history ={customHistory}/>
            </Switch>
        </Router >
    </Provider>    
);
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
