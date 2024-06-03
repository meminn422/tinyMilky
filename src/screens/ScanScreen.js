// import React, { useState } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import ImageUploader from '../components/ImageUploader'; // 根據你的項目結構修改路徑
// import TextRecognition from '../components/TextRecognition'; // 根據你的項目結構修改路徑

// const ScanScreen = ({ onClose }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageSelect = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Image to Text Recognition</Text>
//       <ImageUploader onImageSelect={handleImageSelect} />
//       {selectedImage && <TextRecognition selectedImage={selectedImage} />}
//       <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//         <Text style={styles.closeButtonText}>Close</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   closeButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#6E8A92',
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: '#fff',
//   },
// });

// export default ScanScreen;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the ScanScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default ScanScreen;
