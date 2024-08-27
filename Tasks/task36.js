import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';


function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task36 = () => {

  const randomWords = Array.from({ length: 100 }, () => generateRandomWord(5)); 

  return (
    <View style={styles.container}>
      <ScrollView>
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

export default Task36;