// 关注页
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
    Image,
} from 'react-native'

// Children
import FollowScreenItem from '../component/follow-screen-item'
import Icon from '../component/icon'
import FloatingButton from '../component/floating-button'
// Context
import { ThemeContext } from '../appearance/theme/theme-context-provider';
// Style
import style from '../appearance/styles/style-follow-screen'
import icon from '../component/icon';
import { ScrollView } from 'react-native-gesture-handler';
// Tools
import { randomUsers, randomPublish } from '../tools/random-data';


function NearbyScreen() {

    const follow_list=randomUsers(10)

    const [menu_shown, setMenuShown] = React.useState(true);
    const barAnim = useRef(new Animated.Value(90)).current;
    const menuTranslateAnim = Animated.subtract(barAnim,90);

    const menuHide = Animated.timing(barAnim, {
        toValue: 0,
        duration:300,
        useNativeDriver:false,
    })

    const menuShow = Animated.spring(barAnim, {
        toValue: 90,
        tension:1,
        useNativeDriver:false,
    })
    
    // static sequence(animations)

    return (
        <ThemeContext.Consumer>
            {theme=>
            <View>
                <Animated.View style={{ zIndex:2, backgroundColor:theme.background, height:barAnim }}>
                    <Animated.View style={{ height:90, transform:[{ translateY:menuTranslateAnim }] }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems:"center", height:90, marginLeft:10 }}>
                            {follow_list.map((item,index)=>(
                            <TouchableOpacity
                                key={index}
                                style={style.follow_list_item_container}
                                onPress={()=>{
                                    // When a Profile in Follow-List is clicked
                                }}
                            >
                                <View style={style.round_profile_wrapper}>
                                    <Image source={{ uri: item.profile_picture_address }} style={{height:44,width:44,borderRadius:22}}/>
                                </View>
                                <Text numberOfLines={1} style={[ style.follow_list_username_text, { color: theme.text } ]}>
                                    {item.username}
                                </Text>
                            </TouchableOpacity>
                            ))}
                            <TouchableOpacity
                                style={[style.follow_list_item_container, { marginRight:40 } ]}
                                onPress={()=>{
                                    // When a "More" button in Follow-List is clicked
                                }}
                            >
                                <View style={style.round_profile_wrapper}>
                                    <Text style={[ style.more_indicator, { color:theme.text } ]}>...</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </Animated.View>
                    
                </Animated.View>

                <View style={{zIndex:1}}>
                    
                    <FlatList
                        ListHeaderComponent={()=>
                            <View style={[{backgroundColor:theme.background},style.list_header]}/>
                        }
                        onScroll={(event)=>{
                            //console.log(event.nativeEvent.contentOffset.y)
                            if(event.nativeEvent.contentOffset.y<10&&!menu_shown){
                                setMenuShown(true)
                                menuShow.start()
                            }else if (event.nativeEvent.contentOffset.y>10&&menu_shown){
                                setMenuShown(false)
                                menuHide.start()
                            }
                        }}
                        data={randomPublish(100)}
                        showsVerticalScrollIndicator={true}
                        renderItem={({ item }) => <FollowScreenItem item={item} key={item.id}/>}
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