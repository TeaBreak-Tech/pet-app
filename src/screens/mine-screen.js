// Inmport
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SectionList,
    ScrollView,
    Dimensions,
    PanResponder,
    Animated,
    TouchableOpacity,
    ImageBackground,
    Modal,
    Share,
} from "react-native";

// Context
import { connect, useStore } from 'react-redux'
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
import style2 from '../appearance/styles/style-header'

// Test
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import FeedScreen from '../screens/feed-screen'
import NearbyScreen from '../screens/nearby-screen'
import MyPublishScreen from './mine-sub-screens/my-publish-screen'
import MyFavoriteScreen from './mine-sub-screens/my-favorite-screen'

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
                {key:'我的发布',to:'My-Publish',auto_bounce:true},
                {key:'我的宠物',to:'My-Pet',auto_bounce:true},
                {key:'我的收藏',to:'My-Favorite',auto_bounce:true},
                {key:'我的商城',to:'My-Shopping',auto_bounce:false},
                {key:'消息通知',to:'Inbox',auto_bounce:false},
            ]
        }
    }

    pan = new Animated.ValueXY();
    getRecord = ()=>{
        // 起到记录上次移动位置值的作用，将当前位置设置为新的偏移值，避免闪回
        this.pan.setOffset({
            x: this.pan.x._value,
            y: this.pan.y._value
        });
    }
    recordNewOffset = Animated.event([
        null,
        { dx: this.pan.x, dy: this.pan.y }],
        {useNativeDriver:false}
    )
    inertial = (event, gestureState)=>{
        this.pan.flattenOffset();
        Animated.decay(this.pan,{
            velocity:gestureState.vy,
            deceleration:0.99,
            useNativeDriver: false,
        }).start()
        const backAnim = Animated.spring(this.pan,{
            toValue: {x:0,y:0},
            friction:10,
            tension:5,
            useNativeDriver: false,
        })

        const toTopAnim = Animated.spring(this.pan,{
            toValue: {x:0,y:-this.state.distance},
            friction:10,
            tension:5,
            useNativeDriver: false,
        })
        let to = this.pan.y._value+gestureState.vy*100
        if(to<-this.state.distance){
            this.setState({scrollable:true})
            toTopAnim.start()
        }else if(to>0){
            this.setState({scrollable:false})
            backAnim.start()
        }else{
            this.setState({scrollable:false})
        }
    }

    bounceUp = (then)=>{
        Animated.spring(this.pan,{
            toValue: {x:0,y:-this.state.distance},
            tension:1,
            useNativeDriver: false,
        }).start(then)
        this.setState({scrollable:true})
    }
    panResponder1 = PanResponder.create({
        onMoveShouldSetPanResponder: () => !(this.pan.y._value<=-this.state.distance),
        onPanResponderGrant: this.getRecord,
        onPanResponderMove: this.recordNewOffset,
        onPanResponderRelease: this.inertial,
    });
    panResponder2 = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: this.getRecord,
        onPanResponderMove: this.recordNewOffset,
        onPanResponderRelease: this.inertial,
    });

    render() {
        // Theme
        let theme = this.context;
        // Animation
        const { text,isLogin,path } = this.props;
        const translate = this.pan.y.interpolate({
            inputRange:[-10000,-this.state.distance,0,500],
            outputRange:[-this.state.distance,-this.state.distance,0,80],
            extrapolate: "clamp"
        })

        const offset = this.pan.y.interpolate({
            inputRange:[-this.state.distance,0,500],
            outputRange:[-this.state.distance,0,80],
            extrapolate: "clamp"
        })

        background="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590154415905&di=f401c2e337d6f0797feba14afeff6a95&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201403%2F21%2F20140321142644_dUTFx.thumb.700_0.jpeg"

        return (
        <View>
            
            <ImageBackground source={{ uri: background }} style={{height:380}}>
            <View style={[style.header_container,{height:this.state.header+48}]}>
                <HeaderLeft onPress={()=>this.props.navigation.navigate('Settings')} opacity={1}/>
                <HeaderRight onPress={()=>this.props.navigation.navigate('Checkin')} opacity={1}/>
            </View>
                <ProfileCard height={270-(this.state.header+48)} onEdit={()=>this.props.navigation.navigate('Edit-Profile')}/>
            </ImageBackground>

            <View style={{
                height:this.state.s_height,top:-100-20}}>
                <Animated.View
                    style={{height:this.state.s_height,transform: [{translateY: translate}]}}
                    >
                <View style={{
                    height:100,
                    backgroundColor:"white",
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30,
                    justifyContent:"flex-end"
                    }}
                >
                    <View style={{height:30}} {...this.panResponder2.panHandlers} collapsable={false}/>
                    <View style={{
                        height:60,
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-evenly",
                        marginLeft:22,
                        marginRight:22,
                    }}>
                        {this.state.tab_item.map((item,index)=>{
                        return(
                        <TouchableOpacity
                            onPress={()=>{
                                if (item.auto_bounce){
                                    this.bounceUp()
                                    this.props.navigation.navigate(item.to)
                                }else{
                                    this.props.navigation.navigate(item.to)
                                }
                                this.setState({scrollable:true})
                            }} key={index}>
                            <View style={style.tab_bar_item_container}>
                                <View style={style.tab_bar_item}>
                                    <View style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius:18,
                                        backgroundColor: "#ffffff",
                                        shadowColor: "rgba(0, 0, 0, 0.16)",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2
                                        },
                                        shadowRadius: 2,
                                        shadowOpacity: 1,
                                        elevation:3
                                    }}>
                                        {/*<Icon radius={32}/>*/}
                                    </View>
                                    <Text style={[
                                        style.tab_bar_item_text,
                                        {color:path==item.to?theme.basic_emphasis:theme.text}
                                    ]}>{item.key}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        )})}

                    </View>
                    <View style={{height:10,justifyContent:"flex-end"}} {...this.panResponder2.panHandlers}>
                        <View style={{marginLeft:22,marginRight:22,height:1,backgroundColor:theme.text}}></View>
                    </View>
                </View>
                <View collapsable={false} {...this.panResponder1.panHandlers} style={{flex:1}}>
                <Tab.Navigator
                    initialRouteName="MyPublish"
                    tabBarOptions={{showLabel:false,style:{height:0}}}>
                    <Tab.Screen name="My-Publish" component={MyPublishScreen.bind(this)}/>
                    <Tab.Screen name="My-Pet" component={NearbyScreen}/>
                    <Tab.Screen name="My-Favorite" component={MyFavoriteScreen.bind(this)}/>
                </Tab.Navigator>
                </View>
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



