import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ComponentOne = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    paddingHorizontal: 10,
  },
});

export default ComponentOne;
