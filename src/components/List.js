import React from "react-native";
import { Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ListDetail from "./ListDetail"
const List = () => {
    return (
        <SafeAreaProvider>
            <Text style={styles.title}>Your List</Text>
            <ListDetail />
        </SafeAreaProvider>
    )
};
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#001B24',
        paddingLeft: 20,
        paddingTop: 50,
        fontWeight: "500",
    }

});

export default List; 