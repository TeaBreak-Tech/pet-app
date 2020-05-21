// Imports
import React, { Component } from 'react';
import { TouchableOpacity } from "react-native";

// Context
import { connect } from 'react-redux'

// Children
import Icon from '../component/icon'

// Tools
import judgePath from '../tools/path_judger'

export default connect (
    (state) => {return{path: state.nav.path}}
)(class HeaderRight extends Component{
    render(){

        let path = this.props.path  // 获取当前导航状态
        height = judgePath(path).header_height
        // 若未设置透明度，根据路径判断是否显示，否则，只要没有完全透明就要显示
        shown = (this.props.opacity==null)?judgePath(path).header_button_shown:(this.props.opacity>0)
                
        return(
            shown?
            <TouchableOpacity
                style={{height:height,right:30,top:10}}
                onPress={this.props.onPress}>
            
                <Icon/>
                
            </TouchableOpacity>
            :null
        )
    }
})