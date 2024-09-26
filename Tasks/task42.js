import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ScreenOne = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.text}>Screen 1</Text>
    <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen 2')} />
    <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen 3')} />
    <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen 4')} />
  </View>
);

const ScreenTwo = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.text}>Screen 2</Text>
    <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen 1')} />
    <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen 3')} />
    <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen 4')} />
  </View>
);

const ScreenThree = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.text}>Screen 3</Text>
    <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen 1')} />
    <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen 2')} />
    <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen 4')} />
  </View>
);

const ScreenFour = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.text}>Screen 4</Text>
    <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen 1')} />
    <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen 2')} />
    <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen 3')} />
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
    marginBottom: 20,
  },
});

export default App;
