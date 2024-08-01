import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyClassPage20 from '../Components/MyClassPage20'; // Ensure this path is correct based on your file structure

const Task20 = () => {
  const [showClassPage, setShowClassPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button 
        title={showClassPage ? "Hide" : "Show"} 
        onPress={() => setShowClassPage(!showClassPage)} 
      />
      {showClassPage && <MyClassPage20 />}
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
});

export default Task20;
