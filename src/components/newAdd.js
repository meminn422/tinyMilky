import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FoodEntryModal from './FoodEntryModal';
import { useNavigation } from '@react-navigation/native';

const NewAdd = () => {
  const navigation = useNavigation(); // 获取导航对象

  const handleScanPress = () => {
    navigation.navigate('ScanScreen'); // 触发导航到 ScanScreen 的动作
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation] = useState(new Animated.Value(0));
  const [buttonOpacity] = useState(new Animated.Value(0));
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleExpand = () => {
    if (isExpanded) {
      Animated.parallel([
        Animated.timing(rotation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(buttonOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => setIsExpanded(false));
    } else {
      setIsExpanded(true);
      Animated.parallel([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const buttonStyle = {
    transform: [{ rotate: rotationInterpolate }],
  };

  const handlePencilPress = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {isExpanded && (
          <>
            <Animated.View style={[styles.button, { opacity: buttonOpacity, right: 10, bottom: 50 }]}>
              <TouchableOpacity style={styles.iconButton} onPress={handlePencilPress}>
                <Ionicons name="pencil-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.button, { opacity: buttonOpacity, right: 10, bottom: 30 }]}>
              <TouchableOpacity style={styles.iconButton} onPress={handleScanPress}>
                <Ionicons name="scan-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </Animated.View>
          </>
        )}
      </View>
      <TouchableOpacity onPress={toggleExpand} style={styles.mainButton}>
        <Animated.View style={buttonStyle}>
          <Ionicons name="add" size={24} color="#fff" />
        </Animated.View>
      </TouchableOpacity>
      <FoodEntryModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end', // 將容器的內容向底部對齊
    alignItems: 'flex-end', // 將容器的內容向右側對齊
    flex: 1,
    zIndex: 999,
    marginBottom: 80,
  },
  buttonsContainer: {
    position: 'relative',
    bottom: 20,
    right: 25,
  },
  button: {
    // marginBottom: 10,
    justifyContent: 'flex-end', // 將容器的內容向底部對齊
    alignItems: 'flex-end', // 將容器的內容向右側對齊
  },
  iconButton: {
    backgroundColor: '#3C1D03',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButton: {
    backgroundColor: '#6E8A92',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    bottom: 30,
  },
});

export default NewAdd;
