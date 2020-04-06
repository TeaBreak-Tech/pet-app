// 用户页

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
        text: state.text
    }
}

// Dispatch 的实现方法
const mapDispatchToProps = { changeText }


// 输出主页面
// 将获取state的方法和dispatch的方法与输出类关联
export default connect (
    mapStateToProps
)(class MineScreen extends Component {

    componentDidMount() {
        // 每次导航到此页，更改顶部 header 的样式
        const navigation = this.props.navigation
        this._unsubscribe = navigation.addListener('focus', () => {
            alert("I'm focused")
        });
    }

    render() {
        
        const { text } = this.props;

        return (
        <View style={StyleSheet.container}>
            <Text>
                Hello ! This is mine Screen ! {text ||'no text'}
            </Text>
        </View>
    );}
})




