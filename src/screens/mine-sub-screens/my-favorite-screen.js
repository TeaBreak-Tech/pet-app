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
import MyFavoriteItem from '../../component/my-favorite-item'
// Context
import { ThemeContext } from '../../appearance/theme/theme-context-provider';
// Style
import style from '../../appearance/styles/style-mine-screen'

getRandomData = () => {
    return new Array(100).fill('').map((item, index) => {
      return {
        id:index+1,
        title: '标题' + (index + 1),
        images:[
          {id:1,uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590150539755&di=5a30b5270fcf91969102730c5ea7103e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F09%2F20180309203626_qgnvp.thumb.700_0.jpeg"},
        ],
        detail: '这里是简短的内容',
      };
    });
};

function MyFavoriteScreen() {

    const [show_search, setShowSearch] = React.useState(false);
    const [searching, setSearching] = React.useState(false);
    const [search_text, setSearchText] = React.useState("");
    const barAnim = useRef(new Animated.Value(0)).current;
    const marginAnim = Animated.multiply(barAnim,0.5)
    const types = [
      {title:"动态",type:"moments"},
      {title:"论坛",type:"discussions"},
      {title:"设施",type:"facilities"},
    ]
    const [type, setType] = React.useState(null);
    const typeAnim = useRef(new Animated.Value(1)).current;
    const typeHideAnim = useRef(new Animated.Value(30)).current;
    const [show_types, setShowTypes] = React.useState(true);
    const typeHorizMarginAnim = Animated.multiply(typeAnim,5)
    const typeVertMarginAnim = Animated.multiply(typeHideAnim,0.5)

    const barIn = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      setShowSearch(Animated.spring(barAnim, {
        toValue: 30,
        speed:25,
        useNativeDriver:false,
      }).start(()=>{setShowSearch(true)}));
    };
    const barOut = () => {
      // Will change fadeAnim value to 0 in 5 seconds
      Animated.spring(barAnim, {
        toValue: 0.3,
        speed:25,
        useNativeDriver:false,
      }).start();
    };
    const tabFocus = () => {
      // Will change fadeAnim value to 0 in 5 seconds
      Animated.spring(typeAnim, {
        toValue: 0,
        speed:25,
        useNativeDriver:false,
      }).start();
    };
    const tabUnfocus = () => {
      // Will change fadeAnim value to 0 in 5 seconds
      Animated.spring(typeAnim, {
        toValue: 1,
        speed:25,
        useNativeDriver:false,
      }).start(()=>{});
    };
    const hideTypes = () => {
      Animated.spring(typeHideAnim, {
        toValue: 0,
        speed:25,
        useNativeDriver:false,
      }).start(()=>{});
    }
    const showTypes = () => {
      Animated.spring(typeHideAnim, {
        toValue: 30,
        speed:25,
        useNativeDriver:false,
      }).start(()=>{});
    }


    return (
      <ThemeContext.Consumer>
        {theme=>
        <View>
        
          <View style={{zIndex:2}}>
            <View style={{
              backgroundColor:theme.background
            }}>
            <Animated.View style={[style.search_bar_container,{
              height: barAnim,
              marginTop: marginAnim,
              backgroundColor:theme.background_emphasis,
            }]}>
              {show_search?<TextInput
                style={[
                  searching?style.search_input_searching:style.search_input_unsearching,
                  {color:theme.text}
                ]}
                spellCheck={false}
                placeholder="搜索我的收藏"
                defaultValue={search_text}
                onChangeText={(text) => setSearchText(text)}
                onFocus={()=>{
                  setSearching(true)
                }}
                onEndEditing={()=>{
                  //Refresh the results
                }}
                //clearButtonMode='while-editing'
                returnKeyType="search"
              ></TextInput>:null}
              {show_search?searching?
                <TouchableOpacity
                  style={style.cancel_container}
                  onPress={()=>{
                    setSearching(false)
                    setShowSearch(false)
                    barOut()
                    setSearchText("")
                  }}
                >
                  <Text style={{color:theme.text,fontSize:17}}>取消</Text>
                </TouchableOpacity>:null:null}
            </Animated.View>
            </View>
            <View style={{
              height:0,
                    //backgroundColor:"transparent"//theme.background
                  }}>
              <Animated.View style={{
                    flexDirection:"row",
                    marginLeft:17,
                    marginRight:17,
                    marginTop:typeVertMarginAnim,
                    marginBottom:typeVertMarginAnim,
                    
              }}>
                {types.map((item,index)=>{return(
                  <Animated.View style={{
                    flex:item.type==type?1:typeAnim,
                    //width:typeAnim,
                    backgroundColor:theme.background_emphasis,
                    height:typeHideAnim,
                    borderRadius:10,
                    marginLeft:item.type==type?5:typeHorizMarginAnim,
                    marginRight:item.type==type?5:typeHorizMarginAnim,
                  }}
                  key={index}>
                    <TouchableOpacity 
                      style={{
                        flex:1,
                        alignItems:"center",
                        justifyContent:"center"
                      }}
                      onPress={()=>{
                        if (type!=item.type){
                          setType(item.type)
                          tabFocus()
                        }else{
                          tabUnfocus()
                          setType(null)
                        }
                        
                    }}>
                      {type==null?<Text style={{color:theme.text,
                        fontSize:14,}}>{item.title}</Text>:
                      item.type==type?<Text style={{
                        color:theme.text,
                        fontSize:14,
                      }}>已筛选：“{item.title}“，点击取消</Text>:null}
                    </TouchableOpacity>
                  </Animated.View>
                )})}
              </Animated.View>
            </View>
          </View>
        <View style={{zIndex:1}}>
        <FlatList
            ListHeaderComponent={()=><View style={{height:60,backgroundColor:theme.background}}></View>}
            //onRefresh={()=>{alert("refresh")}}
            //refreshing={true}
            //zoomScale={2}
            onScroll={(event)=>{
              //console.log(event.nativeEvent.contentOffset.y)
              if(event.nativeEvent.contentOffset.y<-70&&(!show_search)){
                barIn()
              }else if (event.nativeEvent.contentOffset.y>10&&(show_search)){
                setShowSearch(false)
                barOut()
              }
              if(event.nativeEvent.contentOffset.y>35&&show_types&&(type==null)){
                hideTypes()
                setShowTypes(false)
              }else if (event.nativeEvent.contentOffset.y<30&&(!show_types)&&(type==null)){
                showTypes()
                setShowTypes(true)
              }
            }}
            data={getRandomData()}
            scrollEnabled={this.state.scrollable}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => <MyFavoriteItem item={item} key={item.id}/>}
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
export default  MyFavoriteScreen