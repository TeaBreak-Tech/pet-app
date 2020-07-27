/* 顶栏右侧图标 */

// Imports
import React from 'react';
import { TouchableOpacity, View } from "react-native";

// Context
import { connect } from 'react-redux'

// Children
import { NearbyOutlined, VPOutlined } from '../component/icon'

// Tools
import { haveHeader, isSearching } from '../tools/path_judger'

// Styles
import style from '../appearance/styles/style-header'


const HeaderRight = ({ path, shown, onPress }) => {

    shown = shown?true:(haveHeader(path)&&(!isSearching(path)))
    Icon = (path==='Feed'||path==='Nearby')?NearbyOutlined:VPOutlined
            
    return shown?(
        <TouchableOpacity style={style.header_right_container} onPress={onPress}>
            <View style={style.header_left_right_icon}>
                <Icon/>
            </View>
        </TouchableOpacity>
    ):null
}

export default connect (state=>({path: state.nav.path}))(HeaderRight)