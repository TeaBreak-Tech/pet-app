// Imports
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Children
import MainHeaderOptions from '../component/main-header-options'
import MainTabs from './main-tabs'
import SettingsScreen from '../screens/settings-screen'
import CheckinScreen from '../screens/checkin-screen'
import MyShoppingScreen from '../screens/my-shopping-screen'
import VirtualPetScreen from '../screens/virtual-pet-screen';
import InboxScreen from '../screens/inbox-screen'
import EditProfileScreen from '../screens/mine-sub-screens/edit-profile-screen'
import PublishEditScreen from '../screens/publish-edit-screen'

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
                <Stack.Navigator initialRouteName="Main" headerMode="screen">

                {/* APP 主页面 */}
                <Stack.Screen name="Main" component={MainTabs} options={({navigation})=>(MainHeaderOptions(12,navigation,theme,judgePath(path)))}/>
                {/* 我-设置页 */}
                <Stack.Screen name="Settings" component={SettingsScreen}
                    options={{title:"设置",headerTitleAlign:"center",headerBackTitle:"返回",headerTintColor:theme.basic,headerTitleStyle:{color:theme.text_emphasis},headerBackTitleStyle:{color:theme.text_emphasis,fontWeight:"bold"}}}/>
                {/* 签到页 */}
                <Stack.Screen name="Checkin" component={CheckinScreen}
                    options={{title:"签到",headerTitleAlign:"center",headerBackTitle:"返回",headerTintColor:theme.basic,headerTitleStyle:{color:theme.text_emphasis},headerBackTitleStyle:{color:theme.text_emphasis,fontWeight:"bold"}}}/>
                {/* 我的商城 */}
                <Stack.Screen name="My-Shopping" component={MyShoppingScreen}
                    options={{title:"我的商城",headerTitleAlign:"center",headerBackTitle:"返回",headerTintColor:theme.basic,headerTitleStyle:{color:theme.text_emphasis},headerBackTitleStyle:{color:theme.text_emphasis,fontWeight:"bold"}}}/>
                {/* 虚拟宠物页 */}
                <Stack.Screen name="Virtual-Pet" component={VirtualPetScreen}
                    options={{title:"虚拟宠物",headerTitleAlign:"center",headerBackTitle:"返回",headerTintColor:theme.basic,headerTitleStyle:{color:theme.text_emphasis},headerBackTitleStyle:{color:theme.text_emphasis,fontWeight:"bold"}}}/>
                {/* 消息页 */}
                <Stack.Screen name="Inbox" component={InboxScreen}
                    options={{title:"消息",headerTitleAlign:"center",headerBackTitle:"返回",headerTintColor:theme.basic,headerTitleStyle:{color:theme.text_emphasis},headerBackTitleStyle:{color:theme.text_emphasis,fontWeight:"bold"}}}/>
                {/* 个人信息编辑页 */}
                <Stack.Screen name="Edit-Profile" component={EditProfileScreen}
                    options={{title:"账号信息",headerTitleAlign:"center",headerBackTitle:"返回",headerTintColor:theme.basic,headerTitleStyle:{color:theme.text_emphasis},headerBackTitleStyle:{color:theme.text_emphasis,fontWeight:"bold"}}}/>
                {/* 发布页 */}
                <Stack.Screen name="Publish-Eidt" component={PublishEditScreen}
                    options={{title:"发布动态",headerTitleAlign:"center",headerBackTitle:"取消",headerTintColor:theme.basic,headerTitleStyle:{color:theme.text_emphasis},headerBackTitleStyle:{color:theme.text_emphasis,fontWeight:"bold"}}}/>
                
                </Stack.Navigator>
            )}
        </ThemeContext.Consumer>
        
    );
}


export default connect (
    (state) => {return{path: state.nav.path}}
)(IndexStack)