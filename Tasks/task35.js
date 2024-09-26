import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  
  const [loading, setLoading] = useState(true);

  const STORAGE_KEY = '@userInfo';


  const saveData = async () => {
    const currentTime = new Date();
    const data = {
      name: name,
      age: age,
      country: country,
      timestamp: currentTime.toISOString(),
    };
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      Alert.alert('Success', 'Data saved successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save data.');
    }
  };

  // Load data from AsyncStorage
  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        const savedData = JSON.parse(jsonValue);
        const savedTimestamp = new Date(savedData.timestamp);
        const now = new Date();

        // Check if the saved data is less than 1 minute old
        if ((now - savedTimestamp) / 1000 <= 60) {
          setName(savedData.name);
          setAge(savedData.age);
          setCountry(savedData.country);
        } else {
          Alert.alert('Info', 'No recent data found (older than 1 minute).');
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load data.');
    }
    setLoading(false);
  };

  // Load data when the app starts
  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Submit" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default App;
