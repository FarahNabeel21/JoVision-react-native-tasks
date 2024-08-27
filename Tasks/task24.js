import React, { useRef, useState } from 'react';
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import MyFunctionPage from '../Components/MyFunctionPage_task24';  
const Task24 = () => {
  const myFunctionPageRef = useRef(null);
  const [inputText, setInputText] = useState('');

  const handleTextChange = (text) => {
    setInputText(text);
    if (myFunctionPageRef.current) {
      myFunctionPageRef.current.updateText(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={handleTextChange}
          placeholder="Type something..."
        />
        <MyFunctionPage ref={myFunctionPageRef} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default Task24;
