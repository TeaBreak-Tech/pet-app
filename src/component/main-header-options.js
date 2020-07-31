// Imports
import React from 'react';

// Children
import HeaderCenter from './header-center'
import HeaderLeft from '../component/header-left'
import HeaderRight from '../component/header-right'

// Tools
import {safeAreaFromTop} from '../tools/scale'
import judgePath from '../tools/path_judger'

function MainHeaderOptions (navigation,theme,settings,route){
    //console.log("Header Options's Navigation Prop:\n",navigation)
    
    let path = "Discover"
    let main_path = "Community"
    // main_path 代表当前处于"社区","寻找"还是"我的"
    if(route.state){ main_path = route.state.routeNames[route.state.index] }
    // path 代表最末端的路由名称
    while(route.state){
        path = route.state.routeNames[route.state.index]
        route = route.state.routes[route.state.index]
    }
    // 在此处加上状态栏高度（只需加这一次）
    settings = judgePath(path)
    height = settings.header_height+safeAreaFromTop()

    return({
        headerTransparent: path==="Mine"? true:false,
        headerTitle: () => (<HeaderCenter path={path} main_path={main_path} navigation={navigation}/>),
        headerLeft: () => (<HeaderLeft path={path} onPress={()=>navigation.openDrawer()}/>),
        headerRight: () => (<HeaderRight path={path} onPress={()=>navigation.navigate('Virtual-Pet')}/>),
        headerTitleAlign:"center",

        headerStyle: {
            backgroundColor: theme.background,
            height:height
        },
    
    }
)}

export default MainHeaderOptions