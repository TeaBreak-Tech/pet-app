// Import
import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'

// Context
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Children
import Icon from './icon';

// Style
import style from '../appearance/styles/style-nearby-item'

// 社区和寻找公用的搜索引擎页
function NearbyItem(props) {

    const moreAnim = useRef(new Animated.Value(260)).current;
    const [ more_shown, setMoreShown ] = React.useState(false)
    item = props.item

    const showMore = () => {
        Animated.spring(moreAnim, {
            toValue: 260+(item.services.length-2)*40,
            speed:10,
            useNativeDriver:false,
        }).start(()=>{});
    };
    const hideMore = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.spring(moreAnim, {
            toValue: 260,
            speed:25,
            useNativeDriver:false,
        }).start(()=>{});
    };
    
    return (
        <ThemeContext.Consumer>
            {theme=>
            <View>
            <Animated.View style={{height:moreAnim,backgroundColor:theme.background,borderBottomWidth:1,borderBottomColor:"#c4c4c4"}}>
                
                <View style={{flex:1,marginHorizontal:18,borderBottomWidth:1,borderBottomColor:"#c4c4c4"}}>
                    <TouchableOpacity style={{height:150,}}>
                        <View style={{marginTop:25, flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{marginLeft:5}}>
                                <Text style={{fontSize:16,lineHeight: 26,color:theme.text_emphasis}}>{item.title}</Text>
                                <Text style={{fontSize: 14,lineHeight: 20,color:theme.text_emphasis}}>距离{item.distance}｜{item.location}</Text>
                                <Text numberOfLines={2} style={{fontSize: 12,lineHeight: 14, marginTop:6, color:theme.text, maxWidth:200}}>{item.discription}</Text>
                                <View style={{flexDirection:"row",height:40,alignItems:"center",width:120,justifyContent:"space-between"}}>
                                    <Icon radius={18}/><Icon radius={18}/><Icon radius={18}/><Icon radius={18}/><Icon radius={18}/>
                                </View>
                            </View>
                            <View>
                                <Image source={{ uri: item.images[0].uri }} style={{height:110,width:150}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {(more_shown?item.services:item.services.slice(0,2)).map((item,index)=>(
                        <TouchableOpacity style={{height:40,alignItems:"center",flexDirection:"row",borderTopWidth:1,borderTopColor:"#c4c4c4"}} key={index}>
                            <View style={{width:80}}>
                                <Text style={{color:theme.basic_emphasis,fontWeight:"bold",fontSize:16,marginLeft:20}}>¥{item.price}</Text>
                            </View>
                            <Text style={{color:theme.text_emphasis,fontSize:14,marginLeft:20}}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity
                    style={{height:30,marginHorizontal:18,alignItems:"center",justifyContent:"center"}}
                    onPress={()=>{
                        if (more_shown){
                            hideMore()
                            setMoreShown(false)
                        }else{
                            showMore()
                            setMoreShown(true)
                        }
                    }}
                >
                    <Text style={{fontSize:14,color:theme.text_emphasis}}>{more_shown?"隐藏更多服务":"更多服务"}</Text>
                </TouchableOpacity>
            </Animated.View>
            <View style={{height:7,backgroundColor:theme.background_emphasis}}></View>
            </View>
            }
        </ThemeContext.Consumer>
    );
}

export default NearbyItem