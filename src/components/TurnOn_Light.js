import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, Animated } from 'react-native';

const TurnOn = ({ visible, onClose }) => {
  const [count, setCount] = useState(0); 
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.modalContent, { opacity }]}>
          <Image
            source={require('../images/question.png')}
            style={styles.image}
            onLoad={() => {
              Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }).start();
            }}
          />
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => setCount(count > 0 ? count - 1 : 0)} style={styles.buttonContainer}>
              <Image
                source={require('../images/arrow_left.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.number}>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.buttonContainer}>
              <Image
                source={require('../images/arrow_right.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.actionButtonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.buttonContainer}>
              <Image
                source={require('../images/cancel.png')}
                style={styles.button}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.buttonContainer}>
              <Image
                source={require('../images/yes.png')}
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 500,
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: '80%', 
    height: '80%',
    borderRadius: 10, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    position: 'absolute',
    top: '70%',
    transform: [{ translateY: -50 }],
    
  },
  number: {
    fontSize: 24,
    marginHorizontal: 10,
    color: '#fff',
    textAlign: 'center',
  },
  icon: {
    width: 20, 
    height: 30,
    
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  actionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    position: 'absolute',
    bottom: '10%',
  },
  button: {
    width: 80,
    height: 40,
  },
});

export default TurnOn;



