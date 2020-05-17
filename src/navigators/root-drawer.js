import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {ThemeContext} from '../appearance/theme/theme-context-provider'

import { connect } from 'react-redux'
import { navigation } from '../redux/action/navigation_actions'

import IndexStack from './index-stack'
import InfoDrawerScreen from '../screens/info-drawer-screen'

const Drawer = createDrawerNavigator();



export default connect (
    (state) => {return{path: state.nav.path}},
    {navigation}
)(class InfoDrawer extends Component {

    static contextType = ThemeContext;

    // 将 React Navigation 的导航状态变化解析到 Redux 状态管理中
    setRoute(state){
        let route = state.routes[state.index]
        if (route.state){this.setRoute(route.state)} //迭代
        else {
            this.props.navigation(route.name)
        }
    }

    render() {

        let theme = this.context;
        path = this.props.path

        return (
            <NavigationContainer onStateChange={state => this.setRoute(state)}>
                {/* 任何导航信息变化都将在 Redux 中同步更新 */}
                <Drawer.Navigator
                    drawerType={'front'}
                    drawerContent={props=><InfoDrawerScreen {...props}/>}
                >   
                    <Drawer.Screen name="IndexStack" component={IndexStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
})
  