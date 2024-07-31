import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Task18= () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate a loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </>
      ) : (
        <Text style={styles.nameText}>Farah</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#333333',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Task18;
