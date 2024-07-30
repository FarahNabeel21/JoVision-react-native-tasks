import React, { useState } from 'react';
import { View, Text,Button,StyleSheet  } from "react-native";
const Task17 = () => {
    const [showName, setShowName] = useState(false);
    const onPressLearnMore = () => {
        setShowName(!showName);
      };
    return(

        <View style={styles.container}>
           <Button title={showName ? "Hide" : "Show"} onPress={onPressLearnMore}  color="#841584"
  accessibilityLabel="Learn more about this purple button" />
       {showName && <Text style={styles.name}>Farah Nabeel</Text>}
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
    name: {
      marginTop: 20,
      fontSize: 24,
    },
  });

export default Task17;