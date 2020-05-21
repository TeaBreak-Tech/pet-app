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

// Style
import style from '../appearance/styles/style-profile-card'

export default connect (
    (state) => {return{path: state.nav.path}}
)(class ProfileCard extends Component{
    static contextType = ThemeContext;

    render(){

        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        let path = this.props.path  // 获取当前导航状态
        let name = this.props.name

        return (
            <View style={[style.root_container,{height:this.props.height}]}>
                <View style={style.profile_container}>
                    <View>
                        <Icon radius={70}/>
                    </View>
                    <View style={{width:15}}/>
                    <View style={style.text_container}>
                        <Text style={style.username_text}> 用户昵称 </Text>
                        <Text style={style.user_id_text}> ID: 1234542313 | 用户类型 </Text>
                        <Text style={style.user_signature_text}> 个性签名 </Text>
                    </View>
                    <View style={style.right_container}>
                        <TouchableOpacity onPress={this.props.onEdit}>
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
})