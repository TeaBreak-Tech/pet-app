// 社区-发现页

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
import NearbyItem from '../component/nearby-item'
import Icon from '../component/icon'
import Banner from '../component/banner'
import DiscoverScreenItem from '../component/discover-screen-item'
// Context
import { ThemeContext } from '../appearance/theme/theme-context-provider';
// Style
// Tools
import { randomPublish } from '../tools/random-data';

function DiscoverScreen({navigation}) {

    const [show_options, setShowOptions] = React.useState(false);
    const optionsAnim = useRef(new Animated.Value(1)).current;
    const sorting_options = {type:"sorting",list:[
        {title:"综合排序",key:"synthetically"},
        {title:"口碑",key:"reputation"},
        {title:"距离",key:"distance"},
    ]}
    const location_options = {type:"location",list:[
        {title:"全城",key:"city"},
        {title:"全区",key:"district"},
    ]}
    const [sorting, setSorting] = React.useState(sorting_options.list[0]);
    const [location, setLocation] = React.useState(location_options.list[0]);
    const [options, setOptions] = React.useState(sorting_options);


    const optionsShow = () => {
      Animated.spring(optionsAnim, {
        toValue: 50,
        speed:10,
        useNativeDriver:false,
      }).start(()=>{});
    };
    const optionsHide = () => {
      // Will change fadeAnim value to 0 in 5 seconds
      Animated.spring(optionsAnim, {
        toValue: 0,
        speed:25,
        useNativeDriver:false,
      }).start(()=>{});
    };


    return (
    <ThemeContext.Consumer>
    {theme=>
    <View>
        
        <View style={{zIndex:2,backgroundColor:theme.background}}>

            <View style={[{
                zIndex:2,
                height:40,
                borderBottomWidth:1,
                flexDirection:"row",
                alignItems:"center",
                },{
                borderBottomColor:theme.background_emphasis,
                }]}
            >
              
                <TouchableOpacity
                    style={{flex:1,height:40,alignItems:"center",flexDirection:"row",justifyContent:"center",borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:theme.background_emphasis}}
                    onPress={()=>{
                        if(show_options){
                            setShowOptions(false)
                            optionsHide()
                        }else{
                            setOptions(sorting_options)
                            setShowOptions(true)
                            optionsShow()
                        }
                    }}
                >
                    <Text style={{fontSize: 14,color:theme.text_emphasis}}>{sorting.title}</Text>
                    <Icon radius={10} style={{position:'absolute',right:'10%'}}></Icon>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{flex:1,height:40,alignItems:"center",flexDirection:"row",justifyContent:"center",borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:theme.background_emphasis}}
                    onPress={()=>{
                        if(show_options){
                            setShowOptions(false)
                            optionsHide()
                        }else{
                            setOptions(location_options)
                            setShowOptions(true)
                            optionsShow()
                        }
                    }}
                >
                    <Text style={{fontSize: 14,color:theme.text_emphasis}}>{location.title}</Text>
                    <Icon radius={10} style={{position:'absolute',right:'10%'}}></Icon>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{flex:1,height:40,alignItems:"center",flexDirection:"row",justifyContent:"center",borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:theme.background_emphasis}}
                    onPress={()=>{
                        if(show_options){
                            setShowOptions(false)
                            optionsHide()
                        }else{
                            setOptions(location_options)
                            setShowOptions(true)
                            optionsShow()
                        }
                    }}
                >
                    <Text style={{fontSize: 14,color:theme.text_emphasis}}>{location.title}</Text>
                    <Icon radius={10} style={{position:'absolute',right:'10%'}}></Icon>
                </TouchableOpacity>
            </View>
            <Animated.View style={{height:optionsAnim}}>
                {show_options?
                <View style={{marginHorizontal:18, borderBottomColor:theme.background_emphasis,borderBottomWidth:1,height:50,flexDirection:"row",alignItems:"center"}}>
                    <FlatList
                        data={options.list}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={()=>{
                                    if(options.type=="sorting"){
                                        setSorting(item)
                                    }else{
                                        setLocation(item)
                                    }
                                    optionsHide()
                                    setShowOptions(false)
                                }}
                            >
                                <Text style={{
                                    marginRight:20,
                                    fontSize: 14,
                                    color:theme.text_emphasis,
                                }}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        }
                        horizontal={true}
                    />
                </View>
                :null}
            </Animated.View>
        </View>

        <View style={{backgroundColor:theme.background}}>
            <View style={{zIndex:1,marginHorizontal:5}}>
                <FlatList
                    numColumns={2}
                    ListHeaderComponent={()=>
                    <View style={{height:140,}}>
                        <Banner/>
                    </View>
                    }
                    data={randomPublish(100)}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) => <DiscoverScreenItem item={item} key={item.id} navigation={navigation}/>}
                    keyExtractor={item => item.id}
                    style={{top:0}}
                    getItemLayout={(data, index) => (
                        {length: 300, offset: 300 * index, index}
                    )}
                >
                </FlatList>
            </View>
        </View>
    </View>
    }
    </ThemeContext.Consumer>
    );
}
export default  DiscoverScreen