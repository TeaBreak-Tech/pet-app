import React from 'react';
import { View, Text } from 'react-native';

import HeaderCenter from './header-center'
import HeaderLeft from '../component/header-left'
import HeaderRight from '../component/header-right'

function MainHeaderOptions (test,navigation,theme,settings){
    height = settings.header_height
    return({
    headerTitle: () => (<HeaderCenter navigation={navigation}/>),
    headerLeft: () => (<HeaderLeft
        onPress={()=>path=='Mine'?
        navigation.navigate('Checkin'):  // 签到按钮
        navigation.navigate('Checkin')   // 宠物按钮
    }/>),
    headerRight: () => (<HeaderRight 
        onPress={()=>path=='Mine'?
        navigation.navigate('Checkin'):  // 签到按钮
        navigation.navigate('Checkin')   // 宠物按钮
    }/>),
    headerTitleAlign:"center",

    headerStyle: {
        backgroundColor: theme.background,
        height:height
    },
    headerTransparent: settings.header_transparent? true:false,
})}

export default MainHeaderOptions