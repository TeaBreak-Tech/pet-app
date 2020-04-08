import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Dimensions,
} from "react-native";

import style_header from '../appearance/styles/style-header'

import Svg, { G, Path } from 'react-native-svg';

import {ThemeContext} from '../appearance/theme/theme-context-provider'

// 左上角消息提示按钮以及图案背景（暂且放在一起）

// 关联 Redux，订阅导航状态
export default connect (
    (state) => {return{path: state.nav.path}}
)(class HeaderLeft extends Component{
    // 订阅 ThemeContext
    static contextType = ThemeContext;

    render(){
        width = Dimensions.get('window').width
        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        // 获取当前导航状态
        let path = this.props.path
        searching = path=='Community-Search'
                || path=='Pedia-Search'
        folded = path=='Pedia-Display'
                || searching

        return (
            <View>
            {searching?null:    // 消息框在搜索页面不显示
            <View style={[
                // 搜索框的静态样式
                style_header.messageIcon_temp,
                // 搜索框颜色跟随主题
                {zIndex:2,backgroundColor:"white",borderColor:"black",borderWidth:1},
                {bottom:folded? 7.5:20} ,     // 偏移量是动态的。 7.5 = 20-25/2，25是header缩短量
            ]}>
            </View>}

            {/* 渐变的实现 */}
            {searching?null:    // 渐变在搜索页面不显示
            <View style={{height:0}}>
                {/* 占位容器到底部的距离是 25，100-25=75，100是随便取的，比图形大就可以 */}
                <View style={
                    {width,bottom:75+(folded?12.5:0)    // 偏移量是动态的。12.5=...，25是header缩短量
                        ,height:100}}>

                    <Svg height="100%" width="100%" viewBox="0 0 375.07 30.53">   
                        <G fill={theme.basic_shadow}>
                            <Path strokeLinecap="round" strokeWidth="2" transform="translate(-74.27 -230.45)" d="M74.27,251.19c30.82,15,55.78,17.84,72.16,17.87,36.42.09,45.34-13.44,123.43-30.52,23.83-5.21,41.9-8.08,63.8-8.09,15.06,0,32.58.34,54.34,6.2,62.76,16.91,61.34,28.23,61.34,28.23V297H74.27Z" />
                        </G>   
                    </Svg>
                </View>
            </View>}
            </View>
        )
    }
})