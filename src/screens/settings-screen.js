// Imports
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

// Context
import { connect } from 'react-redux'

// 从 Redux 获取 state 的方法 （用于获取登陆状态以决定是否添加登出键）
const mapStateToProps = (state) => {
    return {
        text: state.text.text,
        isLogin: state.login.isLogin,
        path: state.nav.path,
    }
}

// 输出主页面
// 将获取state的方法和dispatch的方法与输出类关联
class SettingScreen extends Component {

    render() {
        
        const { text,isLogin,path } = this.props;

        return (
        <View style={StyleSheet.container}>
            <Text>
                Hello ! This is Pedia ! Welcom: {text ||'no text'}
            </Text>
            <Text>
                You are in navigation: {path ||'no path'}
            </Text>
            <Text>
                Login Status: {isLogin?"Yes":"Not Log In"}
            </Text>
        </View>
    );}
}

export default connect (mapStateToProps)(SettingScreen)



