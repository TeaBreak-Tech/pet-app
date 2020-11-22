// Import
import React, { useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    RefreshControl,
    TextInput,
    Animated,
} from 'react-native'

// Children
import FeedItem from '../component/feed-item'
import { HotFilled, BackOutlined, FilterOutlined } from '../component/icon'
// Context
import { ThemeContext } from '../appearance/theme/theme-context-provider';
// Style
import style from '../appearance/styles/style-nearby-screen'
import { Antiepidemic, Vaccine, Certificates, PetAdopt, PetChip, FreeService } from '../component/icon';

getRandomDataFeed = () => {
    return new Array(100).fill('').map((item, index) => {
        return {
            id:""+(index+1),
            title: '标题' + (index + 1),
            images:[
                {id:1,uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592556493733&di=872f7624d7801d59c8857f1e05bf7acf&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2Fday_120912%2F12091204401a7d53280e5a7080.jpg"},
            ],
            distance:"550m",
            location:"新华东路124号",
            discription: '这里是简短的介绍内容：啊呢哦弄哦i美女客服女看出v的那我去我就你的口味v口味默认v我们v人能不能',
            services:[
                {title:"服务1",price:122},
                {title:"服务2",price:255},
                {title:"服务3",price:234},
                {title:"服务4",price:145},
                {title:"服务5",price:275},
                {title:"服务6",price:1823},
            ],
        };
    });
};

function FeedScreen() {

    const [type_selected, setType] = React.useState(null);
    const barAnim = useRef(new Animated.Value(0)).current;
    const menuBarAnim = useRef(new Animated.Value(90)).current;
    const menuTranslateAnim = useRef(new Animated.Value(0)).current;
    const submenuTranslateAnim = useRef(new Animated.Value(-40)).current;

    const menuHide = Animated.parallel([
        Animated.timing(menuBarAnim, {
            toValue: 0,
            duration:300,
            useNativeDriver:false,
        }),
        Animated.timing(barAnim, {
            toValue: 0,
            duration:300,
            useNativeDriver:false,
        }),
        Animated.timing(menuTranslateAnim, {
            toValue: -90,
            duration:300,
            useNativeDriver:false,
        }),
        Animated.timing(submenuTranslateAnim, {
            toValue: -40,
            duration:300,
            useNativeDriver:false,
        })
    ])

    const menuShow = Animated.parallel([
        Animated.timing(menuBarAnim, {
            toValue: 90,
            duration:300,
            useNativeDriver:false,
        }),
        Animated.timing(menuTranslateAnim, {
            toValue: 0,
            duration:300,
            useNativeDriver:false,
        })
    ])

    const submenuShow = Animated.parallel([
        Animated.timing(barAnim, {
            toValue: 40,
            duration:300,
            useNativeDriver:false,
        }),
        Animated.timing(submenuTranslateAnim, {
            toValue: 0,
            duration:300,
            useNativeDriver:false,
        })
    ])

    const toggleMenu = Animated.sequence([
        menuHide,
        menuShow
    ])

    const toggleSubmenu = Animated.sequence([
        menuHide,
        submenuShow
    ])

    const menu_item = [
        {title:"卫生防疫",key:"antiepidemic",icon:Antiepidemic},
        {title:"疫苗信息",key:"vaccine",icon:Vaccine},
        {title:"证件办理",key:"certificates",icon:Certificates},
        {title:"领养中心",key:"pet-adopt",icon:PetAdopt},
        {title:"宠物芯片",key:"pet-chip",icon:PetChip},
        {title:"免费服务",key:"free-survice",icon:FreeService},
    ]
    
    
    const submenu_item = [
        {title:"综合排序",key:"antiepidemic"},
        {title:"收藏",key:"vaccine"},
        {title:"发布时间",key:"certificates"},
    ]

    const [filter_selected, setFilter] = React.useState(submenu_item[0]);

    
    // static sequence(animations)

    return (
        <ThemeContext.Consumer>
            {theme=>
            <View>
                <Animated.View style={[{zIndex:2,backgroundColor:theme.background,},{height: barAnim,}]}>
                    

                    <Animated.View style={[{ // SubMenu
                        height: 40,
                        transform: [{translateY: submenuTranslateAnim}],
                        flexDirection:"row",
                        alignItems:"flex-end",
                        justifyContent:"flex-start",
                    }]}>
                        <TouchableOpacity
                            onPress={()=>{ 
                                setType(null)
                                toggleMenu.start()
                            }}
                            style={{flexDirection:"row",alignItems:"center",marginLeft:20}}
                        >
                            <BackOutlined/>
                            <View style={{
                                width: 80,
                                height: 30,
                                borderRadius: 14,
                                backgroundColor: "#de7b76",
                                alignItems:"center",
                                justifyContent:"center",
                                marginLeft:5,
                            }}>
                                <Text
                                    style={{
                                        fontSize: 12,
	                                    lineHeight: 20,
                                        color: "#ffffff",
                                        fontWeight:"bold",
                                    }}
                                >{type_selected==null?"":type_selected.title}</Text>
                            </View>
                            
                        </TouchableOpacity>
                        
                        {submenu_item.map((item,index)=>{
                        return(
                        <TouchableOpacity
                            onPress={()=>{
                                setFilter(item)
                            }}
                            key={item.key}
                        >
                            <View style={{
                                justifyContent:"center",
                                alignItems:"center",
                                height:30,
                                borderBottomWidth:2,
                                borderBottomColor:filter_selected.key==item.key?theme.basic_emphasis:theme.background,
                                marginLeft:20,
                            }}>
                                <Text style={{
                                    marginHorizontal:5,
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: "#535353",
                                }}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                        )})}
                        
                    </Animated.View>

                </Animated.View>

                <View style={{zIndex:1}}>
                    <FlatList
                        ListHeaderComponent={()=>(
                            <View style={{backgroundColor:theme.background}}>
                                <Animated.View style={{height:menuBarAnim}}>
                                    <Animated.View style={[{ // Menu
                                        height: 90,
                                        transform: [{translateY: menuTranslateAnim}],
                                        flexDirection:"row",
                                        alignItems:"center",
                                        justifyContent:"space-evenly",
                                    }]}>
                                        {menu_item.map((item,index)=>{
                                        return(type_selected==null&&
                                        <TouchableOpacity
                                            onPress={()=>{
                                                setType(item)
                                                toggleSubmenu.start()
                                            }}
                                            key={item.key}
                                        >
                                            <View style={style.tab_bar_item_container}>
                                                <View style={style.tab_bar_item}>
                                                    <View style={{
                                                        width: 44,
                                                        height: 44,
                                                        borderRadius:22,
                                                        backgroundColor: "#ffffff",
                                                        shadowColor: "rgba(0, 0, 0, 0.16)",
                                                        shadowOffset: {
                                                            width: 0,
                                                            height: 2
                                                        },
                                                        shadowRadius: 2,
                                                        shadowOpacity: 1,
                                                        elevation:3,
                                                        alignItems:'center',
                                                        justifyContent:'center',
                                                    }}>
                                                        <item.icon radius={26}/>
                                                    </View>
                                                    <Text style={[
                                                        style.menu_item_text,
                                                        {color:theme.text}
                                                    ]}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        )})}
                                    </Animated.View>
                                </Animated.View>


                                <View style={{
                                    height:40,
                                    flexDirection:"row",
                                    alignItems:"flex-end",
                                }}>
                                    <View style={{marginLeft:22,marginBottom:10,flexDirection:"row",alignItems:"center",}}>
                                        {type_selected==null?<HotFilled radius={12}/>:<FilterOutlined radius={12}/>}
                                        <Text style={{
                                            marginLeft:5,
                                            fontSize: 14,
                                            lineHeight: 24,
                                            color: theme.text
                                        }}>{type_selected==null?"热门推送":"筛选"}</Text>
                                    </View>
                                </View>
                            </View>
                        )}

                        data={getRandomDataFeed()}
                        showsVerticalScrollIndicator={true}
                        renderItem={({ item }) => <FeedItem item={item}/>}
                        keyExtractor={item => item.id}
                        style={{top:0}}
                    >
                    </FlatList>
                </View>
        
            </View>
            }
        </ThemeContext.Consumer>
    );
}
export default  FeedScreen