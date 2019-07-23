import React from 'react';
import * as Redux from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const store = Redux.createStore(rootReducer);
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
