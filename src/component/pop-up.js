// Imports
import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    Modal,
    TouchableOpacity,
} from "react-native";

// Context
import { connect } from 'react-redux'
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Tools
import { screenWidth } from '../tools/scale'

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

        modalVisible = this.props.modalVisible;
        setModalVisible = this.props.setModalVisible;

        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}
                >
                    <TouchableOpacity
                        onPress={()=>{
                            setModalVisible(false)
                        }}
                        style={{
                            flex:1,
                            alignItems:"center",
                            justifyContent:"flex-end",
                            backgroundColor:"#0008",
                    }}>
                        <View
                            style={{
                                backgroundColor:"white",
                                width:screenWidth(),
                                borderTopLeftRadius:30,
                                borderTopRightRadius:30,
                                justifyContent:"space-between"
                            }}
                        >
                            <View 
                                style={{
                                    marginTop:30,
                                    marginBottom:30,
                                }}
                            >

                                {this.props.children}

                            </View>
                            <View
                                style={{
                                    marginBottom:40,
                                    alignItems:"center"
                                }}
                            >
                                <TouchableOpacity
                                    onPress={()=>{
                                        setModalVisible(false)
                                    }}
                                    style={{
                                        height:40,
                                        borderTopWidth:2,
                                        borderTopColor:theme.text,
                                        width:screenWidth()-44,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize:16,
                                            color:theme.text,
                                        }}
                                    >
                                        取消
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
})