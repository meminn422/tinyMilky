import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation style={{ margintop: 20 }} />
      </SafeAreaView>
    </Provider>
  );
};

export default App;


