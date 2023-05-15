import React from 'react';
import Entrypoint from './Source/Navigation/Entrypoint';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './Source/GlobalStore/Stores';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Entrypoint />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
