import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AddButton from './src/conponment/AddButtom';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
