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
            <View style={styles.header}>
              <Image
                source={require('../images/ore.png')} // 更換為你的圖片路徑
                style={styles.headerImage}
              />
              <Text style={styles.headerText}>36</Text>
            </View>
            <NewAdd/>
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
    header: {
      position: 'absolute',
      top: 25,
      right: 25,
      flexDirection: 'row',
      alignItems: 'center',
      zIndex:999,
    },
    headerImage: {
      width: 30,
      height: 30,
      marginRight: 3,
    },
    headerText: {
      fontSize: 18,
      color: '#fff',
    },
  });

export default TownScreen;

