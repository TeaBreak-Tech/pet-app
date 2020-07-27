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
    ScrollView
} from 'react-native'

// Children
import Icon from '../component/icon'
import DiscussionScreenItem from '../component/discussion-screen-item'
// Context
import { ThemeContext } from '../appearance/theme/theme-context-provider';
// Style
import style from '../appearance/styles/style-discussion-screen'
import icon from '../component/icon';

getRandomDataDiscussion = () => {
    return new Array(100).fill('').map((item, index) => {
        return {
            id:index+1,
            title: "新手铲屎官应该注意什么",
            images:[
                {id:1,uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592556493733&di=407136381c360447fbd22e9d42215ea4&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fsoft%2F6%2F434%2FcerHmI26yCoo.jpg"},
            ],
            follower:1120,
        };
    });
};

function NearbyScreen() {

    const [menu_shown, setMenuShown] = React.useState(true);

    const [type_selected, setType] = React.useState(null);
    const barAnim = useRef(new Animated.Value(50)).current;
    const menuTranslateAnim = useRef(new Animated.Value(0)).current;
    const submenuTranslateAnim = useRef(new Animated.Value(-40)).current;

    const menuHide = Animated.parallel([
        Animated.timing(barAnim, {
            toValue: 0,
            duration:300,
            useNativeDriver:false,
        }),
        Animated.timing(menuTranslateAnim, {
            toValue: -50,
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
        Animated.timing(barAnim, {
            toValue: 50,
            duration:300,
            useNativeDriver:false,
        }),
        Animated.timing(menuTranslateAnim, {
            toValue: 0,
            duration:300,
            useNativeDriver:false,
        })
    ])

    const menuShow_slow = Animated.parallel([
        Animated.spring(barAnim, {
            toValue: 50,
            tension:1,
            useNativeDriver:false,
        }),
        Animated.spring(menuTranslateAnim, {
            toValue: 0,
            tension:1,
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

    const submenuShow_slow = Animated.parallel([
        Animated.spring(barAnim, {
            toValue: 40,
            tension:1,
            useNativeDriver:false,
        }),
        Animated.spring(submenuTranslateAnim, {
            toValue: 0,
            tension:1,
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
        {title:"分类1",key:"antiepidemic"},
        {title:"分类2",key:"vaccine"},
        {title:"分类3",key:"certificates"},
        {title:"分类4",key:"pet-adopt"},
        {title:"分类5",key:"pet-chip"},
        {title:"分类6",key:"free-survice"},
        {title:"分类7",key:"pet-adod wpt"},
        {title:"分类8",key:"pet-fe wchip"},
        {title:"分类9",key:"free-sure wvice"},
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
                    <View style={{height:0}}>
                    <Animated.View style={[{ // Menu
                        height: 40,
                        transform: [{translateY: menuTranslateAnim}],
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-evenly",
                    }]}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems:"center", height:50, marginLeft:10 }}>
                        {menu_item.map((item,index)=>(
                        <TouchableOpacity
                            key={index}
                            style={style.menu_item}
                            onPress={()=>{
                              setType(item)
                              toggleSubmenu.start()
                            }}
                        >
                            <Text numberOfLines={1} style={[ {marginHorizontal:10},{ color: theme.text_emphasis } ]}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            style={[ style.menu_item, { marginRight:40 } ]}
                            onPress={()=>{
                                // When a "More" button in Follow-List is clicked
                            }}
                        >
                            <Text style={[ {marginHorizontal:20},{ color:theme.text_emphasis } ]}>...</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    </Animated.View>
                    </View>

                    <Animated.View style={[{ // Menu
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
                            <Icon></Icon>
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
                                        ontSize: 12,
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
                            key={index}
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
                            <View style={{
                                height:40,
                                backgroundColor:theme.background,
                                flexDirection:"row",
                                alignItems:"flex-end",
                            }}>
                                <View style={{marginLeft:22,marginBottom:10,flexDirection:"row",alignItems:"center",}}>
                                    <Icon radius={18}></Icon>
                                    <Text style={{
                                        marginLeft:5,
	                                    fontSize: 14,
	                                    lineHeight: 24,
	                                    color: theme.text
                                    }}>{type_selected==null?"热门讨论":"筛选"}</Text>
                                </View>
                            </View>
                        )}
                        //onRefresh={()=>{alert("refresh")}}
                        //refreshing={true}
                        //zoomScale={2}
                        onScroll={(event)=>{
                            //console.log(event.nativeEvent.contentOffset.y)
                            if(event.nativeEvent.contentOffset.y<10&&!menu_shown){
                                setMenuShown(true)
                                if (type_selected==null){
                                    menuShow_slow.start()
                                }else{
                                    submenuShow_slow.start()
                                }
                            }else if (event.nativeEvent.contentOffset.y>10&&menu_shown){
                                setMenuShown(false)
                                menuHide.start()
                            }
                        }}
                        data={getRandomDataDiscussion()}
                        showsVerticalScrollIndicator={true}
                        renderItem={({ item }) => <DiscussionScreenItem item={item} key={item.id}/>}
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
export default  NearbyScreen