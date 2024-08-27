import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Pressable, Alert, StyleSheet, Button, Text } from 'react-native';
import Dialog from 'react-native-dialog';

const Task30 = () => {
  const initialImages = [
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
  const [images, setImages] = useState(initialImages);
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

  const handleRemove = (index) => {
    Alert.alert(
      "Remove Image",
      "Are you sure you want to remove this image?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            const newImages = images.filter((_, i) => i !== index);
            setImages(newImages);
          },
        },
      ]
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.imageContainer}>
      <Pressable onPress={() => handlePress(index)}>
        <Image source={item} style={styles.image} />
      </Pressable>
      <Pressable style={styles.removeButton} onPress={() => handleRemove(index)}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </Pressable>
    </View>
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
          placeholder="Index"
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
  imageContainer: {
    position: 'relative',
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Task30;
