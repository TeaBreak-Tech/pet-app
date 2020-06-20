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
// Context
import { ThemeContext } from '../appearance/theme/theme-context-provider';
// Style
import style from '../appearance/styles/style-nearby-screen'
import icon from '../component/icon';



function NearbyScreen() {

    const getRandomNearby = () => {
      return new Array(100).fill('').map((item, index) => {
        return {
          id:index+1,
          title: '标题' + (index + 1),
          images:[
            {id:1,uri:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=879378779,1619059974&fm=15&gp=0.jpg"},
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

    const [show_menu, setShowMenu] = React.useState(true);
    const menuAnim = useRef(new Animated.Value(90)).current;
    const menuTranslateAnim = Animated.subtract(menuAnim,90)
    const menu_item = [
        {title:"卫生防疫",key:"antiepidemic"},
        {title:"疫苗信息",key:"vaccine"},
        {title:"证件办理",key:"certificates"},
        {title:"领养中心",key:"pet-adopt"},
        {title:"宠物芯片",key:"pet-chip"},
        {title:"免费服务",key:"free-survice"},
    ]
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

    const menuShow = () => {
      Animated.spring(menuAnim, {
        toValue: 90,
        tension: 1,
        useNativeDriver:false,
      }).start(()=>{setShowMenu(true)});
    };
    const menuHide = () => {
      Animated.spring(menuAnim, {
        toValue: 0,
        tension: 1,
        useNativeDriver:false,
      }).start();
    };

    const optionsShow = () => {
      Animated.spring(optionsAnim, {
        toValue: 40,
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
            <Animated.View style={{
              height: menuAnim,
            }}>
              <Animated.View style={[{ // Menu
                height: 90,
                transform: [{translateY: menuTranslateAnim}],
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-evenly",
              }]}>
                {menu_item.map((item,index)=>{
                return(
                <TouchableOpacity
                  onPress={()=>{}}
                  key={index}
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
                      }}>
                      {/*<Icon radius={32}/>*/}
                      </View>
                        <Text style={[
                          style.menu_item_text,
                          {color:path==item.to?theme.basic_emphasis:theme.text}
                        ]}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )})}
              </Animated.View>
            </Animated.View>

            <View style={[style.tool_bar_container,{borderBottomColor:theme.background_emphasis}]}>
              <View style={{flexDirection:"row"}}>
              <TouchableOpacity
                style={{height:40,alignItems:"center",flexDirection:"row"}}
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
                <View style={{marginHorizontal:10}}>
                  <Icon radius={15}></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{height:40,alignItems:"center",flexDirection:"row"}}
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
                <View style={{marginHorizontal:10}}>
                  <Icon radius={15}></Icon>
                </View>
              </TouchableOpacity>
              </View>

              <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={{
                height: 26,
                borderRadius: 13,
                backgroundColor: theme.basic,
                alignItems:"center",
                justifyContent:"center",
                marginLeft:15,
              }}>
                <Text style={{color:theme.background,fontSize:14,marginHorizontal:10,fontWeight:"bold"}}>定位搜索</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{
                height: 26,
                borderRadius: 13,
                backgroundColor: theme.basic,
                alignItems:"center",
                justifyContent:"center",
                marginLeft:15,
              }}>
                <Text style={{color:theme.background,fontSize:14,marginHorizontal:10,fontWeight:"bold"}}>更多</Text>
              </TouchableOpacity>
              </View>
            </View>

            <Animated.View style={{height:optionsAnim}}>
              {show_options?
                <View style={{marginHorizontal:18, borderBottomColor:theme.background_emphasis,borderBottomWidth:1,height:40,flexDirection:"row",alignItems:"center"}}>
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
                        }}>{item.title}</Text>
                      </TouchableOpacity>
                    }
                    horizontal={true}
                  />
                </View>
              :null}
            </Animated.View>

          </View>

        <View style={{zIndex:1}}>
        <FlatList
            ListHeaderComponent={()=><View style={{height:15,backgroundColor:theme.background}}></View>}
            //onRefresh={()=>{alert("refresh")}}
            //refreshing={true}
            //zoomScale={2}
            onScroll={(event)=>{
              //console.log(event.nativeEvent.contentOffset.y)
              if(event.nativeEvent.contentOffset.y<-10&&(!show_menu)){
                menuShow()
              }else if (event.nativeEvent.contentOffset.y>10&&(show_menu)){
                setShowMenu(false)
                menuHide()
              }
              if (event.nativeEvent.contentOffset.y>10&&(show_options)){
                optionsHide()
                setShowOptions(false)
              }
            }}
            data={getRandomNearby()}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => <NearbyItem item={item} key={item.id}/>}
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