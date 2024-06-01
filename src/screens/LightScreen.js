import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
      <Image
        source={require('../images/default_bg.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <TouchableOpacity style={styles.triggerArea} onPress={handlePress}>
        {/* 這裡是你的觸發區域 */}
      </TouchableOpacity>
      <TurnOn visible={modalVisible} onClose={handleCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  triggerArea: {
    position: 'absolute',
    top: '50%',
    right: '25%', // 調整右側偏移量以使其位於中間偏右位置
    width: 50, // 調整寬度和高度以使其成為一個可點擊的區域
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 25, // 讓它成為一個圓形
  },
});

export default TownScreen;

