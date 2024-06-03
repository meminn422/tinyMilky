import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListScreen from '../screens/ListScreen';
import TownScreen from '../screens/TownScreen';
import LightScreen from '../screens/LightScreen';
import ScanScreen from '../screens/ScanScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Back">
                <Stack.Screen name="Back" component={MyTabs} options={{ headerShown: false }} />
                <Stack.Screen name="ScanScreen" component={ScanScreen} options={{ title: 'ScanScreen' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#E99443",
                tabBarInactiveTintColor: "#D9D9D9",
                tabBarStyle: {
                    backgroundColor: "#12485B",
                    position: 'absolute',
                    bottom: 40,
                    borderRadius: 10,
                    marginHorizontal: 30,
                    height: 55,
                },
                tabBarLabelStyle: {
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
                        <MaterialCommunityIcons name="star-four-points" color={color} size={30} />
                    ),
                }} />
            <Tab.Screen
                name="Home"
                component={TownScreen}
                options={{
                    title: "HOME",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="lighthouse" color={color} size={30} />
                    )
                }} />
            <Tab.Screen
                name="List"
                component={ListScreen}
                options={{
                    title: "LIST",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="format-list-checkbox" color={color} size={30} />
                    ),
                }} />
        </Tab.Navigator>
    );
};

export default Navigation;
