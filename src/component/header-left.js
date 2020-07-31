/* 顶栏右侧图标按钮 */

// Imports
import React from 'react';
import { TouchableOpacity, View } from "react-native";

// Children
import Avator from '../component/avator'

// Tools
import { haveHeader, isSearching } from '../tools/path_judger'

// Styles
import style from '../appearance/styles/style-header'

const HeaderLeft = ({ path, shown, onPress, user }) => {

    shown = shown?true:(haveHeader(path)&&(!isSearching(path)))


    return shown?(
        <TouchableOpacity style={style.header_left_container} onPress={onPress}>
            <View style={style.header_left_right_icon}>
                <Avator user={user}/>
            </View>
        </TouchableOpacity>
    ):null
}

export default HeaderLeft