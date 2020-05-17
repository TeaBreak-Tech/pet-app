import React, { Component } from 'react';
import { View,Dimensions, Text } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import { connect } from 'react-redux'

import {ThemeContext} from '../appearance/theme/theme-context-provider'

import Icon from '../component/icon'

// class: InfoDrawerContent

export default connect (
    (state) => {return{path: state.nav.path}}
)(class InfoDrawerContent extends Component{
    static contextType = ThemeContext;

    render(){

        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        //let path = this.props.path  // 获取当前导航状态
        let name = this.props.name

        return (
            <View style={{
                height:Dimensions.get('window').height,
                backgroundColor:'white',
                alignContent:'space-between',
            }}>
                <View style={{
                    height:120,
                    backgroundColor:'gray',
                    alignItems:'flex-start',
                    justifyContent:'flex-end',
                    
                }}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'center',
                    }}>
                        <View style={{
                            width:80,
                            height:80,
                            alignItems:"center",
                            justifyContent:'center',
                        }}>
                            <Icon radius={50}/>
                        </View>
                        <View style={{
                            height:80,
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                            <Text>用户名</Text>
                        </View>
                    </View>
                    
                </View>

            </View>
        )
    }
})