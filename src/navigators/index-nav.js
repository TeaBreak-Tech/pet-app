// 应用程序根导航

// 使用 Stack 的形式提供所有分支页面的导航

// 包裹于 App.js 的 SafeArea 中

import React, { Component } from 'react';
import { TextInput, Button, View,Text,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './main-tabs'
import DiscoverScreen from '../screens/discover-screen'
import {NoticeIcon, SearchingBar, PetIcon, SearchingList} from '../component/header'
import style_header from '../appearance/styles/style-header'

// 创建根导航器
const Stack = createStackNavigator();

export default class IndexNav extends Component {
  
  // 动态记录顶栏所处的状态 
  state = {
    search_visible: true,   // 搜索框是否可见
    search_state: false,     // 是否处于搜索状态
  };

  render() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* 主导航 */}
        {/* 主导航拥有一个 header，可以根据主导航所在的页面而改变样式 */}
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{
            // 顶栏样式：
            headerStyle: {backgroundColor: '#f4511e'},   // 颜色跟随主题
            // 顶栏内容
            headerLeft: () => (<NoticeIcon/>),    // 消息提醒图标
            headerTitle: () => (
              <><SearchingBar/>
              {this.state.search_state            // 搜索模式下显示结果列表
                ?<SearchingList/>
                :null}</>
            ), 
            headerRight: () => (<PetIcon/>),      // 虚拟宠物图标
          }}
        />

        {/* 动态详情页 */}
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        {/* 论坛详情页 */}
        {/* 百科内容页 */}
        {/* 消息列表页 */}
        {/* 关注列表页 */}
        {/* 宠物页 */}
        {/* 购物车页 */}

      </Stack.Navigator>
    </NavigationContainer>
  );}
}

function KnowledgeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Knowledge screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
