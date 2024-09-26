import React, { useState, useCallback } from 'react';
import { ScrollView, Text, StyleSheet, View, RefreshControl } from 'react-native';


function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task37 = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [randomWords, setRandomWords] = useState(Array.from({ length: 100 }, () => generateRandomWord(5)));

 
  const onRefresh = useCallback(() => {
    
    setRefreshing(true);
    
   
    setTimeout(() => {
      
      setRandomWords(Array.from({ length: 100 }, () => generateRandomWord(5)));
      
      setRefreshing(false);
    }, 2000); 
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {randomWords.map((word, index) => (
          <Text key={index} style={styles.text}>
            {word}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});

export default Task37;
