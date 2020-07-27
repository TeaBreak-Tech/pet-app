// Imports
import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Switch,
} from "react-native";

// Context
import { connect } from 'react-redux'
import { saveLogoutState } from  '../redux/action/login_actions'
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Style
import style from '../appearance/styles/style-settings'

// 从 Redux 获取 state 的方法 （用于获取登陆状态以决定是否添加登出键）
const mapStateToProps = (state) => {
    return {
        text: state.text.text,
        isLogin: state.login.isLogin,
        path: state.nav.path,
        user:state.login.user
    }
}

// 输出主页面
// 将获取state的方法和dispatch的方法与输出类关联
function SettingsScreen({navigation, saveLogoutState}){
    const [alarm, setAlarm] = React.useState(false);
    const [theme_name, setThemeName] = React.useState(true);

    const onLogoutPressed = () => {
        saveLogoutState()
        navigation.navigate("Mine")
    }

    const onSwitchAccountPressed = () => {
        alert("Switch Account")
    }

    return (
        <ThemeContext.Consumer>
            {theme=>
            <ScrollView>
                <View style={[style.item_height_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <View style={style.item_width_container}>
                        <Text style={style.title_text}>
                            账号信息
                        </Text>
                        <TouchableOpacity style={style.edit_indicator} onPress={()=>{navigation.navigate("Edit-Profile")}}>
                            <Text style={style.edit_indicator_icon}>...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.space}></View>
                
                <View style={[style.item_height_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <View style={style.item_width_container}>
                        <Text style={style.title_text}>
                            隐私设置
                        </Text>
                        <TouchableOpacity style={style.edit_indicator}>
                            <Text style={style.edit_indicator_icon}>...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[style.item_height_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <View style={style.item_width_container}>
                        <Text style={style.title_text}>
                            消息提醒
                        </Text>
                        <Switch
                            value={alarm}
                            trackColor={{true:theme.basic}}
                            onValueChange={()=>{setAlarm(!alarm)}}
                        ></Switch>
                    </View>
                </View>
                <View style={[style.item_height_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <View style={style.item_width_container}>
                        <Text style={style.title_text}>
                            显示模式
                        </Text>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <Text style={[style.title_text,{marginRight:10}]}>{theme_name?"白天":"黑夜"}</Text>
                            <Switch
                                value={theme_name}
                                trackColor={{true:theme.background_emphasis}}
                                onValueChange={()=>{setThemeName(!theme_name)}}
                            ></Switch>
                        </View>
                    </View>
                </View>
                <View style={[style.item_height_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <View style={style.item_width_container}>
                        <Text style={style.title_text}>
                            缓存管理
                        </Text>
                        <TouchableOpacity style={style.edit_indicator}>
                            <Text style={style.edit_indicator_icon}>...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.space}></View>
                <View style={[style.item_height_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <View style={style.item_width_container}>
                        <Text style={style.title_text}>
                            联系客服
                        </Text>
                        <TouchableOpacity style={style.edit_indicator}>
                            <Text style={style.edit_indicator_icon}>...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[style.item_height_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <View style={style.item_width_container}>
                        <Text style={style.title_text}>
                            版本信息
                        </Text>
                        <TouchableOpacity style={style.edit_indicator}>
                            <Text style={style.edit_indicator_icon}>...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.space}></View>
                <TouchableOpacity onPress={onSwitchAccountPressed} style={[style.item_center,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <Text style={style.title_text}>
                        切换账号
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onLogoutPressed} style={[style.item_center,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <Text style={style.title_text}>
                        登出
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            }
        </ThemeContext.Consumer>
        
    );
}

export default connect (mapStateToProps,{saveLogoutState})(SettingsScreen)



