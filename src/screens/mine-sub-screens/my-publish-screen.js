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
import MyPublishItem from '../../component/my-publish-item'
// Context
import { ThemeContext } from '../../appearance/theme/theme-context-provider';
// Style
import style from '../../appearance/styles/style-mine-screen'

getRandomData = () => {
    return new Array(10).fill('').map((item, index) => {
      return {
        id:index+1,
        title: 'Title ' + (index + 1),
        images:[
          {id:1,uri:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590150539755&di=5a30b5270fcf91969102730c5ea7103e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F09%2F20180309203626_qgnvp.thumb.700_0.jpeg"},
        ],
        detail: 'foiqmf pmql;mp 3mo ip1mp3 1m 3fk1m ,fnjhs oudgo nekdmk amfie qmv vqeq feq hdionoiq\nfmkpqmpkes  dmsakmq da.',
      };
    });
};

function Item({ title }) {
    return (
      <View style={styles.item} key={title}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}

function MyPublishScreen() {

    const [show_search, setShowSearch] = React.useState(false);
    const [searching, setSearching] = React.useState(false);
    const [search_text, setSearchText] = React.useState("");
    const barAnim = useRef(new Animated.Value(0)).current;
    const marginAnim = Animated.multiply(barAnim,0.5)

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
        toValue: 0,
        speed:25,
        useNativeDriver:false,
      }).start();
    };

    return (
      <View>
        <ThemeContext.Consumer>
          {theme=>
          <View style={{
            backgroundColor:theme.background
          }}>
            <Animated.View style={[style.search_bar_container,{
              height: barAnim,
              marginTop: marginAnim,
              marginBottom: marginAnim,
              backgroundColor:theme.background_emphasis,
            }]}>
              {show_search?<TextInput
                style={[
                  searching?style.search_input_searching:style.search_input_unsearching,
                  {color:theme.text}
                ]}
                spellCheck={false}
                placeholder="搜索我的发布"
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
          } 
        </ThemeContext.Consumer>
        <FlatList
            ListHeaderComponent={()=>(
              <ThemeContext.Consumer>
                {theme=>
                  <View style={{height:10,backgroundColor:theme.background}}></View>
                } 
              </ThemeContext.Consumer>
            )}
            //onRefresh={()=>{alert("refresh")}}
            //refreshing={true}
            //zoomScale={2}
            onScroll={(event)=>{
              //console.log(event.nativeEvent.contentOffset.y)
              if(event.nativeEvent.contentOffset.y<=0&&(!show_search)){
                barIn()
              }else if (event.nativeEvent.contentOffset.y>10&&(show_search)){
                setShowSearch(false)
                barOut()
              }
            }}
            data={getRandomData()}
            scrollEnabled={this.state.scrollable}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => <MyPublishItem item={item} key={item.id}/>}
            keyExtractor={item => item.id}
        >
        </FlatList>
      </View>
    );
}
export default  MyPublishScreen