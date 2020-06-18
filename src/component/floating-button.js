import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Dimensions,
    TouchableOpacity,
    Animated
} from "react-native";
import {ThemeContext} from '../appearance/theme/theme-context-provider'

class FloatingButton extends Component{
    static contextType = ThemeContext;

    render(){

        let theme = this.context;
        let title = this.props.title;
        let icon_name = this.props.icon_name;

        let outer_style = this.props.style?this.props.style:{};

        navigate_to = this.props.navigate_to?this.props.navigate_to:'Publish-Eidt' // 外部传入图标半径，默认36
        radius = this.props.radius?this.props.radius:60 // 外部传入图标半径，默认36
        opacity = this.props.opacity?this.props.opacity:0
        shown = opacity<100

        return shown?(
            <TouchableOpacity 
                activeOpacity={0.9}
                onPress={()=>{
                    this.props.navigation.navigate(navigate_to)
                }}
                style={[
                // 默认是一个圆形
                {width: radius,
                height: radius,
                borderRadius: radius/2,
                shadowColor: "black",
	            shadowOffset: {
		            width: 0,
		            height: 2
	            },
	            shadowRadius: 3,
	            shadowOpacity: 0.5,
                backgroundColor:theme.basic},
                outer_style
            ]}>
                <View style={{
                    position:"absolute",
                    left:'46.7%',
                    top:'30%',
                    width: 4,
	                height: 24,
	                borderRadius: 3,
                    backgroundColor:theme.background,
                }}></View>
                <View style={{
                    position:"absolute",
                    top:'46.7%',
                    left:'30%',
                    height: 4,
	                width: 24,
	                borderRadius: 3,
                    backgroundColor:theme.background,
                }}></View>
            </TouchableOpacity>
        ):null
    }
}

export default FloatingButton