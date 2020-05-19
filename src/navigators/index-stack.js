// Imports
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Children
import MainHeaderOptions from '../component/main-header-options'
import MainTabs from './main-tabs'
import SettingScreen from '../screens/setting-screen'
import CheckinScreen from '../screens/checkin-screen'

// Context
import { ThemeContext } from '../appearance/theme/theme-context-provider'
import { connect } from 'react-redux'

// Tools
import judgePath from '../tools/path_judger'

const Stack = createStackNavigator();

function IndexStack({path}) {

    return (
        <ThemeContext.Consumer>
            {theme=>(
                <Stack.Navigator initialRouteName="Main" mode= "modal">

                {/* APP 主页面 */}
                <Stack.Screen name="Main" component={MainTabs} options={({navigation})=>(MainHeaderOptions(12,navigation,theme,judgePath(path)))}/>
                {/* 我-设置页 */}
                <Stack.Screen name="Settings" component={SettingScreen}/>
                {/* 签到页 */}
                <Stack.Screen name="Checkin" component={CheckinScreen}/>
    
                </Stack.Navigator>
            )}
        </ThemeContext.Consumer>
        
    );
}


export default connect (
    (state) => {return{path: state.nav.path}}
)(IndexStack)