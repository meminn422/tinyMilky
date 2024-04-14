import React, { Pressable } from "react-native";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListDetail = () => {
    const [PressState, setPressState] = useState(false);
    let checkbtm = PressState ? <MaterialCommunityIcons name={'check-circle'} size={20} color={'#4ECB71'} />
        : <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={20} color={'#fff'} />;
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.CardContainer}>
                <Image
                    source={require('../images/IMG_02001.jpg')}
                    style={styles.image}
                />
                <Text style={styles.itemText}>food</Text>
                <Text style={styles.expText}>EXP:2024.2.30</Text>
                <Pressable onPress={() => setPressState(!PressState)}>
                    {checkbtm}
                </Pressable>
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
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    itemText: {
        fontSize: 14,
        fontWeight: '500',
        color: "#fff",
        paddingLeft: 10
    },
    expText: {
        fontSize: 14,
        fontWeight: '500',
        color: "#D9D9D9",
        paddingLeft: 60
    }

});

export default ListDetail; 