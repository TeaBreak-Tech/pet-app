// 辅助导航

import React from 'react';
import {View} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {ThemeContext} from '../appearance/theme/theme-context-provider'


import DiscoverScreen from '../screens/discover-screen'
import FollowScreen from '../screens/follow-screen'
import DiscussionScreen from '../screens/discussion-screen'

import FloatingButton from '../component/floating-button'

const Tab = createMaterialTopTabNavigator();

// 自定义 Tab 的元素在 header.js 实现

export default class SupportingTabs extends React.Component {
    
    static contextType = ThemeContext;

    render() {
        
        let theme = this.context;

        return (
            <View style={{flex:1}}>
            <Tab.Navigator
                initialRouteName="Discover"
                tabBarOptions={{showLabel:false,style:{height:0}}}>
                <Tab.Screen name="Discover" component={DiscoverScreen}/>
                <Tab.Screen name="Follow" component={FollowScreen}/>
                <Tab.Screen name="Discussion" component={DiscussionScreen}/>  
            </Tab.Navigator>

            <FloatingButton style={{zIndex:3,position: 'absolute',bottom:'10%',left: '80%',}} navigation={this.props.navigation}/>
            </View>
        );
    }
}
