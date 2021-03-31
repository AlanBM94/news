import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/app.scss';
import { Provider } from 'react-redux';
import { store } from './state/store';
import Landing from './pages/Landing';
import Entertainment from './pages/Entertainment';
import Sports from './pages/Sports';
import Politics from './pages/Politics';
import Economy from './pages/Economy';
import SearchResult from './pages/SearchResult';
import Science from './pages/Science';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route
                            exact
                            path="/entertainment"
                            component={Entertainment}
                        />
                        <Route exact path="/sports" component={Sports} />
                        <Route exact path="/science" component={Science} />
                        <Route exact path="/politics" component={Politics} />
                        <Route exact path="/economy" component={Economy} />
                        <Route
                            exact
                            path="/search/:keyword"
                            component={SearchResult}
                        />
                    </Switch>
                </Router>
                <Footer />
            </div>
        </Provider>
    );
};

export default App;
