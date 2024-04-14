import React from "react-native";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import AddButtom from "../components/AddButtom";

const TownScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/Homepage.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <AddButtom />
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

export default TownScreen;
