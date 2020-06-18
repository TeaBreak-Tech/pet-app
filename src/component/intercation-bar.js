import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import {ThemeContext} from '../appearance/theme/theme-context-provider'
import Icon from "./icon"

class IconButton extends Component{
    static contextType = ThemeContext;

    render(){

        let theme = this.context;
        let title = this.props.title;
        let icon_name = this.props.icon_name;

        return (
            <View style={{
                height:35,
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
            }}>
                <TouchableOpacity style={{width:60, flexDirection:"row",justifyContent:"space-evenly"}}>
                    <Icon radius={18}></Icon>
                    <Text style={{
                        fontSize: 12,
	                    lineHeight: 17,
                        color: theme.text,
                    }}>26</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:60, flexDirection:"row",justifyContent:"space-evenly"}}>
                    <Icon radius={18}></Icon>
                    <Text style={{
                        fontSize: 12,
	                    lineHeight: 17,
                        color: theme.text,
                    }}>26</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:60, flexDirection:"row",justifyContent:"space-evenly"}}>
                    <Icon radius={18}></Icon>
                    <Text style={{
                        fontSize: 12,
	                    lineHeight: 17,
                        color: theme.text,
                    }}>26</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default IconButton