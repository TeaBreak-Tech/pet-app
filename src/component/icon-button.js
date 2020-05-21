import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import {ThemeContext} from '../appearance/theme/theme-context-provider'

class IconButton extends Component{
    static contextType = ThemeContext;

    render(){

        let theme = this.context;
        let title = this.props.title;
        let icon_name = this.props.icon_name;
        let 

        radius = this.props.radius?this.props.radius:28 // 外部传入图标半径，默认36
        opacity = this.props.opacity?this.props.opacity:0
        shown = opacity<100

        return shown?(
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
        ):null
    }
}

export default IconButton