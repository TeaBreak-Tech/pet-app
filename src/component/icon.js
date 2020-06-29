import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import style_header from '../appearance/styles/style-header'

import {ThemeContext} from '../appearance/theme/theme-context-provider'

import ViewFillSVG from '../appearance/assets/svg/view_fill'

// class: Icon

const Icon = (props) => {

    let radius = props.radius?props.radius:28 // 外部传入图标半径，默认36
    let Component = props.component?props.component:()=><View/>
    let outer_style = props.style?props.style:{};

    return (
        <View style={[
            // 默认是一个圆形
            {width: radius,
            height: radius,
            borderRadius: radius/2,
            borderWidth: 1,
            borderColor: "gray",
            backgroundColor:"white"},
            outer_style,
        ]}>
            <Component/>
        </View>
    )
    
}

export default connect (
    (state) => {return{path: state.nav.path}}
)(Icon)

// 浏览量图标
export const ViewFill = ({ radius }) => {
    //Icon = require('../../res/icon/pawn.svg')
    radius=radius?radius:28
    return(
        <View style={{}}>
            <ViewFillSVG width={radius} height={radius}/>
        </View>
    )
}