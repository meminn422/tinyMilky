import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TurnOn from '../components/TurnOn_Light'; // 根據實際路徑調整

const TownScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../images/ore.png')} // 更換為你的圖片路徑
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>36</Text>
      </View>
      <Image
        source={require('../images/default_bg.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.triggerArea} onPress={handlePress}/>
      <TurnOn visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 25,
    right: 25,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex:999,
  },
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 3,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  triggerArea: {
    position: 'absolute',
    top: '48%',
    right: '38%', 
    width: 50, 
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 25, 
  },
});

export default TownScreen;
