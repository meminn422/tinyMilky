import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListScreen from '../screens/ListScreen';
import TownScreen from '../screens/TownScreen';
import LightScreen from '../screens/LightScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                    marginTop: 30
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
}


export default Navigation;