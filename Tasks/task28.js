import React, { useState } from 'react';
import { View, Image, Button, Alert, StyleSheet } from 'react-native';

const Task27 = () => {
  // State to keep track of the currently displayed image
  const [currentImage, setCurrentImage] = useState(require('../Resource/image1.jpg'));

  // Function to handle button press
  const handleButtonPress = () => {
    // Show an alert with options to pick an image
    Alert.alert(
      'Choose an Image',
      'Pick the number of the image you want to display:',
      [
        { text: '1', onPress: () => setCurrentImage(require('../Resource/image1.jpg')) },
        { text: '2', onPress: () => setCurrentImage(require('../Resource/image2.png')) },
        { text: '3', onPress: () => setCurrentImage(require('../Resource/image3.png')) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={currentImage} style={styles.image} />
      <Button title="Choose Image" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default Task27;
