// 应用程序根导航

// 使用 Stack 的形式提供所有分支页面的导航

// Header 在此处加入
// Header 设置：动态高度、动态透明
// Header 组件的点击导航事件在此设置

// 关于设置Header：https://reactnavigation.org/docs/stack-navigator/#navigationoptions-used-by-stacknavigator


import React, { Component } from 'react';
import { Button, View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';



import {ThemeContext} from '../src/appearance/theme/theme-context-provider'

import { connect } from 'react-redux'
import { navigation } from '../src/redux/action/navigation_actions'

import HeaderTitle from '../src/component/header-center'
import HeaderLeft from '../src/component/header-left'
import HeaderRight from '../src/component/header-right'

import MainTabs from '../src/navigators/main-tabs'
import InfoDrawer from '../src/navigators/root-drawer'
import SettingScreen from '../src/screens/setting-screen'
import CheckinScreen from '../src/screens/checkin-screen'



// 创建根导航器
const Stack = createStackNavigator();
//const headerHeight = useHeaderHeight();
const text = "aaa"

// 将 Redux 的导航状态管理与根导航关联
export default connect (
  (state) => {return{path: state.nav.path}},
  {navigation}
)(class IndexNav extends Component {
  
  static contextType = ThemeContext;
  
  render() {
    // 使用主题
    let theme = this.context;
    path = this.props.path
    
    Mine = path=="Mine"
        || path=="Settings" // 页面切换动画时仍然保持 Mine 页设置
        || path=="Checkin"

    // const headerHeight = useHeaderHeight();
    // a = this.state.headerHeight

    return (
      <Stack.Navigator
          initialRouteName="Main"
          mode= "modal"
        >

        {/* 主导航 */}
        {/* 主导航拥有一个 header，可以根据主导航所在的页面而改变样式 */}
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={({ navigation }) => ({  // 这里要传入 navigation 属性，使自定义 tab 具有导航功能
            
            // 顶栏样式：
            headerStyle: {backgroundColor: theme.basic,       // 颜色跟随主题
              height:                                         // 根据所处页面来动态设置导航栏高度
                (Platform.OS === "ios" ? 30+75 : 30+75-45)  // 首先根据设备制定基本高度
                +(path=='Follow'
                  || path=='Discover'
                  || path=='Discussion' ?25:0)            // 导航隐藏时减去导航高度
            },

            // 顶栏内容
            //headerTitle: () => (<HeaderTitle navigation={navigation}/>),  // 传入导航属性让导航栏拥有导航功能
            headerTitle: () => (<HeaderTitle navigation={navigation}/>),  // 传入导航属性让导航栏拥有导航功能
            headerLeft: () => (<HeaderLeft
              onPress={()=>path=='Mine'?
              navigation.navigate('Settings'):   // 我=设置按钮
              navigation.openDrawer()           // 头像按钮
            }/>),
            headerRight: () => (<HeaderRight 
              onPress={()=>path=='Mine'?
              navigation.navigate('Checkin'):  // 签到按钮
              navigation.navigate('Checkin')   // 宠物按钮
            }/>),

            // 标题居中，否则安卓平台会出现显示不正确的问题
            headerTitleAlign:"center",

            // 设置透明：在“我”页会透明
            headerTransparent: Mine? true:false,


          })}
        />

        {/* 动态详情页 */}
        
        
        {/* 论坛详情页 */}

        {/* 百科内容页 */}
        {/* 消息列表页 */}
        {/* 关注列表页 */}
        {/* 宠物页 */}
        {/* 购物车页 */}
        {/* 我-设置页 */}
        <Stack.Screen name="Settings" component={SettingScreen} />
        {/* 签到页 */}
        <Stack.Screen name="Checkin" component={CheckinScreen} />
        {/* 购物车页 */}

      </Stack.Navigator>
    );
  }
})
