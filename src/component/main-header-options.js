// Imports
import React from 'react';

// Children
import HeaderCenter from './header-center'
import HeaderLeft from '../component/header-left'
import HeaderRight from '../component/header-right'

// Tools
import {safeAreaFromTop} from '../tools/scale'

function MainHeaderOptions (navigation,theme,settings){
    //console.log("Header Options's Navigation Prop:\n",navigation)
    // 在此处加上状态栏高度（只需加这一次）
    height = settings.header_height+safeAreaFromTop()
    return({
        headerTransparent: settings.header_transparent? true:false,
        headerTitle: () => (<HeaderCenter navigation={navigation}/>),
        headerLeft: () => (<HeaderLeft onPress={()=>navigation.openDrawer()}/>),
        headerRight: () => (<HeaderRight onPress={()=>navigation.navigate('Virtual-Pet')}/>),
        headerTitleAlign:"center",

        headerStyle: {
            backgroundColor: theme.background,
            height:height
        },
    
    }
)}

export default MainHeaderOptions