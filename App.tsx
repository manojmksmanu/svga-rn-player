import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SVGAPlayer from './SVGAPlayer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello </Text>
      <SVGAPlayer
        style={{width: 300, height: 300}}
        source="https://raw.githubusercontent.com/svga/SVGA-Samples/master/angel.svga" // from assets folder
        loops={0}
        autoplay={true}
      />
      <SVGAPlayer
        style={{width: 200, height: 200, position: 'absolute', top: 0, left: 0}}
        source="angel.svga" // from network
        loops={0}
        autoplay={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02618a',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
