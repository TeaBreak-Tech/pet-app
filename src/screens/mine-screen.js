// Inmport
import React, { Component, createRef } from 'react';
import {
    View,
    Text,
    Dimensions,
    PanResponder,
    Animated,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Context
import { connect } from 'react-redux'
import { changeText } from '../redux/action/action'
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Chiildren and Components
import ProfileCard from '../component/profile-card';
import { SettingsOutlined, CheckinOutlined, PetOutlined, FavoriteOutlined, AlarmOutlined, ShoppingCartOutlined, MineIconOutlinedBasic } from '../component/icon'
import NearbyScreen from '../screens/nearby-screen'
import MyPublishScreen from './mine-sub-screens/my-publish-screen'
import MyFavoriteScreen from './mine-sub-screens/my-favorite-screen'

// Tools
import { safeAreaFromTop, screenWidth } from '../tools/scale'

// Style
import style from '../appearance/styles/style-mine-screen'

const Tab = createMaterialTopTabNavigator();


class MineScreen extends Component {

    static contextType = ThemeContext;

    constructor(props){
        super(props)
        this.state={
            scrollable:false,
            header: safeAreaFromTop(),
            s_height: Dimensions.get('window').height-safeAreaFromTop(),
            bg_height: 360-safeAreaFromTop(),
            distance: 260-safeAreaFromTop(),
            tab_item:[
                {key:'我的发布',to:'My-Publish',auto_bounce:true, icon:MineIconOutlinedBasic },
                {key:'我的宠物',to:'My-Pet',auto_bounce:true, icon:PetOutlined },
                {key:'我的收藏',to:'My-Favorite',auto_bounce:true, icon:FavoriteOutlined },
                {key:'我的商城',to:'My-Shopping',auto_bounce:false, icon:ShoppingCartOutlined },
                {key:'消息通知',to:'Inbox',auto_bounce:false, icon:AlarmOutlined },
            ],
            favorite_searching:false,
            publish_searching:false,
            search_text:"",
        }
        //this.ref = React.createRef()
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
    inertial = ()=>{
        this.pan.flattenOffset();
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

        if(this.pan.y._value<-this.state.distance/2){
            this.setState({scrollable:true})
            toTopAnim.start()
        }else{
            this.setState({
                scrollable:false,
                favorite_searching:false,
                publish_searching:false,
                search_text:""
            })
            backAnim.start()
        }
    }

    bounceUp = (then)=>{
        this.setState(
            {scrollable:true},
            Animated.spring(this.pan,{
                toValue: {x:0,y:-this.state.distance},
                tension:1,
                useNativeDriver: false,
            }).start(then)
        )
    }

    bounceDown = (then)=>{
        this.setState(
            {scrollable:false},
            Animated.spring(this.pan,{
                toValue: {x:0,y:0},
                tension:1,
                useNativeDriver: false,
            }).start(then)
        )
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
        
        //获取当前导航位置
        let state = this.props.navigation.dangerouslyGetState()
        while(state.routes[state.index].state){
            state = state.routes[state.index].state
        }
        let path = state.routeNames[state.index]

        // Theme
        let theme = this.context;
        // Animation
        const { text,isLogin,user } = this.props;
        const translate = this.pan.y.interpolate({
            inputRange:[-10000,-this.state.distance,0,500],
            outputRange:[-this.state.distance,-this.state.distance,0,80],
            extrapolate: "clamp"
        })

        background="http://106.52.96.163/img/app/background_5.jpg"

        return (
        <View>
            <StatusBar backgroundColor="transparent"
                barStyle="dark-content"
                translucent={true}
                hidden={false}
                animated={true}/>
            <ImageBackground source={{ uri: background }} style={{height:360}}>
            <View style={[style.header_container,{height:this.state.header+48}]}>
                <TouchableOpacity style={{marginLeft:screenWidth()*0.07,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Settings')}>
                    <SettingsOutlined/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:screenWidth()*0.07,marginBottom:10}} onPress={()=>this.props.navigation.navigate('Checkin')}>
                    <CheckinOutlined/>
                </TouchableOpacity>
            </View>
                <ProfileCard
                    height={260-(this.state.header+48)}
                    onEdit={()=>this.props.navigation.navigate('Edit-Profile')}
                    onLogin={()=>this.props.navigation.navigate('Login')}
                    isLogin={isLogin}
                    user={user}
                    askLogin
                />
            </ImageBackground>

            <View style={{
                height:this.state.s_height,top:-100}}>
                <Animated.View
                    style={{height:this.state.s_height,transform: [{translateY: translate}]}}
                    >
                    <View style={{height:100,
                        backgroundColor:"white",
                        borderTopLeftRadius:30,
                        borderTopRightRadius:30,
                        justifyContent:"flex-end"
                        }}
                    >
                        <View
                            style={{height:30, justifyContent:"center", alignItems:"center"}}
                            {...this.panResponder2.panHandlers}
                            collapsable={false}
                        >
                            <TouchableOpacity 
                                style={{height:20,justifyContent:"center"}}
                                onPress={()=>{
                                    if ( this.state.scrollable ){
                                        this.bounceDown()
                                    }else{
                                        this.bounceUp()
                                    }
                                }}
                                activeOpacity={1}
                            >
                                <View style={{height:4,width:30,borderRadius:2,backgroundColor:this.state.scrollable?theme.separator:"transparent"}}/>
                            </TouchableOpacity>
                        </View>
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
                                            elevation:3,
                                            justifyContent:'center',
                                            alignItems:'center',
                                        }}>
                                            <item.icon basic radius={20}/>
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
            user: state.login.user,
        }
    },
    { changeText }
)(MineScreen)



