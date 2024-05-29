import React from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SegmentedControlTab from "react-native-segmented-control-tab";
import ListDetail from "./ListDetail"

const List = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <View>
                    <Text>This is a history Page</Text>
                </View >
            )
        } else {
            return (
                <View>
                    <ListDetail />
                </View>
            )
        }
    }
    return (
        <SafeAreaProvider>

            <View style={styles.title}>
                <Image source={require('../images/list_title.png')} />
            </View>
            <SegmentedControlTab
                values={["Food list", "History"]}
                tabStyle={{
                    backgroundColor: "#9DBAC1",
                    marginTop: 10,
                    borderColor: "#12485B",
                }}
                activeTabStyle={{
                    backgroundColor: "#12485B",
                    marginTop: 10,
                    borderColor: "#12485B",
                }}
                firstTabStyle={{ marginLeft: 20 }}
                lastTabStyle={{ marginRight: 20 }}
                tabTextStyle={{ fontSize: 16, padding: 5, color: "#fff" }}
                activeTabTextStyle={{ color: "#fff" }}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIndex(index)}
            />
            <SegmentedContent />
        </SafeAreaProvider>
    )
};
const styles = StyleSheet.create({
    title: {
        paddingLeft: 20,
        paddingTop: 50,
        paddingBottom: 10,

    }

});

export default List; 