import React, { useRef, useState } from 'react';
import { View, Image, FlatList, Alert, StyleSheet, Button, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  require('../Resource/image10.jpeg')
];

const Task30 = () => {
  const [images, setImages] = useState(initialImages);
  const flatListRef = useRef(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [index, setIndex] = useState('');

  const handlePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const handleScrollToIndex = () => {
    Alert.prompt(
      "Scroll to Image",
      "Enter the index of the image (1-10):",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: (input) => {
            const parsedIndex = parseInt(input, 10) - 1;
            if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < images.length) {
              flatListRef.current?.scrollToIndex({ animated: true, index: parsedIndex });
            } else {
              Alert.alert("Invalid index", "Please enter a valid index number between 1 and 10.");
            }
          },
        },
      ],
      "plain-text"
    );
  };

  const handleRemoveImage = (indexToRemove) => {
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
            setImages((prevImages) => prevImages.filter((_, index) => index !== indexToRemove));
          },
        },
      ]
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Pressable onPress={() => handlePress(index)} style={styles.imageWrapper}>
        <Image source={item} style={styles.image} />
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleRemoveImage(index)}>
          <Icon name="remove-circle" size={24} color="red" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Scroll to image" onPress={handleScrollToIndex} />
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  item: {
    marginHorizontal: 10,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
  },
});

export default Task30;
