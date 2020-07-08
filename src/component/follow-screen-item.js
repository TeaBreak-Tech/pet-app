/* 关注页的单条动态 */

/*
    item:一个item对象需包含如下属性
        item.author:
            一个user对象, 包含 { profile_picture_address, username, signature }
        item.images:
            一个数列, 每个元素为一个图片，包含如下属性:
                uri: 图片的网络地址
        item.interactions:
            item.interactions.comment:
                一个数列, 每个元素为一条评论
            item.interactions.view:
                一个整数或字符串，如'1.3k'
        item.text:
            正文内容，字符串
        item.tags:
            一个数列, 每个元素为一个标签对象, 包含 { title }
*/

// Import
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import ProfileLine from './profile-line'
import { ShareOutlined, ViewFill } from './icon'
import InteractionBar from './intercation-bar'

// Style
import style from '../appearance/styles/style-follow-screen'

// 社区和寻找公用的搜索引擎页
function FollowScreenItem({item}) {
    return (
        <ThemeContext.Consumer>
            {theme=>
                <View style={{ backgroundColor:theme.background }}>
                    <ImageBackground source={{ uri: item.images[0].uri }} style={{ ...style.image, backgroundColor:theme.background_emphasis }}>
                        <ProfileLine
                            user={item.author}
                            signature={false}
                            style={style.profileline_container}
                            avator_radius={30}
                            username_style={style.username_text}
                            profile_picture_style={style.profile_picture_wrapper}
                            shadow="default"
                        />
                        <TouchableOpacity style={style.share_button_container}>
                            <ShareOutlined radius={22}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.show_comment_indicator}>
                            <Text style={style.show_comment_indicator_text}>{item.interactions.comment.length}</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                    <View style={{height:80}}>
                        <View style={style.content_container}>
                            <Text numberOfLines={1} style={[ style.text, { color:theme.text_emphasis } ]}>
                                {item.text}
                            </Text>
                            <View style={style.labels_container}>
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
                        </View>
                        <View style={style.bottom_container}>
                            <View style={style.view_count_container}>
                                <ViewFill radius={14}/>
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