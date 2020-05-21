// Inmport
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SectionList,
    ScrollView,
    Dimensions,
    PanResponder,
    Animated,
    TouchableOpacity,
} from "react-native";

// Context
import { connect } from 'react-redux'
import { changeText } from '../redux/action/action'
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Chiildren
import ProfileCard from '../component/profile-card';
import Icon from '../component/icon'
import HeaderLeft from '../component/header-left'
import HeaderRight from '../component/header-right'

// Tools
import {safeAreaFromTop} from '../tools/scale'
import judgePath from '../tools/path_judger'

// Style
import style from '../appearance/styles/style-mine-screen'

// Test
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import FeedScreen from '../screens/feed-screen'
import NearbyScreen from '../screens/nearby-screen'
import MyPublishScreen from './mine-sub-screens/my-publish-screen'

class MineScreen extends Component {

    static contextType = ThemeContext;

    constructor(props){
        super(props)
        this.state={
            scrollable:false,
            header: safeAreaFromTop(),
            s_height: Dimensions.get('window').height-safeAreaFromTop(),
            bg_height: 380-safeAreaFromTop(),
            distance: 270-safeAreaFromTop(),
            tab_item:[
                {key:'我的发布',to:'My-Publish'},
                {key:'我的宠物',to:'My-Pet'},
                {key:'我的收藏',to:'My-Favorite'},
                {key:'虚拟宠物',to:'Virtual-Pet'},
                {key:'我的商城',to:'My-Shopping'},
                {key:'消息通知',to:'Inbox'},
            ]
        }
    }

    pan = new Animated.ValueXY();
    //to = new Animated.ValueXY();
    //b = Animated.diffclamp(this.pan,-200,90)
    //to = Animated.divide(this.pan,2);
    getRecord = ()=>{
        // 起到记录上次移动位置值的作用，将当前位置设置为新的偏移值，避免闪回
        this.pan.setOffset({
            x: this.pan.x._value,
            y: this.pan.y._value
        });
    }
    recordNewOffset=Animated.event([
        null,
        { dx: this.pan.x, dy: this.pan.y }],
        {useNativeDriver:false}
    )
    bounce = ()=>{
        this.pan.flattenOffset();
        if(this.pan.y._value>(-this.state.distance/2)){
            Animated.spring(this.pan,{
                toValue: {x:0,y:0},
                useNativeDriver: false,
            }).start()
            this.setState({scrollable:false})
        }else{
            Animated.spring(this.pan,{
                toValue: {x:0,y:-this.state.distance},
                useNativeDriver: false,
            }).start()
            this.setState({scrollable:true})
        }
        
    }
    panResponder1 = PanResponder.create({
        onMoveShouldSetPanResponder: () => !this.state.scrollable,
        onPanResponderGrant: this.getRecord,
        onPanResponderMove: this.recordNewOffset,
        onPanResponderRelease: this.bounce,
    });
    panResponder2 = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: this.getRecord,
        onPanResponderMove: this.recordNewOffset,
        onPanResponderRelease: this.bounce,
    });


    render() {
        // Theme
        let theme = this.context;
        // Animation
        const { text,isLogin,path } = this.props;
        const translate = this.pan.y.interpolate({
            inputRange:[-this.state.distance,80],
            outputRange:[-this.state.distance,80],
            extrapolate: "clamp"
        })

        return (
        <View>
            <View style={{height:380,backgroundColor:"gray"}}>
            <View style={[style.header_container,{height:this.state.header+48}]}>
                <HeaderLeft onPress={()=>this.props.navigation.navigate('Settings')} opacity={1}/>
                <HeaderRight onPress={()=>this.props.navigation.navigate('Checkin')} opacity={1}/>
            </View>
                <ProfileCard height={270-(this.state.header+48)} onEdit={()=>this.props.navigation.navigate('Edit-Profile')}/>
            </View>

            <View style={{
                height:this.state.s_height,top:-90-20}}>
                <Animated.View
                    style={{height:this.state.s_height,transform: [{translateY: translate}]}}
                    {...this.panResponder1.panHandlers}>
                <View style={{
                    height:90,
                    backgroundColor:"white",
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30,
                    justifyContent:"flex-end"
                    }}
                    {...this.panResponder2.panHandlers}>
                    <View style={{
                        height:60,
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-evenly",
                    }}>
                        {this.state.tab_item.map((item,index)=>{
                        return(
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate(item.to)}} key={index}>
                            <View style={style.tab_bar_item_container}>
                                <View style={[
                                    style.tab_bar_item,
                                    {borderBottomColor:path==item.to?theme.alert:'transparent'}
                                ]}>
                                    <View>
                                        <Icon radius={32}/>
                                    </View>
                                    <Text style={[
                                        style.tab_bar_item_text,
                                        {color:path==item.to?theme.text_emphasis:theme.text}
                                    ]}>{item.key}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        )})}

                    </View>
                </View>
                <Tab.Navigator
                    initialRouteName="MyPublish"
                    tabBarOptions={{showLabel:false,style:{height:0}}}>
                    <Tab.Screen name="My-Publish" component={MyPublishScreen.bind(this)}/>
                    <Tab.Screen name="My-Pet" component={NearbyScreen}/>
                    <Tab.Screen name="My-Favorite" component={NearbyScreen}/>
                </Tab.Navigator>
                </Animated.View>
            </View>
        </View>
    );}
        
    
}

export default connect (
    (state) => {
        return {
            text: state.text.text,
            isLogin: state.login.isLogin,
            path: state.nav.path,
        }
    },
    { changeText }
)(MineScreen)



