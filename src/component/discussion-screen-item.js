/* 论坛页单个话题 */

// Import
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Style
import style from '../appearance/styles/style-discussion-screen'

// Components
import AppImage from './app-image'


function DiscussionScreenItem({ item }) {
    
    return (
        <ThemeContext.Consumer>{theme=>

            <View style={{ backgroundColor:theme.background }}>
                <TouchableOpacity style={style.center_content_container}>
                    <View style={style.content_left_container}>
                        <Text style={style.index_indicator_text}>{item.id}</Text>
                        <View style={style.main_text_container}>
                            <Text style={{ ...style.title_text, color:theme.text_emphasis }}>
                                {item.title}
                            </Text>
                            <Text style={{ ...style.content_text, color:theme.text }}>
                                话题关注人数：{item.follower}
                            </Text>
                        </View>
                    </View>
                    <AppImage uri={item.images[0].uri} style={style.image}/>
                </TouchableOpacity>

                <View style={{ ...style.separator, backgroundColor:theme.background_emphasis }} />

            </View>
        }</ThemeContext.Consumer>
    );
}

export default DiscussionScreenItem