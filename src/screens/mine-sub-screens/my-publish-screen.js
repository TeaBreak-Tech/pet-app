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
import MyPublishItem from '../../component/my-publish-item'
// Context
import { ThemeContext } from '../../appearance/theme/theme-context-provider';
// Style
import style from '../../appearance/styles/style-mine-screen'
// Tools
import { getRandomData } from '../../tools/random-data'

function MyPublishScreen() {

  const scrollAnim = useRef(new Animated.Value(0)).current;

  const [searching, setSearching] = React.useState(false);
  const [search_text, setSearchText] = React.useState("");

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
              focusable={this.state.crollable}
              spellCheck={false}
              placeholder="搜索我的发布"
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

  const space = () => (
    <ThemeContext.Consumer>
      {theme=>
        <View style={{height:10,backgroundColor:theme.background}}></View>
      } 
    </ThemeContext.Consumer>
  )

  return (
    <SectionList
        keyboardDismissMode="on-drag"
        renderSectionHeader={ ({ section: { title } })=> title===0 ? searchingBar() : space() }
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
          { useNativeDriver:false }
        )}
        sections={[ { title:0, data:[] } ,{ title:1, data:getRandomData() } ]}
        data={ getRandomData() }
        scrollEnabled={ this.state.scrollable }
        showsVerticalScrollIndicator={ true }
        renderItem={({ item, index }) => <MyPublishItem item={item} key={index}/> }
        keyExtractor={ item => item.id }
      >
      </SectionList>
    );
}
export default  MyPublishScreen