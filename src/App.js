// 程序入口

// 引入外部依赖
import React, { Component } from 'react';
import { Provider,Text } from 'react-redux';
import 'react-native-gesture-handler'; //不知道有没有用

// StoreProvider 用于 redux 建立联系
import StoreProvider from './redux/store-provider';
// Context 对象用来提供全局的 theme 变量
import ThemeContextProvider from './theme/ThemeContextProvider'

// 引入主导航文件（下一级入口）
import IndexNav from './navigators/IndexNav'

// 使用输出 App类 的形式作为程序入口
export default class App extends Component {
  render() {
    // 两层包装：
    // 使用 Context.provider 封装，
    // 使用 Provider 封装应用，传入 Store 对象
    return (
      <ThemeContextProvider >
        <StoreProvider>
            {/* 用根导航器 navigatior/IndexNav.js 作为下一级入口 */}
            <IndexNav/>
        </StoreProvider>
      </ThemeContextProvider>
    );
  }
};
