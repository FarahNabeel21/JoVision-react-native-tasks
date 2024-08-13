import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

const Task26= () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  // Non-blocking request
  const fetchIpNonBlocking = async () => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        setIp(data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
      });
  };

  // Blocking request
  const fetchIpBlocking = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Get IP (Non-blocking)" onPress={fetchIpNonBlocking} />
        <Button title="Get IP (Blocking)" onPress={fetchIpBlocking} />
      </View>
      <View style={styles.resultContainer}>
        {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Text style={styles.text}>{ip}</Text>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default Task26;
