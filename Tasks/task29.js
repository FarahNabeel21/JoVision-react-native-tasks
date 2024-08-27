import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Pressable, Alert, StyleSheet, Button, TextInput } from 'react-native';

const App = () => {
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
          onPress: (index) => {
            const parsedIndex = parseInt(index, 10) - 1;
            if (parsedIndex >= 0 && parsedIndex < images.length) {
              flatListRef.current.scrollToIndex({
                animated: true,
                index: parsedIndex,
                viewPosition: 0.5, 
              });
            } else {
              Alert.alert("Invalid Index", "Please enter a valid index between 1 and 10.");
            }
          },
        },
      ],
      "plain-text",
    );
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
      <Button title="Scroll to Image" onPress={handleScrollToIndex} />
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

export default App;
