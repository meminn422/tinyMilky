import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, useState } from 'react-native';

import ListScreen from '../screens/ListScreen';
import TownScreen from '../screens/TownScreen';
import LightScreen from '../screens/LightScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import active_bookmark from "../image/icon_bookmark_actived.png";
// import inactive_bookmark from "../image/icon_bookmark.png";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: "#E99443",
                tabBarInactiveTintColor: "#D9D9D9",
                tabBarStyle: {
                    backgroundColor: "#8D8884",
                    height: 60,
                    //marginBottom: 30, //大問題:多餘的白邊無法處理
                    //marginHorizontal: 10,
                    //borderRadius: 10,
                },
                tabBarLabelStyle: {
                    //fontFamily: "Irish Grover",
                    fontWeight: '800',
                    fontSize: 12,
                },
            }}>
            <Tab.Screen
                name="Light"
                component={LightScreen}
                options={{
                    title: "LIGHT",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="star-four-points" color={color} size={35} />
                    ),
                }} />

            <Tab.Screen
                name="Home"
                component={TownScreen}
                options={{
                    title: "HOME",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="lighthouse" color={color} size={35} />
                    )
                }} />

            <Tab.Screen
                name="List"
                component={ListScreen}
                options={{
                    title: "LIST",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="format-list-checkbox" color={color} size={35} />
                    ),
                    // headerLeft: () => ( //list返回主頁紐
                    //     <Pressable onPress={() => navigation.goBack()}>
                    //         <MaterialCommunityIcons
                    //             name={'chevron-left'}
                    //             size={24}
                    //         />
                    //     </Pressable>
                    // )  
                }} />
        </Tab.Navigator>
    );
}


export default Navigation;