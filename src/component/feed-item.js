/* 资讯页单项 */

// Import
import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import InteractionBar from './intercation-bar'
import ProfileLine from './profile-line'
import AppImage from './app-image'

// Style
import style from '../appearance/styles/style-feed-screen'

// 社区和寻找公用的搜索引擎页
function FeedItem(props) {

    item = props.item
    let have_image = item.images[0]?true:false
    
    return (
        <ThemeContext.Consumer>{theme=>
            <View style={{ ...style.item_container, borderBottomColor:theme.separator, backgroundColor:theme.background }}>
                <TouchableOpacity style={style.content_container}>
                    <View style={style.left_container}>
                        <Text style={{ ...style.title, color: theme.text_emphasis }}>{item.title}</Text>
                        <ProfileLine avator_radius={14} signature={true}/>
                        <Text
                            numberOfLines={2}
                            style={[
                                have_image?style.detail_text:style.detail_text_whole_line, 
                                { color:theme.text }
                            ]}
                        >
                            {item.discription}
                        </Text>
                    </View>
                    <AppImage uri={item.images[0].uri} style={style.image}/>
                </TouchableOpacity>
                <InteractionBar style={style.interaction_bar}/>
            </View>
        }</ThemeContext.Consumer>
    );
}

export default FeedItem