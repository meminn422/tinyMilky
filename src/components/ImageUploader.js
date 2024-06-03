import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'; // 使用react-native-image-picker庫來處理相機和圖片庫

const ImageUploader = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleImageUpload = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      const imageUrl = response.uri;
      setSelectedImage(imageUrl);
      onImageSelect(imageUrl);  // 通知父組件選擇的圖片
    }
  };

  const handleOpenCamera = () => {
    launchCamera({ mediaType: 'photo' }, handleImageUpload);
    setIsCameraOpen(false);  // 關閉相機
  };

  const handleOpenImageLibrary = () => {
    launchImageLibrary({ mediaType: 'photo' }, handleImageUpload);
    setIsCameraOpen(false);  // 關閉相機
  };

  return (
    <View>
      <TouchableOpacity onPress={handleOpenImageLibrary}>
        <Text>Select Image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOpenCamera}>
        <Text>{isCameraOpen ? 'Close Camera' : 'Open Camera'}</Text>
      </TouchableOpacity>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default ImageUploader;
