import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './index.css';
import moment from 'moment';
import App from './App';
import PageNotFound from './components/PageNotFound';
import CaptureImage from './components/CaptureImage';
import ProductDisp from './components/ProductDisp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div className="Site container-fluid">
    <div className="Site-content">
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/captureProduct' component={CaptureImage} />
                    <Route path='/product' component={ProductDisp} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    </div>
    <footer className="Footer">
        <div>Copyright &copy; {moment().format('YYYY')} Infosys Limited.</div>
    </footer>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
