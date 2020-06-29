/* AppImage 图片封装组件 */

// Import
import React from 'react'
import { View, Image } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'


const AppImage = ({ uri, style }) => {
    return(
        <ThemeContext.Consumer>{theme=>
            <View style={{...style,backgroundColor:theme.background_emphasis}}>
                <Image source={{ uri }} style={style} />
            </View>
        }</ThemeContext.Consumer>
    )
}

export default AppImage