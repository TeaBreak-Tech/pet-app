import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
} from "react-native";

import style_header from '../appearance/styles/style-header'

// 虚拟宠物入口按钮
export default connect (
    (state) => {return{path: state.nav.path}}
)(class HeaderRight extends Component{
    render(){
        let path = this.props.path
        searching = path=='Community-Search'
                || path=='Pedia-Search'
        folded = path=='Pedia-Display'
                || searching
        return(
            path=='Follow'         // 宠物图标仅在这些页面显示
            || path=='Discover'
            || path=='Discussion'
            || path=='Pedia-Display'
            || path=='Pedia-Search'
            || path=='Mine'
            ?<View style={[
                // 搜索框的静态样式
                style_header.petIcon_temp,
                {backgroundColor:"white"},
                {bottom:folded? 7.5:20} ,     // 偏移量是动态的。 7.5 = 20-25/2，25是header缩短量
            ]}>
            </View>:null
        )
    }
})