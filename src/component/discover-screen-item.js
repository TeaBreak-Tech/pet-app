/* 社区-发现页单条动态卡片 */

// Import
import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Components
import ProfileLine from './profile-line'
import Icon from './icon'
import AppImage from './app-image'
import { ViewFill } from '../component/icon'

// Style
import _style from '../appearance/styles/style-follow-screen'
import style from '../appearance/styles/style-discover-screen'


function DiscoverScreenItem({ item, navigation }) {
    
    return (
        <ThemeContext.Consumer>{theme=>
            <TouchableOpacity 
                style={[ style.card_container, { backgroundColor:theme.background } ]}
                activeOpacity={0.9}
                onPress={()=>{
                    navigation.navigate("Moment-Detail",{item:item})
                }}
            >
                <AppImage uri={item.images[0].uri} style={style.image}/>
                <ProfileLine
                    user={item.author}
                    signature={false}
                    style={style.profileline_in_imgbg}
                    shadow='default'
                    avator_radius={30}
                    profile_picture_style={style.profileline_avator_wrapper}
                    username_style={style.prifileline_username_text}
                />
                <Text numberOfLines={2} style={[ style.item_text, { color:theme.text_emphasis } ]}>
                    {item.text}
                </Text>

                <View style={style.second_line_container}>
                    {item.tags.map((item,index)=>(
                        <TouchableOpacity
                            key={index}
                            onPress={()=>{
                                // When a Tag is clicked
                            }}
                        >
                            <Text style={[ style.tag_text, { color:theme.text } ]}>
                                #{item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={style.view_count_container}>
                    <ViewFill radius={16} />
                    <Text style={[ style.view_count_text, { color:theme.text } ]}>
                        浏览量 {item.interactions.view}
                    </Text>
                </View>
            </TouchableOpacity>
        }</ThemeContext.Consumer>
    );
}

export default DiscoverScreenItem