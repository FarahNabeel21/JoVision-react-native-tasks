import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Pressable, Alert, StyleSheet, Button } from 'react-native';
import Dialog from 'react-native-dialog';

const Task29= () => {
  const images = [
    require('../Resource/image1.jpg'),
    require('../Resource/image2.png'),
    require('../Resource/image3.png'),
    require('../Resource/image4.jpg'),
    require('../Resource/image5.jpg'),
    require('../Resource/image6.jpg'),
    require('../Resource/image7.jpeg'),
    require('../Resource/image8.jpeg'),
    require('../Resource/image9.png'),
    require('../Resource/image10.jpeg'),
  ];

  const flatListRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');

  const handlePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const handleScrollToIndex = () => {
    const parsedIndex = parseInt(inputIndex, 10) - 1;
    if (parsedIndex >= 0 && parsedIndex < images.length) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: parsedIndex,
        viewPosition: 0.5,
      });
      setVisible(false);
    } else {
      Alert.alert("Invalid Index", "Please enter a valid index between 1 and 10.");
    }
  };

  const renderItem = ({ item, index }) => (
    <Pressable onPress={() => handlePress(index)}>
      <Image source={item} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Button title="Scroll to Image" onPress={() => setVisible(true)} />

      <Dialog.Container visible={visible}>
        <Dialog.Title>Scroll to Image</Dialog.Title>
        <Dialog.Description>
          Enter the index of the image (1-10):
        </Dialog.Description>
        <Dialog.Input
          placeholder="Enter The index"
          keyboardType="numeric"
          value={inputIndex}
          onChangeText={setInputIndex}
        />
        <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
        <Dialog.Button label="OK" onPress={handleScrollToIndex} />
      </Dialog.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 8,
  },
});

export default Task29;
