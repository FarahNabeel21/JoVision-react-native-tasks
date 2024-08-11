import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends Component{
componentDidMount(){
    console.log("is loading ->>>");
}

componentWillUnmount(){
    console.log("is unloading");
    
}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to MyClassPage!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default MyClassPage;
