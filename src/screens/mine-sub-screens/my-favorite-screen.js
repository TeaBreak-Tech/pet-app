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
    SectionList,
} from 'react-native'

// Children
import MyFavoriteItem from '../../component/my-favorite-item'
// Context
import { ThemeContext } from '../../appearance/theme/theme-context-provider';
// Style
import style from '../../appearance/styles/style-mine-screen'

// Tools
import { getRandomData } from '../../tools/random-data'

function MyFavoriteScreen() {

  const scrollAnim = useRef(new Animated.Value(0)).current;
  const barHeightAnim = scrollAnim.interpolate({inputRange:[0,60],outputRange:[60,0],extrapolate: "clamp"})
  const choiceHeightAnim = Animated.multiply(barHeightAnim,0.5)
  const choiceOpacityAnim = scrollAnim.interpolate({inputRange:[0,20],outputRange:[1,0],extrapolate: "clamp"})
  const [ type_text_shown, setTypeTextShown ] = React.useState(true)

  const [searching, setSearching] = React.useState(false);
  const [search_text, setSearchText] = React.useState("");
  
  const types = [
    {title:"动态",type:"moments"},
    {title:"论坛",type:"discussions"},
    {title:"设施",type:"facilities"},
  ]
  const [type, setType] = React.useState(null);
  const typeAnim = useRef(new Animated.Value(1)).current;

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

  const searchingBar = () => { return (
    <ThemeContext.Consumer>
      {theme=>
        <View style={{
          backgroundColor:theme.background
        }}>
          <Animated.View style={[style.search_bar_container,{
            height: 30,
            marginTop: 15,
            backgroundColor:theme.background_emphasis,
          }]}>
            <TextInput
              style={[
                {color:theme.text,includeFontPadding:false,textAlignVertical:'center'},
                searching?style.search_input_searching:style.search_input_unsearching,
              ]}
              focusable={this.state.scrollable}
              spellCheck={false}
              placeholder="搜索我的收藏"
              defaultValue={search_text}
              onChangeText={(text) => setSearchText(text)}
              onFocus={()=>{
                setSearching(true)
                if(!this.state.scrollable){
                  this.bounceUp()
                }
              }}
              onEndEditing={()=>{
                //Refresh the results
              }}
              returnKeyType="search"
            />
            {searching?
              <TouchableOpacity
                style={style.cancel_container}
                onPress={()=>{
                  setSearching(false)
                  setSearchText("")
                }}
              >
                <Text style={{color:theme.text,fontSize:17}}>取消</Text>
              </TouchableOpacity>:null}
          </Animated.View>
        </View>
      }
    </ThemeContext.Consumer>
  )}

  const selector = () => (
    <ThemeContext.Consumer>
      {theme=>
        <Animated.View
          style={{
            height:type==null?barHeightAnim:60,
            justifyContent:'center',
            backgroundColor:theme.background
          }}
        >
          <View style={{
            flexDirection:"row",
            marginHorizontal:17,
          }}>
            {types.map((item,index)=>{return(
              <Animated.View 
                style={{
                  flex:item.type==type?1:typeAnim,
                  marginHorizontal:3,
                  backgroundColor:theme.background_emphasis,
                  height:type===null?choiceHeightAnim:30,
                  borderRadius:10,
                }}
                key={index}
              >
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
                  }}
                >
                  {type==null?(
                    <Animated.Text 
                      style={{
                        color:theme.text,
                        fontSize:14,
                        opacity:choiceOpacityAnim,
                      }}
                    >
                      {item.title}
                    </Animated.Text>
                  ):(
                    item.type==type?(
                      <Text 
                        style={{
                          color:theme.text,
                          fontSize:14,
                        }}
                      >
                        已筛选：“{item.title}“，点击取消
                      </Text>
                    ):(null)
                  )}
                </TouchableOpacity>
              </Animated.View>
            )})}
          </View>
        </Animated.View>
      }
    </ThemeContext.Consumer>
  )

  return (
    <ThemeContext.Consumer>
      {theme=>
        <SectionList
          keyboardDismissMode="on-drag"
          renderSectionHeader={ ({ section: { title } })=> title===0 ? searchingBar() : selector() }
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
            { listener: (event) => { // 异步监听列表的滚动位置
                if ( event.nativeEvent.contentOffset.y>30&&type_text_shown ){ setTypeTextShown(false) }
                else if ( event.nativeEvent.contentOffset.y<30&&!type_text_shown ){ setTypeTextShown(true) }
              },
              useNativeDriver:false,
            }
          )}
          sections={[ { title:0, data:[] } ,{ title:1, data:getRandomData() } ]}
          data={ getRandomData() }
          scrollEnabled={ this.state.scrollable }
          showsVerticalScrollIndicator={ true }
          renderItem={({ item, index }) => <MyFavoriteItem item={item} key={index}/> }
          keyExtractor={ item => item.id }
        >
        </SectionList>
      }
    </ThemeContext.Consumer>
  );
}
export default  MyFavoriteScreen