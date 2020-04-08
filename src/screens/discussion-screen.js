// 论坛页

import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from "react-native"
import {ThemeContext} from '../appearance/theme/theme-context-provider'

export default class DiscussionScreen extends Component {
    // 订阅 ThemeContext
    static contextType = ThemeContext;
    // 渲染页面
    render() {
        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        return (
        <View >
            <Text>
                Hello ! This is discussion Screen !  {theme.basic}
            </Text>
        </View>
    );}
}

