// 寻找板块的辅助导航

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import FeedScreen from '../screens/feed-screen'
import NearbyScreen from '../screens/nearby-screen'

const Tab = createMaterialTopTabNavigator();

// 自定义 Tab 的元素在 header.js 实现

export default class SupportingTabs extends React.Component {
    
    static contextType = ThemeContext;

    render() {
        
        let theme = this.context;

        return (
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{showLabel:false,style:{height:0}}}>
                <Tab.Screen name="Feed" component={FeedScreen}/>
                <Tab.Screen name="Nearby" component={NearbyScreen}/> 
            </Tab.Navigator>
        );
    }
}
