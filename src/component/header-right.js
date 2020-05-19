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
        shown = judgePath(path).header_button_shown
                
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