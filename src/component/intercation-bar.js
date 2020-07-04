import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import {ThemeContext} from '../appearance/theme/theme-context-provider'
import { CommentOutlined, LikeOutlined, FavoriteOutlined } from "./icon"

class IconButton extends Component{
    static contextType = ThemeContext;

    render(){

        let theme = this.context;

        return (
            <View style={{
                height:35,
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                ...this.props.style,
            }}>
                <TouchableOpacity style={{width:60, flexDirection:"row",justifyContent:"space-evenly",alignItems:'center'}}>
                    <CommentOutlined radius={16} />
                    <Text style={{
                        fontSize: 12,
	                    lineHeight: 17,
                        color: theme.text,
                    }}>26</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:60, flexDirection:"row",justifyContent:"space-evenly",alignItems:'center'}}>
                    <LikeOutlined radius={16} />
                    <Text style={{
                        fontSize: 12,
	                    lineHeight: 17,
                        color: theme.text,
                    }}>26</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:60, flexDirection:"row",justifyContent:"space-evenly",alignItems:'center'}}>
                    <FavoriteOutlined radius={14} />
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