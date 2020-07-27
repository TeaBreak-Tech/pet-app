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
import MomentDetailScreen from '../screens/moment-detail-screen'
import LoginScreen from '../screens/login-screen'

// Context
import { ThemeContext } from '../appearance/theme/theme-context-provider'
import { connect } from 'react-redux'

// Tools
import judgePath from '../tools/path_judger'

const Stack = createStackNavigator();

const IndexStack = ({ path }) => (
    <ThemeContext.Consumer>
        {theme => {
            common_options = {
                headerTitleAlign:"center",
                headerBackTitle:"返回",
                headerTintColor:theme.basic,
                headerTitleStyle:{ color:theme.text_emphasis },
                headerBackTitleStyle:{
                    color:theme.text_emphasis,
                    fontWeight:"bold"
                }
            }
            return(
                <Stack.Navigator initialRouteName="Main" headerMode="screen">

                    <Stack.Screen 
                        name="Main"
                        component={MainTabs}
                        options={({navigation}) => MainHeaderOptions( navigation, theme, judgePath(path) ) }
                    />
                    <Stack.Screen name="Settings" component={SettingsScreen} options={{ title:"设置", ...common_options }} />
                    <Stack.Screen name="Checkin" component={CheckinScreen} options={{ title:"签到", ...common_options }} />
                    <Stack.Screen name="My-Shopping" component={MyShoppingScreen} options={{ title:"我的商城", ...common_options }} />
                    <Stack.Screen name="Virtual-Pet" component={VirtualPetScreen} options={{ title:"虚拟宠物", ...common_options }} />
                    <Stack.Screen name="Inbox" component={InboxScreen} options={{ title:"消息", ...common_options }} />
                    <Stack.Screen name="Edit-Profile" component={EditProfileScreen} options={{title:"账号信息", ...common_options}} />
                    <Stack.Screen name="Publish-Edit" component={PublishEditScreen} options={{title:"发布动态", ...common_options, headerBackTitle:"取消" }} />
                    <Stack.Screen name="Moment-Detail" component={MomentDetailScreen} options={{title:"动态详情", ...common_options}} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{...common_options}} />
                </Stack.Navigator>
            )
        }
    }</ThemeContext.Consumer>
)

export default connect (state=>({ path:state.nav.path })) (IndexStack)