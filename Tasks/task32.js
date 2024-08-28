import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

export default function VideoPlayer() {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} 
        style={styles.video}
        poster="https://www.w3schools.com/html/img_girl.jpg" 
        posterResizeMode="cover"
        resizeMode="contain"
        controls
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: 300,
  },
});
