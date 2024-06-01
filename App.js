  // import React from 'react';
  // import { StyleSheet, SafeAreaView } from 'react-native';
  // import Navigation from './src/navigation';

  // const App = () => {
  //   return (
  //     <SafeAreaView style={{ flex: 1 }}>
  //       <Navigation style={{margintop: 20}}/>
  //     </SafeAreaView>
  //   );
  // };


  // export default App;


import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;

