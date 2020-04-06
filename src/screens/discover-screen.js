// 发现页

import React, { Component } from 'react';
import {
    View,
    Text,
} from "react-native"
import {ThemeContext} from '../appearance/theme/theme-context-provider'

export default class DiscoverScreen extends Component {
    // 订阅 ThemeContext
    static contextType = ThemeContext;
    // 渲染页面
    render() {
        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        return (
        <View >
            <Text>
                Hello ! This is discover Screen !  {theme.basic}
            </Text>
            <View style={{backgroundColor:theme.basic,height:30}}></View>
            <View style={{backgroundColor:theme.basic_dark,height:30}}></View>
            <View style={{backgroundColor:theme.basic_light,height:30}}></View>
            <View style={{backgroundColor:theme.alert,height:30}}></View>
            <View style={{backgroundColor:theme.black,height:30}}></View>
            <View style={{backgroundColor:theme.dark_gray,height:30}}></View>
            <View style={{backgroundColor:theme.gray,height:30}}></View>
            <View style={{backgroundColor:theme.light_gray,height:30}}></View>
            <View style={{backgroundColor:theme.white,height:30}}></View>
        </View>
    );}
}




