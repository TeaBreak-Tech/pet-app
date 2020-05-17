// 百科页

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeText } from '../redux/action/action'
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

// 从 Redux 获取 state 的方法
const mapStateToProps = (state) => {
    return {
        text: state.text.text,
        isLogin: state.login.isLogin,
        path: state.nav.path,
    }
}

// Dispatch 的实现方法
const mapDispatchToProps = { changeText }


// 输出主页面
// 将获取state的方法和dispatch的方法与输出类关联
export default connect (
    mapStateToProps
)(class MineScreen extends Component {

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
})




