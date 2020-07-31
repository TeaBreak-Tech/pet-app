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
// Context
import { ThemeContext } from '../appearance/theme/theme-context-provider';
// Style
import style from '../appearance/styles/style-follow-screen'
import { ScrollView } from 'react-native-gesture-handler';
// Tools
import { get_followed_users, randomPublish } from '../tools/moke-network'


function NearbyScreen() {

    const follow_list = get_followed_users(1)

    const [menu_shown, setMenuShown] = React.useState(true);
    const barAnim = useRef(new Animated.Value(90)).current;
    
    // static sequence(animations)

    return (
        <ThemeContext.Consumer>
            {theme=>
            <View>

                <View style={{zIndex:1}}>
                    
                    <FlatList
                        ListHeaderComponent={()=>
                            <View style={{ height:90, backgroundColor: theme.background }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems:"center", height:90, marginLeft:10 }}>
                                    {follow_list.map((item,index)=>(
                                    <TouchableOpacity
                                        key={index} 
                                        style={style.follow_list_item_container}
                                        onPress={()=>{
                                            alert("clicked user")
                                            // When a Profile in Follow-List is clicked
                                        }}
                                    >
                                        <View style={style.round_profile_wrapper}>
                                            <Image source={{ uri: item.profile_picture }} style={{height:44,width:44,borderRadius:22}}/>
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
                            </View>
                        }
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