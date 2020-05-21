// 程序入口

// 引入外部依赖
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler'; //不知道有没有用


import { NavigationContainer } from '@react-navigation/native';

// StoreProvider 用于 redux 建立联系
import StoreProvider from './redux/store-provider';
// Context 对象用来提供全局的 theme 变量
import ThemeContextProvider from './appearance/theme/theme-context-provider'

// 引入主导航文件（下一级入口）
import RootDrawer from './navigators/root-drawer'

// 使用输出 App类 的形式作为程序入口
export default class App extends Component {
  
  render() {
    // 两层包装：
    // 使用 Context.provider 封装，
    // 使用 Provider 封装应用，传入 Store 对象
    return (
      <ThemeContextProvider >
        <StoreProvider>
          
            {/* 用根导航器 RootDrawer 作为下一级入口 */}
            <RootDrawer/>
          
        </StoreProvider>
      </ThemeContextProvider>
    );
  }
};
