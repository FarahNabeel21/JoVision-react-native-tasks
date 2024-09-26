import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import store from './store';
import ComponentOne from './ComponentOne';
import { toggleComponent } from './actions';

const MainComponent = () => {
  const dispatch = useDispatch();
  const isComponentVisible = useSelector((state) => state.isComponentVisible);

  return (
    <View style={styles.container}>
      <Button
        title={isComponentVisible ? 'Hide Component One' : 'Show Component One'}
        onPress={() => dispatch(toggleComponent())}
      />
      {isComponentVisible && <ComponentOne />}
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <MainComponent />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
