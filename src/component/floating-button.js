/* 悬浮动作按钮 */

/**
 * style = {}: 用于定位
 * radius = {30}: 按钮的半径
 * action = a function: 相当于onPress, 默认为跳转到编辑页 "Publish-Edit"
 * 注意, 此组件在prop中默认有navigation属性
 */

// Imports
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'


class FloatingButton extends Component{
    static contextType = ThemeContext;

    default_action = ()=>{
        this.props.navigation.navigate("Publish-Edit")
    }

    render(){

        let theme = this.context;
        let style = style_floating_button;
        let outer_style = this.props.style?this.props.style:{};
        let radius = this.props.radius?this.props.radius:30 // 外部传入图标半径，默认30
        let action = this.props.action?this.props.action:this.default_action

        return (
            <TouchableOpacity 
                onPress={action}
                activeOpacity={0.9}
                style={{
                    backgroundColor:theme.basic,
                    width: radius*2,
                    height: radius*2,
                    borderRadius: radius,
                    ...style.container,
                    ...outer_style,
                }}
            >
                <View style={{ backgroundColor:theme.background, ...style.crossing_vertical }} />
                <View style={{ backgroundColor:theme.background, ...style.crossing_horizontal }} />
            </TouchableOpacity>
        )
    }
}

export default FloatingButton

var style_floating_button = StyleSheet.create({
    container:{
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation:5,
        position: 'absolute',
        bottom:'10%',
        left: '80%',
    },
    crossing_vertical:{
        position:"absolute",
        left:'46.7%',
        top:'30%',
        width: 4,
        height: 24,
        borderRadius: 3,
    },
    crossing_horizontal:{
        position:"absolute",
        top:'46.7%',
        left:'30%',
        height: 4,
        width: 24,
        borderRadius: 3,
    }
})