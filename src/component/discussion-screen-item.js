// Import
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import ProfileLine from './profile-line'
import Icon from './icon'
import InteractionBar from './intercation-bar'
// Style
import _style from '../appearance/styles/style-follow-screen'
import style from '../appearance/styles/style-discover-screen'
// Tools
import {screenWidth} from '../tools/scale'

function DiscussionScreenItem(props) {
    item = props.item
    
    return (
        <ThemeContext.Consumer>{theme=>
            <View style={{backgroundColor:theme.background}}>
                <View style={{flex:1,marginHorizontal:18,justifyContent:"space-between"}}>
                    <TouchableOpacity style={{}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{marginLeft:5, flexDirection:'row', marginTop:10}}>
                                <Text style={{
                                    fontSize: 16,
                                    lineHeight: 27,
                                    color: "#707070"
                                }}>{item.id}</Text>
                                <View style={{marginLeft:10}}>
                                <Text style={{
                                    fontSize: 16,
                                    lineHeight: 27,
                                    color: "#707070"
                                }}>{item.title}</Text>
                                <Text style={{
                                    fontSize: 10,
                                    lineHeight: 17,
                                    color: "#707070"
                                }}>话题关注人数：{item.follower}</Text>
                                </View>
                            </View>
                            <View>
                                <Image source={{ uri: item.images[0].uri }} style={{height:70,width:110}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{height:7,backgroundColor:theme.background_emphasis}}></View>
            </View>
        }</ThemeContext.Consumer>
    );
}

export default DiscussionScreenItem