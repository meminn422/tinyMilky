import React from "react-native";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
const LightScreen = () => {
    return (
        <View>
            <Image
                source={require('../images/LightPage.png')}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
export default LightScreen;