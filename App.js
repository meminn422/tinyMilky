import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation style={{margintop: 20}}/>
    </SafeAreaView>
  );
};


export default App;
