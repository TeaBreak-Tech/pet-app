import React, { Component } from 'react';

import { connect } from 'react-redux'

import { TouchableOpacity } from "react-native";

import Icon from '../component/icon'

// 虚拟宠物入口按钮

export default connect (
    (state) => {return{path: state.nav.path}}
)(class HeaderRight extends Component{
    render(){

        let path = this.props.path  // 获取当前导航状态

        show = path=='Community-Search'
                || path=='Find-Search'
        searching = path=='Community-Search'
                || path=='Find-Search'
        Mine = path=="Mine"
                || path=="Settings" // 页面切换动画时仍然保持 Mine 页设置
                || path=="Checkin"
        folded = path=='Find-Display'
                || Mine
                || searching
                
        return(
            show? null:
            <TouchableOpacity
                style={{
                    right:15,
                    bottom:folded? 7.5:20}} // 偏移量是动态的。 7.5 = 20-25/2，25是header缩短量
                onPress={this.props.onPress}>
            
                <Icon/>
                
            </TouchableOpacity>
        )
    }
})