// 发现页

import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
} from "react-native"
import {ThemeContext} from '../appearance/theme/theme-context-provider'

import style from '../appearance/styles/style-header'

export default class DiscoverScreen extends Component {
    // 订阅 ThemeContext
    static contextType = ThemeContext;
    // 渲染页面
    render() {
        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        return (
        <View >
            {/* 安卓端需要用它来美化状态栏 */}
            <StatusBar
                backgroundColor={theme.basic}
                hidden={false}/>
            <Text>This is Discover Screen</Text>
            
            
        </View>
    );}
}




