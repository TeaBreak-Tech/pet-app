// Import
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import ProfileLine from './profile-line'
import Icon from './icon'
import InteractionBar from './intercation-bar'
// Style
import style from '../appearance/styles/style-follow-screen'

// 社区和寻找公用的搜索引擎页
function FollowScreenItem(props) {
    item = props.item
    return (
        <ThemeContext.Consumer>
            {theme=>
                <View style={{ backgroundColor:theme.background }}>
                    <ImageBackground source={{ uri: item.images[0].uri }} style={style.image}>
                        <View style={style.header_container}>
                            <ProfileLine
                                signature={false}
                                radius={30}
                                username_style={style.username_text}
                                marginLeft={22}
                                profile_picture_style={style.profile_picture_shadow}
                                user={item.author}
                            />
                            <TouchableOpacity style={style.share_button_container}>
                                <Icon radius={22}/>
                            </TouchableOpacity>
                        </View >
                        <View style={style.image_footer_container}>
                            <TouchableOpacity style={style.show_comment_indicator}>
                                <Text style={style.show_comment_indicator_text}>{item.interactions.comment.length}</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <View style={{height:80}}>
                        <View style={style.first_line_container}>
                            <Text numberOfLines={1} style={[ style.text, { color:theme.text_emphasis } ]}>
                                {item.text}
                            </Text>
                            <View style={style.interaction_bar_container}>
                                <Icon radius={22}/>
                                <Icon radius={22}/>
                                <Icon radius={22}/>
                            </View>
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
                        <View style={style.third_line_container}>
                            <View style={style.view_count_container}>
                                <Icon radius={16}/>
                                <Text style={[ style.view_count_text, { color:theme.text }]}>
                                    浏览量 {item.interactions.view}
                                </Text>
                            </View>
                            <InteractionBar/>
                        </View>
                    </View>
                </View>
            }
        </ThemeContext.Consumer>
    );
}

export default FollowScreenItem