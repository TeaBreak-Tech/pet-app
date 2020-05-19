import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import style_header from '../appearance/styles/style-header'

import {ThemeContext} from '../appearance/theme/theme-context-provider'

// class: Icon

export default connect (
    (state) => {return{path: state.nav.path}}
)(class Icon extends Component{
    static contextType = ThemeContext;

    render(){

        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        let path = this.props.path  // 获取当前导航状态
        let name = this.props.name

        radius = this.props.radius?this.props.radius:28 // 外部传入图标半径，默认36

        return (
            <View style={[
                // 默认是一个圆形
                {width: radius,
                height: radius,
                borderRadius: radius/2,
                borderWidth: 1,
                borderColor: "gray",
                backgroundColor:"white"},
            ]}>
            </View>
        )
    }
})