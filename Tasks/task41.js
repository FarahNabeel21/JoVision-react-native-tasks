import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ScreenOne = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Screen 1</Text>
  </View>
);

const ScreenTwo = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Screen 2</Text>
  </View>
);

const ScreenThree = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Screen 3</Text>
  </View>
);

const ScreenFour = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Screen 4</Text>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen 1" component={ScreenOne} />
        <Tab.Screen name="Screen 2" component={ScreenTwo} />
        <Tab.Screen name="Screen 3" component={ScreenThree} />
        <Tab.Screen name="Screen 4" component={ScreenFour} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default App;
