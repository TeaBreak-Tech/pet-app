// 应用程序根导航

// 使用 Stack 的形式提供所有分支页面的导航

// 包裹于 App.js 的 SafeArea 中

import React, { Component } from 'react';
import { TextInput, Button, View,Text,Dimensions,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './main-tabs'
import DiscoverScreen from '../screens/discover-screen'
import HeaderTitle from '../component/header-title'
import HeaderLeft from '../component/header-left'
import HeaderRight from '../component/header-right'

import {ThemeContext} from '../appearance/theme/theme-context-provider'

import { connect } from 'react-redux'
import { navigation } from '../redux/action/navigation_actions'

import { NavigationActions } from 'react-navigation'


// 创建根导航器
const Stack = createStackNavigator();

// 将 Redux 的导航状态管理与根导航关联
export default connect (
  (state) => {return{path: state.nav.path}},
  {navigation}
)(class IndexNav extends Component {
  
  static contextType = ThemeContext;

  // 将 React Navigation 的导航状态变化解析到 Redux 状态管理中
  setRoute(state){
    let route = state.routes[state.index]
    if (route.state){this.setRoute(route.state)}
    else {
      this.props.navigation(route.name)
    }
  }

  render() {
    // 使用主题
    let theme = this.context;
    path = this.props.path
    return (
      <NavigationContainer onStateChange={state => this.setRoute(state)}>
        
        <Stack.Navigator>

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
            headerShown: path=='Mine'?false:true,


            // 顶栏内容
            headerTitle: () => (<HeaderTitle navigation={navigation}/>),  // 传入导航属性让导航栏拥有导航功能
            headerLeft: () => (<HeaderLeft/>),                            // 消息提醒图标
            headerRight: () => (<HeaderRight/>),                              // 宠物图标

            // 标题居中，否则安卓平台会出现显示不正确的问题
            headerTitleAlign:"center"
          })}
        />

        {/* 动态详情页 */}
        <Stack.Screen name="Knowledge" component={KnowledgeScreen} />
        
        {/* 论坛详情页 */}
        {/* 百科内容页 */}
        {/* 消息列表页 */}
        {/* 关注列表页 */}
        {/* 宠物页 */}
        {/* 购物车页 */}

      </Stack.Navigator>
      </NavigationContainer>
    );
  }
})






function KnowledgeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Knowledge screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Discover')}
        />
      </View>
    );
  }
