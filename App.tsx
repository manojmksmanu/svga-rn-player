import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SVGAPlayer from './SVGAPlayer';

export default function App() {
  const [selectedGift, setSelectedGift] = useState(1);

  const gifts: Record<number, string> = {
    1: 'data4.svga',
    2: 'data1.svga',
    3: 'data2.svga',
    4: 'data3.svga',
  };

  const {width} = Dimensions.get('window');
  const giftSize = width * 0.9; // 80% of screen width for responsiveness

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabRow}>
        {['Gift One', 'Gift Two', 'Gift Three', 'Gift Four'].map(
          (label, index) => {
            const giftNumber = index + 1;
            const isActive = selectedGift === giftNumber;
            return (
              <TouchableOpacity
                key={giftNumber}
                style={[styles.tab, isActive && styles.activeTab]}
                onPress={() => setSelectedGift(giftNumber)}>
                <Text
                  style={[styles.tabText, isActive && styles.activeTabText]}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          },
        )}
      </View>

      {/* Selected Gift Animation */}
      <SVGAPlayer
        style={{
          width: giftSize,
          height: giftSize,
          marginTop: 20,
        }}
        source={gifts[selectedGift]}
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
    paddingTop: 50,
    alignItems: 'center',
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap', // in case tabs overflow on smaller screens
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#333',
    margin: 5,
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#ff9800',
  },
  tabText: {
    color: '#fff',
    fontSize: 14,
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
