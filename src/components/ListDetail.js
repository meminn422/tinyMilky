import React, { Pressable } from "react-native";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListDetail = () => {
    const [PressState1, setPressState1] = useState(false);
    const [PressState2, setPressState2] = useState(false);
    let checkbtm = PressState1 ? <MaterialCommunityIcons name={'check-circle'} size={20} color={'#4ECB71'} />
        : <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={20} color={'#fff'} />;
    let checkbtm2 = PressState2 ? <MaterialCommunityIcons name={'check-circle'} size={20} color={'#4ECB71'} />
        : <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={20} color={'#fff'} />;
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.date}>2024.4.14—————————————————————————</Text>
            <View style={styles.CardContainer}>
                <Image
                    source={require('../images/IMG_02001.jpg')}
                    style={styles.image}
                />
                <Text style={styles.itemText}>BlackTea</Text>
                <Text style={styles.expText}>EXP:2024.4.24</Text>
                <Pressable onPress={() => setPressState1(!PressState1)}>
                    {checkbtm}
                </Pressable>
            </View>
            <View style={styles.CardContainer}>
                <Image
                    source={require('../images/IMG_02001.jpg')}
                    style={styles.image}
                />
                <Text style={styles.itemText}>Milk</Text>
                <Text style={styles.expText}>EXP:2024.4.21</Text>
                <Pressable onPress={() => setPressState2(!PressState2)}>
                    {checkbtm2}
                </Pressable>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    date: {
        color: "#7A929B",
        paddingTop: 30,
    },
    contentContainer: {
        alignItems: 'center',
    },
    CardContainer: {
        flexDirection: 'row',
        width: '85%',
        height: 50,
        backgroundColor: "#001B24",
        marginTop: 10,
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