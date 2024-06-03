<<<<<<< HEAD
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
=======
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ScanScreen() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePhoto() {
    const photo = await CameraView.takePhoto();
    // Do something with the photo, such as displaying it or processing it.
    console.log('Photo taken:', photo);
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 20,
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    width: '90%', // Adjust the width of the button container if needed
  },
  button: {
    flex: 0.4,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
>>>>>>> 6bb2e23f0557e3aae4e75594a079b8cd08205e42
