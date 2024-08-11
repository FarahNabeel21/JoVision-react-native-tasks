import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyClassPage from '../Components/MyClassComponent_task20';

const Task20 = () => {
  const [showClassPage, setShowClassPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button 
        title= "Show" 
        onPress={() => setShowClassPage(!showClassPage)} 
      />
      {showClassPage && <MyClassPage/>}
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
