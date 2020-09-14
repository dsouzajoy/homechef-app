import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import InnerApp from './InnerApp'

export default function App() {

  return (
    <Provider store={store}>
      <StatusBar style="dark" backgroundColor="#fff" />
      <InnerApp />
    </Provider>
  );
}

