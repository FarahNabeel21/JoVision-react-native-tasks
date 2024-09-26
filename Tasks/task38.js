import React, { createContext, useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextContext = createContext();

class ComponentOne extends React.Component {
  static contextType = TextContext;

  render() {
    const { sharedText } = this.context;
    return (
      <View>
        <Text style={styles.text}>Shared Text: {sharedText}</Text>
      </View>
    );
  }
}

const ComponentTwo = () => {
  const { sharedText, setSharedText } = useContext(TextContext);

  return (
    <View style={styles.componentTwo}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={sharedText}
        onChangeText={(text) => setSharedText(text)}
      />
      <ComponentOne />
    </View>
  );
};

const App = () => {
  const [sharedText, setSharedText] = useState('');

  return (
    <TextContext.Provider value={{ sharedText, setSharedText }}>
      <View style={styles.container}>
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </View>
    </TextContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  componentTwo: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default App;
