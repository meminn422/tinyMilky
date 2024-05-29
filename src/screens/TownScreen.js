import React from "react-native";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import NewAdd from "../components/newAdd";

const TownScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/Homepage.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <NewAdd />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   position: 'relative', // 確保子組件可以使用絕對定位
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute', // 確保圖片填滿整個容器
    },
  
  });

export default TownScreen;
