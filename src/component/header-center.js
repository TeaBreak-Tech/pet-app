/* 页头中间部分：搜索框、导航栏 */

/* 因为需要动态获取搜索框焦点，所以使用 Class 组件 */

// Imports
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";

// Context
import { ThemeContext } from '../appearance/theme/theme-context-provider'

// Tools
import { isSearching, getTabItems } from '../tools/path_judger'

// Styles
import style from '../appearance/styles/style-header'

class HeaderCenter extends Component{

    static contextType = ThemeContext;
    
    constructor(props){
        super(props);
        this.state={
            search_from:'Discover',
            text:null,
        }
    }
    
    render(){

        let theme = this.context;
        let searching = isSearching(this.props.path)
        let shown = this.props.main_path!="Mine"

        return shown?(

            <View style={style.center_container}>
                <View style={style.searching_bar_container}>
                    <TextInput
                        ref='input'
                        placeholder="搜索"
                        style={{
                            color:theme.basic_dark,
                            backgroundColor:theme.background_emphasis,
                            ...searching? style.searcing_bar_searching:style.searcing_bar,
                        }}
                        onChangeText={text => this.setState({text})}
                        onFocus={()=>{
                            if(!searching){this.setState({search_from:this.props.path})} // 如果不在搜索状态时获取焦点，则将来源路径存储到state
                            this.props.navigation.navigate('Search');
                        }}
                    />

                    {searching?
                        <TouchableOpacity
                            style={{ backgroundColor:theme.white, ...style.cancel_button }}
                            onPress={() => {
                                this.props.navigation.navigate('Feed'); // 因为搜索页放在了寻找板块，所以先导航回‘寻找’板块避免寻找界面出错
                                this.props.navigation.navigate(this.state.search_from);
                                this.refs.input.blur()
                            }}
                        >
                            <Text style={{ color:theme.text, ...style.cancel_button_text }}>取消</Text>
                        </TouchableOpacity>
                    :null}
                </View>

                <ScrollView
                    horizontal
                    scrollEnabled={searching}
                    style={style.tab_bar_container}
                    contentContainerStyle={{alignItems:"center", justifyContent:"space-between"}}
                >
                    {getTabItems(path).map((item,index)=>
                        <TouchableOpacity
                            style={style.tab_bar_item_container}
                            onPress={()=>{this.props.navigation.navigate(item.to)}}
                            key={index}
                        >
                            <View style={{ borderBottomColor:path==item.to?theme.alert:'transparent', ...style.tab_bar_item }}>
                                <Text style={{ color:path==item.to?theme.text_emphasis:theme.text, ...style.tab_bar_item_text }}>{item.key}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>

            </View>
        ):null
    }
}

export default HeaderCenter