import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { createStackNavigator } from '@react-navigation/stack';

import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import CommunityTopTabs from './community-top-tabs'
import FindTopTabs from './find-top-tabs'
import SearchScreen from '../screens/search-screen'
import MineScreen from '../screens/mine-screen'
//import Demo from '../screens/scroll-demo'


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
                <Tab.Screen name="Community" component={CommunityTopTabs} />
                <Tab.Screen name="Find" component={Find} />
                
                <Tab.Screen name="Mine" component={MineScreen} />
            </Tab.Navigator>
        );
    }
}
//<Tab.Screen name="Demo" component={Demo} />

const FindStack = createStackNavigator();

class Find extends Component {
    render() {
      return (
        <FindStack.Navigator>

          {/* 主显示页 */}
          <FindStack.Screen name="Find-Display" component={FindTopTabs} 
          options={{headerShown:false}}/>
          {/* 搜索页 */}
          <FindStack.Screen name="Search" component={SearchScreen}
          options={{headerShown:false}}/>
  
        </FindStack.Navigator>
    );}
}

