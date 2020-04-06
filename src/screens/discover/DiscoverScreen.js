// 发现页

import React, { Component } from 'react';
import {
    View,
    Text,
} from "react-native"
import {ThemeContext} from '../../theme/ThemeContextProvider'

export default class DiscoverScreen extends Component {
    // 订阅 ThemeContext
    static contextType = ThemeContext;
    // 渲染页面
    render() {
        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        return (
        <View >
            <Text>
                Hello ! This is discover Screen !  {theme.foreground}
            </Text>
        </View>
    );}
}




