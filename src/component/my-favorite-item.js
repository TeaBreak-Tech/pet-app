// Import
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import Icon from '../component/icon';

// Style
import style from '../appearance/styles/style-my-favorite-item'

// 社区和寻找公用的搜索引擎页
function MyFavoriteItem(props) {
    item = props.item
    return (
        <ThemeContext.Consumer>
            {theme=>
                <TouchableOpacity style={[style.container,{backgroundColor:theme.background}]}>
                    <View style={style.separator_container}>
                    <View style={style.main_container}>
                    <View style={style.left_container}>
                    <Image source={{ uri: item.images[0].uri }} style={style.image}/>
                        <View style={style.content_container}>
                            <Text style={[style.sytle_text,{color:theme.text_emphasis}]}>title:{item.title}</Text>
                            <Text style={[style.sytle_text,{color:theme.text}]}>content:{item.detail}</Text>
                            <View style={style.popularity_container}>
                                <Icon radius={13}></Icon>
                                <Text style={[style.popularity_text,{color:theme.text}]}>浏览量 1.2K</Text>
                            </View>
                            
                        </View>
                    </View>
                    <TouchableOpacity style={style.share_button_container}>
                        <Text style={[style.share_button_text,{color:theme.text}]}>分享</Text>
                        <Icon></Icon>
                    </TouchableOpacity>
                    </View>
                    </View>
                </TouchableOpacity>
            }
        </ThemeContext.Consumer>
    );
}

export default MyFavoriteItem