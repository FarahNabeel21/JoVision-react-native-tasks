import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MyClassPage from '../Components/MyClassComponent_task19'; 

const Task19 = () => {
  const [showClassPage, setShowClassPage] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Show" onPress={() => setShowClassPage(true)} />
      {showClassPage && <MyClassPage />}
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

export default Task19;
