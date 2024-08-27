import React from 'react';
import { View, FlatList, Image, Alert, StyleSheet ,TouchableOpacity} from 'react-native';

const Task28 = () => {

[images,setimage]= React.useState( [
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
  ]);

  const handlePress = (i) => {
    Alert.alert(`You have selected image: ${i+1}`);
  };
  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handlePress(index)}>
      <Image source={item} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(index) => index}
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
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 8,
    padding:-6,
    margin:30,
  
  },
});

export default Task28;
