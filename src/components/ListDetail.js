import React, { Pressable } from "react-native";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListDetail = () => {
    const [PressState1, setPressState1] = useState(false);
    const [PressState2, setPressState2] = useState(false);

    let checkbtm = PressState1 ? <MaterialCommunityIcons name={'check-circle'} size={20} color={'#001B24'} />
        : <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={20} color={'#fff'} />;
    let checkbtm2 = PressState2 ? <MaterialCommunityIcons name={'check-circle'} size={20} color={'#001B24'} />
        : <MaterialCommunityIcons name={'checkbox-blank-circle-outline'} size={20} color={'#fff'} />;
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.date}>2024.4.14—————————————————————————</Text>
            <View style={styles.CardContainer}>
                <View style={styles.CardBG}>
                    <View style={styles.infoArea}>
                        <View style={styles.img_name}>
                            <Image
                                source={require('../images/IMG_02001.jpg')}
                                style={styles.image}
                            />
                            <Text style={styles.itemTitle}>BlackTea</Text>
                        </View>
                        <View style={styles.date_note}>
                            <Text style={styles.dataText}>ADD DATE: </Text>
                            <Text style={styles.dataText}>EXP:2024.4.24</Text>
                            <Text style={styles.dataText}>NOTE: </Text>
                        </View>
                    </View>
                    <View style={styles.btnArea}>
                        <View style={styles.btnContainer}>
                            <Pressable onPress={() => setPressState1(!PressState1)}>
                                {checkbtm}
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.CardContainer}>
                <View style={styles.CardBG}>
                    <View style={styles.infoArea}>
                        <View style={styles.img_name}>
                            <Image
                                source={require('../images/IMG_02001.jpg')}
                                style={styles.image}
                            />
                            <Text style={styles.itemTitle}>Milk</Text>
                        </View>
                        <View style={styles.date_note}>
                            <Text style={styles.dataText}>ADD DATE: </Text>
                            <Text style={styles.dataText}>EXP:2024.4.21</Text>
                            <Text style={styles.dataText}>NOTE: </Text>
                        </View>
                    </View>
                    <View style={styles.btnArea}>
                        <View style={styles.btnContainer}>
                            <Pressable onPress={() => setPressState2(!PressState2)}>
                                {checkbtm2}
                            </Pressable>
                        </View>
                    </View>
                </View>
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
        width: '100%',
        height: 200,
        alignItems: 'center',
    },
    CardBG: {
        width: '85%',
        height: 180,
        backgroundColor: "#001B24",
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: 10,
    },
    infoArea: {
        marginTop: 20,
        backgroundColor: "#001B24",

    },
    img_name: {
        flexDirection: 'row',
        paddingLeft: 15,
        alignItems: 'center'
    },
    date_note: {
        paddingLeft: 30,
        paddingTop: 12

    },
    image: {
        width: 58,
        height: 58,
        borderRadius: 50,
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: "#fff",
        paddingLeft: 10
    },
    dataText: {
        fontSize: 12,
        fontWeight: '500',
        color: "#D9D9D9",
    },
    btnArea: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-end",
        paddingRight: 10,
        position: 'absolute',
        bottom: -10,
        right: -30
    },
    btnContainer: {
        backgroundColor: "#9DBAC1",
        width: 60,
        height: 40,
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default ListDetail; 