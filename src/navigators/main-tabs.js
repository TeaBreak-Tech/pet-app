import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { createStackNavigator } from '@react-navigation/stack';

import {ThemeContext} from '../appearance/theme/theme-context-provider'


import SupportingTabs from './community-top-tabs'

import CommunitySearchScreen from '../screens/community-search-screen'
import PediaSearchScreen from '../screens/pedia-search-screen'
import MineScreen from '../screens/mine-screen'
import PediaScreen from '../screens/pedia-screen'

import Logo from "../../res/icon/pawn.svg";


const Tab = createBottomTabNavigator();

export default class MainTabs extends Component {

    static contextType = ThemeContext;

    render() {

        let theme = this.context;

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
                        return <Logo/>;
                    },
                })}
              tabBarOptions={{
                activeTintColor: theme.alert,
                inactiveTintColor: theme.gray,
                keyboardHidesTabBar: true,
              }}
              lazy={false}  // 这里是否使用lazy还有待研究
            >   
                <Tab.Screen name="Pedia" component={Pedia} />
                <Tab.Screen name="Community" component={Community} />
                <Tab.Screen name="Mine" component={MineScreen} />
            </Tab.Navigator>
        );
    }
}


// 创建社区页的搜索框导航
const CommunityStack = createStackNavigator();

class Community extends Component {
    render() {
      return (
        <CommunityStack.Navigator>
          {/* 主显示页 */}
          <CommunityStack.Screen name="Community-Display" component={SupportingTabs} 
          options={{headerShown:false}}/>
          {/* 搜索页 */}
          <CommunityStack.Screen name="Community-Search" component={CommunitySearchScreen}
          options={{headerShown:false}}/>
  
        </CommunityStack.Navigator>
    );}
}

const PediaStack = createStackNavigator();

class Pedia extends Component {
    render() {
      return (
        <PediaStack.Navigator>
          {/* 主显示页 */}
          <PediaStack.Screen name="Pedia-Display" component={PediaScreen} 
          options={{headerShown:false}}/>
          {/* 搜索页 */}
          <PediaStack.Screen name="Pedia-Search" component={PediaSearchScreen}
          options={{headerShown:false}}/>
  
        </PediaStack.Navigator>
    );}
}

