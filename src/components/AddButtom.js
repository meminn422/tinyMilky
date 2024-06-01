import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet, TextInput, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Keyboard } from 'react-native';
import { GluestackUIProvider, HStack, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddButton = ({ }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue0, setInputValue0] = useState('');
 
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="plus" size={25} color="white" />
      </TouchableOpacity>
      {modalVisible && (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.overlay} // 样式使其覆盖整个屏幕
              activeOpacity={1} // 使其可响应点击事件
              onPress={() => {
                Keyboard.dismiss(); // 点击时关闭键盘
                setModalVisible(false); // 关闭 Modal
              }}
            />
            <View style={styles.modalContent}>
              <MaterialCommunityIcons name="star-face" size={80} color="#E99443" style={styles.topIconContainer} />
              <View style={styles.inputContainer}>
                <Icon name="star" size={20} color="#3C1D03" style={styles.icon} />
                <Text style={styles.staticText}>食物名稱：</Text>
                <TextInput
                  style={styles.input}
                  placeholder="請輸入食物"
                  placeholderTextColor="#A9A9A9"
                  value={inputValue1}
                  onChangeText={text => setInputValue1(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="star" size={20} color="#3C1D03" style={styles.icon} />
                <Text style={styles.staticText}>購買日期：</Text>
                <TextInput
                  style={styles.input}
                  placeholder="請輸入日期"
                  placeholderTextColor="#A9A9A9"
                  value={inputValue2}
                  onChangeText={text => setInputValue2(text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="star" size={20} color="#3C1D03" style={styles.icon} />
                <Text style={styles.staticText}>有效日期：</Text>
                <TextInput
                  style={styles.input}
                  placeholder="請輸入日期"
                  placeholderTextColor="#A9A9A9"
                  value={inputValue3}
                  onChangeText={text => setInputValue3(text)}
                />
{/* 建議頁面*/}
                <View>
                  <TouchableOpacity onPress={() => setModalVisible1(true)}>
                    <MaterialCommunityIcons name="star-face" size={20} color="#E99443" style={[styles.icon, {right:0}]} />
                  </TouchableOpacity>
                  <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible1}
                  onRequestClose={() => setModalVisible1(false)}> 

                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                    <View style={{  justifyContent: 'center', alignItems: 'center'}}>
                      {/* 在這裡插入你的圖片 */}
                      <TouchableOpacity onPress={() => setModalVisible1(false)} style={styles.closeButton}>
                        <MaterialCommunityIcons name="close" size={24} color="black" />
                      </TouchableOpacity>
                      <Image source={require('../images/Advice.png')}  />
                    </View>
                  </View>
                  </Modal>
                </View>

              </View>
              <View style={styles.inputContainer0}>
                <View style={[{flexDirection:'row'}]}> 
                  <Icon name="star" size={20} color="#3C1D03" style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="其他備註："
                    placeholderTextColor="#A9A9A9"
                    editable={false} // 禁止用戶編輯
                  />
                </View>
                <TextInput
                  style={styles.input0}
                  placeholder=" . . ."
                  // multiline={true} // 允许多行输入
                  // numberOfLines={4} // 设置为希望显示的行数
                  placeholderTextColor="#A9A9A9"
                  value={inputValue0}
                  returnKeyType="done" // 设置键盘上的按钮为"完成"
                  onChangeText={text => setInputValue0(text)}
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.modalButton, { left: '10%' }]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{ color: '#3C1D03' }}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, { right: '10%' }]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{ color: '#3C1D03' }}>加入</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  topIconContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: -45,
    zIndex: 999, // 確保icon在最上層
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 999, // 確保關閉按鈕在最上層
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30, // 添加一些間距以與上面的文本輸入行分開
    width: '100%',
  },
  modalButton: {
    position: 'absolute',
    top: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1, // 添加邊框
    borderRadius: 10, // 邊框圓角
    borderColor: '#3C1D03',
  },
  modalContainer: {
    position: "relative",
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',

  },
  modalContent: {
    backgroundColor: '#7E9AA1',
    borderRadius: 10,
    // padding: 20,
    alignItems: 'center',
    padding: 40, // 修改 padding
    width: '85%', // 修改 width
    height: '75%', // 修改 height
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row', // 水平排列
    alignItems: 'center', // 垂直居中
    borderWidth: 1, // 添加邊框
    borderRadius: 15, // 邊框圓角
    paddingHorizontal: 10, // 水平內邊距
    width: 280, // 調整寬度
    height: 40,
    borderColor: '#3C1D03',
    marginTop: 20,
    marginBottom: 5,
  },
  inputContainer0: {
    flexDirection: 'column', // 水平排列
    width: 280, // 調整寬度
    height: 210,
    borderWidth: 1, // 添加邊框
    borderRadius: 15, // 邊框圓角
    paddingHorizontal: 10, // 水平內邊距
    borderColor: '#3C1D03',
    marginTop: 20,
    marginBottom: 5,
    padding: 7,

  },
  input0: {
    fontSize: 16, // 文本大小
    marginTop:10,
  },
  staticText: {
    marginRight: 10, // 添加一些間距
    color: '#3C1D03', // 文本顏色
    fontSize: 16, // 文本大小
  },
  input: {
    fontSize: 16, // 文本大小
    flex: 1,
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 5,
    // padding: 10,
    // width: '80%', // 調整寬度
    // marginBottom: 20, // 加入間距
    // width: 250,
    // height: 40,
    // backgroundColor: 'white',
    // borderWidth: 1,
    // borderRadius: 4,

  },
  button: {
    position: 'absolute',
    bottom: 25, // 距離底部的距離
    right: 25, // 距離右邊的距離
    backgroundColor: '#6E8A92', // 圓形按鈕的顏色

    borderRadius: 60, // 設置邊框半徑為按鈕寬度和高度的一半，使按鈕成為圓形
    width: 60, // 設置按鈕的寬度和高度為 50 像素
    height: 60,

    paddingHorizontal: 20,
    paddingVertical: 10,

    alignItems: 'center', // 水平居中對齊內容
    justifyContent: 'center', // 垂直居中對齊內容
  },
  icon: {
    marginRight: 10,
  },
  topIcon: {
    top: 90,
    position: "absolute",
  },
});

export default AddButton;
