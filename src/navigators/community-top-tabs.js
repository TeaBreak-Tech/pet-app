/* 社区板块的辅助导航 */

// Import
import React from 'react';
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Children and Component
import DiscoverScreen from '../screens/discover-screen'
import FollowScreen from '../screens/follow-screen'
import DiscussionScreen from '../screens/discussion-screen'
import FloatingButton from '../component/floating-button'

const Tab = createMaterialTopTabNavigator();


const CommunityTopTabs = ({navigation}) => (
    <View style={{flex:1}}>
        <Tab.Navigator initialRouteName="Discover" tabBarOptions={{ showLabel:false, style:{ height:0 } }}>
            <Tab.Screen name="Discover" component={DiscoverScreen}/>
            <Tab.Screen name="Follow" component={FollowScreen}/>
            <Tab.Screen name="Discussion" component={DiscussionScreen}/>  
        </Tab.Navigator>
        <FloatingButton navigation={navigation}/>
    </View>
)

export default CommunityTopTabs
