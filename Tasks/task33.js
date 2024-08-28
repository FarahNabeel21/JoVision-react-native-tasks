import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const App = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={togglePlayPause} style={styles.touchable}>
        <Video
          ref={videoRef}
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
          poster="https://www.example.com/poster.jpg"
          posterResizeMode="cover"
          resizeMode="cover"
          style={styles.video}
          paused={paused} // Controls whether the video is paused or playing
          onBuffer={onBuffer} // Optional callback for buffering events
          onError={videoError} // Optional callback for errors
        />
      </TouchableOpacity>
    </View>
  );
};

const onBuffer = () => {
  console.log('run video');
};

const videoError = (error) => {
  console.error('Video Error:', error);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  touchable: {
    width: '100%',
    height: 300,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default App;
