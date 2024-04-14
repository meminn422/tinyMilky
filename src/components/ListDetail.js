import React from "react-native";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";

const ListDetail = () => {
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.CardContainer}>
                <Image
                    source={require('../images/IMG_02001.jpg')}
                    style={styles.image}
                />
                <Text style={styles.itemText}>food</Text>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    contentContainer: {
        paddingLeft: 20
    },
    CardContainer: {
        flexDirection: 'row',
        width: 340,
        height: 50,
        backgroundColor: "#001B24",
        marginTop: 20,
        paddingLeft: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 100,
    },
    itemText: {
        fontSize: 14,
        fontWeight: '500',
        color: "#fff",
        paddingLeft: 20
    },

});

export default ListDetail; 