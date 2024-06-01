import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const FoodEntryModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TextInput style={styles.input} placeholder="EXP: 2025/2/30" placeholderTextColor="#000" />
          <TextInput style={styles.input} placeholder="FOOD NAME: MILK" placeholderTextColor="#000" />
          <TextInput style={styles.input} placeholder="PURCHASE DATE: YYYY/MM/DD" placeholderTextColor="#000" />
          <TextInput
            style={[styles.input, styles.noteInput]}
            placeholder="NOTE: Sh~Don't write too much"
            placeholderTextColor="#000"
            multiline
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>YES</Text>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: '#B4C6C8',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#DCE1E3',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  noteInput: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default FoodEntryModal;
