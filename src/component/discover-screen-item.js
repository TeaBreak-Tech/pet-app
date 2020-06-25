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

// 社区和寻找公用的搜索引擎页
function DiscoverScreenItem(props) {
    const item = props.item
    const navigation = props.navigation
    return (
        <ThemeContext.Consumer>
            {theme=>
                <TouchableOpacity 
                    style={[ { backgroundColor:theme.background }, style.card_container ]}
                    activeOpacity={0.9}
                    onPress={()=>{
                        navigation.navigate("Moment-Detail",{item:item})
                    }}
                >
                    <Image source={{ uri: item.images[0].uri }} style={ style.image }/>
                    <ProfileLine
                        style={{position:"absolute",top:'5%',left:'5%'}}
                        signature={false}
                        radius={30}
                        username_style={_style.username_text}
                        profile_picture_style={_style.profile_picture_shadow}
                        user={item.author}
                    />

                    <View style={_style.first_line_container}>
                        <Text numberOfLines={2} style={[
                            {
                                fontSize: 14,
                                lineHeight: 14,
                                marginLeft:10,
                                marginRight:10
                            }, {
                                color:theme.text_emphasis 
                            }
                        ]}>
                            {item.text}
                        </Text>
                    </View>

                    <View style={style.second_line_container}>
                        {item.tags.map((item,index)=>(
                        <TouchableOpacity
                            key={index}
                            onPress={()=>{
                                // When a Profile in Follow-List is clicked
                            }}
                        >
                            <Text style={[ style.tag_text, { color:theme.text }]}>
                                #{item.title}
                            </Text>
                        </TouchableOpacity>
                        ))}
                    </View>

                        <View style={ style.third_line_container }>
                            <View style={_style.view_count_container}>
                                <Icon radius={16}/>
                                <Text style={[ _style.view_count_text, { color:theme.text }]}>
                                    浏览量 {item.interactions.view}
                                </Text>
                            </View>
                        </View>
                </TouchableOpacity>
            }
        </ThemeContext.Consumer>
    );
}

export default DiscoverScreenItem