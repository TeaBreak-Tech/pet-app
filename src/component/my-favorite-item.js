// Import
import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Share } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import Icon from '../component/icon';

// Tools
import { screenWidth } from '../tools/scale'

// Style
import style from '../appearance/styles/style-my-favorite-item'
import { ReactReduxContext } from 'react-redux';
import { set } from 'react-native-reanimated';

// 社区和寻找公用的搜索引擎页
function MyFavoriteItem(props) {
    const [ modalVisible, setModalVisible ] = React.useState(false)
    const onShare = async () => {
        try {
            const result = await Share.share({
            message:
                'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    item = props.item
    return (
        <ThemeContext.Consumer>
            {theme=>
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
                    <View style={{
                        backgroundColor:"white",
                        width:screenWidth(),
                        borderTopLeftRadius:30,
                        borderTopRightRadius:30,
                        justifyContent:"space-between"
                    }}>
                        <View 
                            style={{
                                marginTop:30,
                                marginBottom:30,
                        }}>
                            <View style={{
                                flexDirection:"row",
                                justifyContent:"space-evenly",
                            }}>
                                <TouchableOpacity
                                    onPress={onShare}
                                    style={{
                                        alignItems:"center"
                                }}>
                                    <Icon radius={35}></Icon>
                                        <Text style={{
                                            marginTop:10,
                                            fontSize:14,
                                            color:theme.text,
                                        }}>其他</Text>
                                </TouchableOpacity>
                                
                            </View>
                            
                        </View>
                        <View style={{
                            marginBottom:40,
                            alignItems:"center"
                        }}>
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
                            }}>
                                <Text style={{
                                    fontSize:16,
                                    color:theme.text,
                                }}>
                                    取消
                                </Text>
                            </TouchableOpacity>
                        </View>

                        
                    </View>
                    </TouchableOpacity>
                </Modal>
                <TouchableOpacity style={[style.container,{backgroundColor:theme.background}]}>
                    <View style={style.separator_container}>
                    <View style={style.main_container}>
                    <View style={style.left_container}>
                    <Image source={{ uri: item.images[0].uri }?{ uri: item.images[0].uri }:require('./loading.jpg')} style={style.image}/>
                        <View style={style.content_container}>
                            <Text style={[style.sytle_text,{color:theme.text_emphasis}]}>title:{item.title}</Text>
                            <Text style={[style.sytle_text,{color:theme.text}]}>content:{item.detail}</Text>
                            <View style={style.popularity_container}>
                                <Icon radius={13}></Icon>
                                <Text style={[style.popularity_text,{color:theme.text}]}>浏览量 1.2K</Text>
                            </View>
                            
                        </View>
                    </View>
                    <TouchableOpacity style={style.share_button_container} onPress={()=>{setModalVisible(true)}}>
                        <Text style={[style.share_button_text,{color:theme.text}]}>分享</Text>
                        <Icon></Icon>
                    </TouchableOpacity>
                    </View>
                    </View>
                </TouchableOpacity>
            </View>
            }
        </ThemeContext.Consumer>
    );
}

export default MyFavoriteItem