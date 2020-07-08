// 寻找板块的辅助导航

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Children
import FeedScreen from '../screens/feed-screen'
import NearbyScreen from '../screens/nearby-screen'

const Tab = createMaterialTopTabNavigator();


const FindTopTabs = () => (
    <Tab.Navigator initialRouteName="Feed" tabBarOptions={{ showLabel:false, style:{ height:0 } }}>
        <Tab.Screen name="Feed" component={FeedScreen}/>
        <Tab.Screen name="Nearby" component={NearbyScreen}/> 
    </Tab.Navigator>
)

export default FindTopTabs
