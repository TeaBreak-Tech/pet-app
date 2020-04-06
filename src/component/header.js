import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeText } from '../redux/action/action'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
} from "react-native";
import style_header from '../appearance/styles/style-header'

// 左上角消息提示
class NoticeIcon extends Component{
    render(){
        return(
            <View style={[
                // 搜索框的静态样式
                style_header.searcing_bar,
                // 搜索框颜色跟随主题
                {backgroundColor:"white"}
            ]}>
                <Text>Search</Text>
            </View>
        )
    }
}

// 搜索框
class SearchingBar extends Component{
    width = Dimensions.get('window').width
    render(){
        return(
            <View style={{width:width,alignItems: 'center'}}>
            <View style={[
                // 搜索框的静态样式
                style_header.searcing_bar,
                // 搜索框颜色跟随主题
                {backgroundColor:"white"}
            ]}>
                <Text>Search</Text>
            </View>
            </View>
        )
    }
}

// 虚拟宠物入口按钮
class PetIcon extends Component{
    render(){
        return(
            <View style={[
                // 搜索框的静态样式
                style_header.searcing_bar,
                // 搜索框颜色跟随主题
                {backgroundColor:"white"}
            ]}>
                <Text>Search</Text>
            </View>
        )
    }
}

class SearchingList extends Component{
    render(){
        width = Dimensions.get('window').width
        return(
            <View style={{height:0,width:width}}>
                <View style={[
                    // 搜索列表的静态样式
                    {height:Dimensions.get('window').height,
                    width:Dimensions.get('window').width},
                    // 搜索列表颜色跟随主题
                    {backgroundColor:"white"}
                ]}>
                    <Text>Searchee</Text>
                </View>
            </View>
        )
    }
}


export {NoticeIcon, SearchingBar, PetIcon, SearchingList}