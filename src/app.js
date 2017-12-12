import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';
import { startLoadingMovieDetails, dataFetched } from './actions/movies';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const renderApp = () => {
    console.log(store.getState().movies.length);
    if (store.getState().movies.length == 249) {
        ReactDOM.render(jsx, document.getElementById("app"));
        unsubscribe();
    }

}

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

store.dispatch(startLoadingMovieDetails());

let unsubscribe = store.subscribe(renderApp);