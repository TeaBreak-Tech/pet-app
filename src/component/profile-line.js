/* Profile Line: 单行用户信息 */

/*
    # 选项 #
    user:
        建议必填项, 包含 { profile_picture_address, username, signature }
    container_style:
        选填, 补充声明单行用户信息的最外层包裹容器的样式表, 一般用于定位 (默认无样式)
    avator_radius:
        选填, 用户头像的直径 (默认18，以匹配默认字体的行高)
    signature:
        是否显示个性签名, 设为 true 则显示, 在用户名左侧10单位处以12号字体显示一段个性签名 (默认false)
    shadow_style:
        覆写头像和文字的阴影样式, 默认不启用, 
        也可将值设置为 'default', 则使用全局默认重阴影样式, 建议仅当背景色为透明时使用
        若要单独设置某个部分的阴影值，可在对应的 profile_picture_style、username_style 中进行*补充声明*
        注意，在安卓端，文字不会有阴影效果，因此如果使用默认阴影效果，在安卓端会表现为一块颜色为 #0003 的背景层
    profile_picture_style:
        声明头像容器的样式 (默认没有样式), 例如添加一个圆形边框,
        注意这些样式不会改变头像图本身的样式(如需修改头像图的大小，还需同时在 avator_radius 中声明)
        此处可以部分或全部修改头像容器默认的阴影样式
    username_style:
        *补充声明*用户名文字的样式, 默认距离左侧头像9个单位, 使用12号字体和主题的加重文字色,
        此处可以部分或全部修改用户名文字默认的阴影样式
    additional_text:
        此属性使用动态变量类型，如果为 false, 则不显示 (默认false),
        如果为一个字符串, 将在用户信息行的下一行显示这段额外信息, 此时头像对齐在两行中间
    additional_text_style:
        补充设置, 这段额外文字的样式, 默认已设置12号字体, 主题普通文字色,
    show_follow_button:
        若为true, 将显示一个关注键
    
    marginLeft (不建议使用):
        已废弃的快捷接口, 用于设定一段单位距离的缩进, 这可以在container_style中设置
*/


import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform,
} from "react-native";
import {ThemeContext} from '../appearance/theme/theme-context-provider'

import style_default from '../appearance/styles/style-defaults'

class IconButton extends Component{
    static contextType = ThemeContext;

    render(){

        let theme = this.context;

        user = this.props.user?this.props.user:{
            user_id:253183587,
            username:"爱犬说",
            profile_picture_address:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1237285378,2627779522&fm=26&gp=0.jpg",
            signature:"您的养犬干货仓"
        }

        let container_style = this.props.style?this.props.style:{}
        let avator_radius = this.props.avator_radius?this.props.avator_radius:18
        let signature = this.props.signature?this.props.signature:false
        let shadow_style = this.props.shadow?this.props.shadow==='default'?style_default.shadow:this.props.shadow:{}
        let text_shadow_style = this.props.shadow?this.props.shadow==='default'?style_default.dark_shadow:this.props.shadow:{}
        let username_style = this.props.username_style?this.props.username_style:{}
        let profile_picture_style = this.props.profile_picture_style?this.props.profile_picture_style:{}
        let marginLeft = this.props.marginLeft?this.props.marginLeft:0
        let additional_text = this.props.additional_text?this.props.additional_text:false
        let additional_text_style = this.props.additional_text_style?this.props.additional_text_style:{}

        let show_follow_button = this.props.show_follow_button?this.props.show_follow_button:false
        let onFollow = this.props.onFollow?this.props.onFollow:()=>{alert("已点击关注（未定义操作）")}

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
                    <View style={[{zIndex:2},profile_picture_style,shadow_style]}>
                        <Image source={{ uri: user.profile_picture_address }} style={{height:avator_radius,width:avator_radius,borderRadius:avator_radius/2}}/>
                    </View>
                    <View style={{
                        zIndex:1,
                        flexDirection:'column',
                        left:-avator_radius/2,
                        borderTopRightRadius:12,
                        borderBottomRightRadius:12,
                        backgroundColor:
                            (shadow_style===style_default.shadow&&Platform.OS==='android')?"#0003":"transparent"
                    }}>
                        <View style={{flexDirection:"row",}}>
                            <Text 
                                numberOfLines={1} 
                                style={[{
                                        marginLeft:avator_radius/2+9,
                                        marginRight:5,
                                        fontSize: 12,
                                        lineHeight: 17,
                                        color: "#535353"
                                    },
                                    text_shadow_style,
                                    username_style,
                                ]}
                            >{user.username}</Text>
                            {signature?<Text numberOfLines={1}
                                style={[{
                                    marginLeft:5,
                                    marginRight:5,
                                    fontSize: 12,
                                    lineHeight: 17,
                                    color: "#707070"
                                },
                                shadow_style,
                            ]}>{user.signature}</Text>:null}
                        </View>
                        {additional_text?<Text style={[{
                            marginLeft:avator_radius/2+9,
                            fontSize: 12,
                            lineHeight: 17,
                            color: "#707070"
                        },
                        shadow_style,
                        additional_text_style,
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
                        onPress={onFollow}
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