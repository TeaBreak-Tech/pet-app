import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import DiscoverScreen from '../screens/discover-screen'
import MineScreen from '../screens/mine-screen'

import {
    View,
    Text,
} from "react-native";

const Tab = createBottomTabNavigator();

export default class MainTabs extends Component {
    render() {
        return (
            <Tab.Navigator
                // Configure the Icons in the tab bar
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
      
                        if (route.name === 'Home') {
                            iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }
      
                        // Return 
                        return <Text>Haha</Text>;
                    },
                })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                keyboardHidesTabBar: true,
              }}
            >
                <Tab.Screen name="Discover" component={DiscoverScreen} />
                <Tab.Screen name="Discover1" component={MineScreen} />
            </Tab.Navigator>
        );
    }
}

