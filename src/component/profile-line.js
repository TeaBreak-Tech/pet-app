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

        let container_style = this.props.style?this.props.style:{}
        let radius = this.props.radius?this.props.radius:18
        let signature = this.props.signature?this.props.signature:false
        let username_style = this.props.username_style?this.props.username_style:{}
        let profile_picture_style = this.props.profile_picture_style?this.props.profile_picture_style:{}
        let marginLeft = this.props.marginLeft?this.props.marginLeft:0
        let additional_text = this.props.additional_text?this.props.additional_text:false
        let additional_text_style = this.props.additional_text_style?this.props.additional_text_style:{}
        let show_follow_button = this.props.show_follow_button?this.props.show_follow_button:false

        return (
            <View 
                style={[{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginLeft:marginLeft,
                    minHeight:24,
                },
                container_style]}
            >
                <View 
                    style={[{
                        flexDirection:"row",
                        alignItems:"center",
                    }
                ]}>
                    <View style={profile_picture_style}>
                    <Image source={{ uri: user.profile_picture_address }} style={{height:radius,width:radius,borderRadius:radius/2}}/>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:"row",}}>
                            <Text 
                                numberOfLines={1} 
                                style={[{
                                        marginLeft:5,
                                        fontSize: 12,
                                        lineHeight: 17,
                                        color: "#535353"
                                    },
                                    username_style,
                                ]}
                            >{user.username}</Text>
                            {signature?<Text numberOfLines={1}
                                style={{
                                marginLeft:10,
                                fontSize: 12,
                                lineHeight: 17,
                                color: "#707070"
                            }}>{user.signature}</Text>:null}
                        </View>
                        {additional_text?<Text style={[{
                            marginLeft:5,
                            fontSize: 12,
                            lineHeight: 17,
                            color: "#707070"
                        },additional_text_style
                        ]}>{additional_text}</Text>:null}
                    </View>
                </View>
                {show_follow_button?
                    <TouchableOpacity 
                        style={{
                            width: 61,
                            height: 20,
                            borderRadius: 10,
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderColor: theme.basic_emphasis,
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                        activeOpacity={0.5}
                    >
                        <Text style={{
                            color: theme.basic_emphasis
                        }}>关注</Text>
                    </TouchableOpacity>
                :null}
            </View>
        )
    }
}

export default IconButton