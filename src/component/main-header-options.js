// Imports
import React from 'react';

// Children
import HeaderCenter from './header-center'
import HeaderLeft from '../component/header-left'
import HeaderRight from '../component/header-right'

// Tools
import {safeAreaFromTop} from '../tools/scale'

function MainHeaderOptions (test,navigation,theme,settings){
    // 在此处加上状态栏高度（只需加这一次）
    height = settings.header_height+safeAreaFromTop()
    return({
    headerTitle: () => (<HeaderCenter navigation={navigation}/>),
    headerLeft: () => (<HeaderLeft onPress={()=>navigation.openDrawer()}/>),
    headerRight: () => (<HeaderRight onPress={()=>navigation.navigate('Checkin')}/>),
    headerTitleAlign:"center",

    headerStyle: {
        backgroundColor: theme.background,
        height:height
    },
    headerTransparent: settings.header_transparent? true:false,
})}

export default MainHeaderOptions