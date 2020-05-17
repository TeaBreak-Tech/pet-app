import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import {ThemeContext} from '../appearance/theme/theme-context-provider'

import Icon from './icon'

// class: ProfileCard

export default connect (
    (state) => {return{path: state.nav.path}}
)(class ProfileCard extends Component{
    static contextType = ThemeContext;

    render(){

        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        let path = this.props.path  // 获取当前导航状态
        let name = this.props.name

        return (
            <View style={
                // 总容器
                {height: 400,
                backgroundColor:"transparent",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column"
            }}>
                <View style={{
                    // 第一行头像行
                    height:80,
                    alignItems:"center",
                    justifyContent:"flex-start",
                    flexDirection:"row",
                }}>
                    <View>
                        <Icon radius={80}/>
                    </View>
                    <View style={{width:15}}/>
                    <View style={{
                        height:60,
                        width:215,
                        alignItems:"flex-start",
                        justifyContent:"space-around",
                    }}>
                        <Text> 用户昵称 </Text>
                        <Text> ID: 1234542313 | 用户类型 </Text>
                        <Text> 个性签名 </Text>
                    </View>
                    <View style={{
                        height:60,
                        justifyContent:"flex-end"
                    }}>
                        <TouchableOpacity onPress={this.props.onEdit}>
                            <View style={{
                                width:50,
                                height:20,
                                backgroundColor:"white",
                                borderRadius:3,
                                alignItems:"center",
                                justifyContent:"center",
                            }}>
                                <Text> 编辑 </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    alignItems:"center",
                    justifyContent:"space-between",
                    flexDirection:"row",
                    width:300,
                    height:80,
                }}>
                    <View>
                        <TouchableOpacity>
                            <View style={{
                                width:50,
                                hright:80,
                                flexDirection:"column",
                                alignItems:"center",
                                justifyContent:"center",
                            }}>
                                <Text style={{
                                    fontSize:20
                                }}>20</Text>
                                <Text style={{

                                }}>关注</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>|</Text>
                    </View>
                    <TouchableOpacity>
                            <View style={{
                                width:50,
                                hright:80,
                                flexDirection:"column",
                                alignItems:"center",
                                justifyContent:"center",
                            }}>
                                <Text style={{
                                    fontSize:20
                                }}>20</Text>
                                <Text style={{

                                }}>粉丝</Text>
                            </View>
                        </TouchableOpacity>
                    <View>
                        <Text>|</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={{
                                width:50,
                                hright:80,
                                flexDirection:"column",
                                alignItems:"center",
                                justifyContent:"center",
                            }}>
                                <Text style={{
                                    fontSize:20
                                }}>20</Text>
                                <Text style={{

                                }}>好友</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
})