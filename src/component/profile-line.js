import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Text,
    Image,
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

        user = this.props.user?this.props.user:{
            user_id:253183587,
            username:"爱犬说",
            profile_picture_address:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1237285378,2627779522&fm=26&gp=0.jpg",
            signature:"您的养犬干货仓"
        }

        container_style = this.props.style?this.props.style:{}
        radius = this.props.radius?this.props.radius:18
        signature = this.props.signature?this.props.signature:false
        username_style = this.props.username_style?this.props.username_style:{
            marginLeft:5,
            fontSize: 12,
            lineHeight: 17,
            color: "#535353"
        }
        profile_picture_style = this.props.profile_picture_style?this.props.profile_picture_style:{}
        marginLeft = this.props.marginLeft?this.props.marginLeft:0

        return (
            <View style={[{
                marginLeft:marginLeft,
                height:24,
                flexDirection:"row",
                alignItems:"center",
                },
                container_style
            ]}>
                <View style={profile_picture_style}>
                <Image source={{ uri: user.profile_picture_address }} style={{height:radius,width:radius,borderRadius:radius/2}}/>
                </View>
                <Text numberOfLines={1} style={username_style}>{user.username}</Text>
                {signature?<Text numberOfLines={1}
                    style={{
                    marginLeft:10,
                    fontSize: 12,
                    lineHeight: 17,
                    color: "#707070"
                }}>{user.signature}</Text>:null}
            </View>
        )
    }
}

export default IconButton