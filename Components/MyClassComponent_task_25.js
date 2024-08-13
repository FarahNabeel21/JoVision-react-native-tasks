import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default MyClassPage;
