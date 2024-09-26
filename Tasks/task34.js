import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return currentTime;
};

const TimeComponent = () => {
  const currentTime = useCurrentTime(); 
  return (
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>Time: {currentTime.toLocaleTimeString()}</Text>
      <Text style={styles.dateText}>Date: {currentTime.toLocaleDateString()}</Text>
    </View>
  );
};

// Main App component
const App = () => {
  const [showTime, setShowTime] = useState(true);

  return (
    <View style={styles.container}>
    
      <View style={styles.buttonContainer}>
        <Button title={showTime ? "Hide Time" : "Show Time"}
          onPress={() => setShowTime(!showTime)}
        />
      </View>
      
      {showTime && <TimeComponent />}
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default App;
