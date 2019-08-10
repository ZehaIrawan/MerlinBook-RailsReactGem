import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage'
import { fetchBooks } from '../redux/actions/index'
import configureStore from '../redux/configureStore';

const store = configureStore();

const App = () => {
  useEffect(() => {
    store.dispatch(fetchBooks())
  })
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
}
export default App;
