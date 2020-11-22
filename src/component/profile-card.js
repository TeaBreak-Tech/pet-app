// Imports
import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";

// Context
import { connect } from 'react-redux'
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import Icon from './icon'
import Avator from './avator'

// Style
import style from '../appearance/styles/style-profile-card'

const ProfileCard = ({height, onEdit, onLogin, askLogin, user, isLogin}) => {

    showLogin = askLogin?isLogin:false

    return (
        <View style={[style.root_container,{height:height}]}>
            <View style={style.profile_container}>
                <View style={style.left}>
                    <View>
                        <Avator radius={35} user={user}/>
                    </View>
                    <View style={{width:15}}/>
                    {showLogin?(
                        <TouchableOpacity onPress={onLogin}>
                            <Text style={style.username_text}>登录/注册 》</Text>
                        </TouchableOpacity>
                    ):(
                        <View style={style.text_container}>
                            <Text style={style.username_text}> {user?user.user_name:"无用户名"} </Text>
                            <Text style={style.user_id_text}> ID: {user?user.user_id:"无用户ID"} | {user?user.user_type:"未知用户类型"} </Text>
                            <Text style={style.user_signature_text}> {user?user.user_signature:"无个性签名"} </Text>
                        </View>
                    )}
                </View>
                <View style={style.right_container}>
                    <TouchableOpacity onPress={onEdit}>
                        <View style={style.edit_button}>
                            <Text style={style.edit_button_text}> 编辑 </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.bottom_contianer}>
                <View>
                    <TouchableOpacity>
                        <View style={style.bottom_item_container}>
                            <Text style={style.bottom_item_digit}>20</Text>
                            <Text style={style.bottom_item_text}>关注</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={style.bottom_separator}/>
                <View>
                    <TouchableOpacity>
                        <View style={style.bottom_item_container}>
                            <Text style={style.bottom_item_digit}>20</Text>
                            <Text style={style.bottom_item_text}>粉丝</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={style.bottom_separator}/>
                <View>
                    <TouchableOpacity>
                        <View style={style.bottom_item_container}>
                            <Text style={style.bottom_item_digit}>20</Text>
                            <Text style={style.bottom_item_text}>好友</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
    
}

export default ProfileCard