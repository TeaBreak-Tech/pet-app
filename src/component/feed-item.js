// Import
import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import Icon from './icon';
import InteractionBar from './intercation-bar'
import ProfileLine from './profile-line'

// Style
import style from '../appearance/styles/style-nearby-item'

// 社区和寻找公用的搜索引擎页
function NearbyItem(props) {

    const moreAnim = useRef(new Animated.Value(260)).current;
    item = props.item
    
    return (
        <ThemeContext.Consumer>
            {theme=>
            <View style={{backgroundColor:theme.background}}>
                <View style={{flex:1,height:110,marginHorizontal:18,borderBottomWidth:1,borderBottomColor:"#c4c4c4",justifyContent:"space-between"}}>
                    <TouchableOpacity style={{}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{marginLeft:5}}>
                                <Text style={{
                                    fontSize: 14,
                                    color: theme.text_emphasis,
                                }}>{item.title}</Text>
                                <ProfileLine avator_radius={18} signature={true}/>
                                <Text numberOfLines={2} style={{fontSize: 12,lineHeight: 14, color:theme.text, maxWidth:200}}>{item.discription}</Text>
                            </View>
                            <View>
                                <Image source={{ uri: item.images[0].uri }} style={{height:70,width:110}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <InteractionBar></InteractionBar>
                </View>
                <View style={{height:7,backgroundColor:theme.background}}></View>
            </View>
            }
        </ThemeContext.Consumer>
    );
}

export default NearbyItem