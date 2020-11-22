import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import IndexStack from './index-stack'
import InfoDrawerScreen from '../screens/info-drawer-screen'

import { connect } from 'react-redux'
import { saveLoginState } from '../redux/action/login_actions'

import { getData } from '../tools/async-storage'

const Drawer = createDrawerNavigator();

const InfoDrawer = ({isLogin, user, saveLoginState}) => {

    const resumeLogin = async () => {
        loginInfo = await getData('app_login')
        if(loginInfo){
            console.log(loginInfo)
            saveLoginState(loginInfo.user)
        }
    }

    if(!isLogin){
        console.log("try login")
        resumeLogin()
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerType={'front'}
                drawerContent={props=><InfoDrawerScreen {...props}/>}
            >   
                <Drawer.Screen name="IndexStack" component={IndexStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default connect (state=>({ isLogin:state.login.isLogin, user:state.login.user }),{saveLoginState}) (InfoDrawer)