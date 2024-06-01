import React, { useState ,useEffect } from 'react';
import { Keyboard } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FoodEntryModal = ({ visible, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue0, setInputValue0] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  useEffect(() => {
    if (!visible) {
      setInputValue0('');
      setInputValue1('');
      setInputValue2('');
      setInputValue3('');
    }
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
      <TouchableOpacity
              style={styles.overlay} // 样式使其覆盖整个屏幕
              activeOpacity={1} // 使其可响应点击事件
              onPress={() => {
                Keyboard.dismiss(); // 点击时关闭键盘
                setModalVisible(false); // 关闭 Modal
              }}
            />
        <View style={styles.modalView}>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Icon name="star" size={20} color="#3C1D03" style={styles.icon} />
              <Text style={styles.inputLabel}>EXP:</Text>
            </View>
            <TextInput 
              style={styles.input} 
              placeholder="2025/2/30" 
              placeholderTextColor="#000"
              value={inputValue0}
              onChangeText={text => setInputValue0(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Icon name="star" size={20} color="#3C1D03" style={styles.icon} />
              <Text style={styles.inputLabel}>FOOD NAME:</Text>
            </View>
            <TextInput 
              style={styles.input} 
              placeholder="MILK" 
              placeholderTextColor="#000" 
              value={inputValue1}
              onChangeText={text => setInputValue1(text)}
              />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Icon name="star" size={20} color="#3C1D03" style={styles.icon} />
              <Text style={styles.inputLabel}>PURCHASE DATE:</Text>
            </View>
            <TextInput 
              style={styles.input} 
              placeholder="YYYY/MM/DD" 
              placeholderTextColor="#000" 
              value={inputValue2}
              onChangeText={text => setInputValue2(text)}
              />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Icon name="star" size={20} color="#3C1D03" style={styles.icon} />
              <Text style={styles.inputLabel}>NOTE:</Text>
            </View>
            <TextInput
              style={[styles.input, styles.noteInput]}
              placeholder="Sh~Don't write too much"
              placeholderTextColor="#000"
              multiline
              returnKeyType="done"
              value={inputValue3}
              onChangeText={text => setInputValue3(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose}>
              {/* <Text style={styles.buttonText}>CANCEL</Text> */}
              <Image
                source={require('../images/cancel.png')}
                style={styles.buttonText}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              {/* <Text style={styles.buttonText}>YES</Text> */}
              <Image
                source={require('../images/yes.png')}
                style={styles.buttonText}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalView: {
    width: '90%',
    backgroundColor: '#B4C6C8',
    padding: 20,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  inputLabel: {
    fontSize: 16,
    color: '#3C1D03',
  },
  input: {
    width: '100%',
    backgroundColor: '#DCE1E3',
    padding: 10,
    borderRadius: 5,
  },
  noteInput: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景
  },
});

export default FoodEntryModal;
