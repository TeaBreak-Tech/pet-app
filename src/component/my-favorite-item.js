// Import
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Style
import style from '../appearance/styles/style-my-favorite-item'

// 社区和寻找公用的搜索引擎页
function MyFavoriteItem(props) {
    item = props.item
    return (
        <ThemeContext.Consumer>
            {theme=>
                <View style={[style.container,{backgroundColor:theme.background}]}>
                    <View style={style.header_container}>
                        <Text style={[style.time_text,{color:theme.text}]}>2020-04-25 18:30</Text>
                        <TouchableOpacity style={style.edit_button}>
                            <Text style={[style.edit_icon_temp,{color:theme.text_emphasis}]}>...</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.center_container}>
                        <Image source={{ uri: item.images[0].uri }} style={style.image}/>
                    </View>
                    <View style={style.bottom_container}>
                        <View style={style.detail_text_container}>
                            <Text style={[style.detail_text,{color:theme.text_emphasis}]}>All Search Rersult, title:{item.title}daqd{item.detail}</Text>
                        </View>
                    </View>
                </View>
            }
        </ThemeContext.Consumer>
    );
}

export default MyPublishItem