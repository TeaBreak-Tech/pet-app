/* 顶栏右侧图标按钮 */

// Imports
import React from 'react';
import { TouchableOpacity, View } from "react-native";

// Context
import { connect } from 'react-redux'

// Children
import Avator from '../component/avator'

// Tools
import { haveHeader } from '../tools/path_judger'

// Styles
import style from '../appearance/styles/style-header'

const HeaderLeft = ({ path, shown, onPress }) => {

    shown = shown?true:haveHeader(path)

    return shown?(
        <TouchableOpacity style={style.header_left_container} onPress={onPress}>
            <View style={style.header_left_right_icon}>
                <Avator/>
            </View>
        </TouchableOpacity>
    ):null
}

export default connect (state=>({path: state.nav.path}))(HeaderLeft)