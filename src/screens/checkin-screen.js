// 设置页首页

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

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
export default connect (
    mapStateToProps
)(class CheckinScreen extends Component {

    render() {
        
        const { text,isLogin,path } = this.props;

        return (
        <View style={StyleSheet.container}>
            <Text>
                Hello ! This is Checkin Screen !
            </Text>
        </View>
    );}
})




