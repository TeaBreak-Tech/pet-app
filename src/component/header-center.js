// Imports
import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
} from "react-native";

// Context
import { connect } from 'react-redux'
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Tools
import judgePath from '../tools/path_judger'


// Styles
import style from '../appearance/styles/style-header'

class HeaderCenter extends Component{
    static contextType = ThemeContext;

    constructor(props){
        super(props);
        this.state={search_from:'Discover'}
    }

    getTabItems(type){
        switch(type){
            case 'community':
                return([
                    {key:'发现',to:'Discover'},
                    {key:'关注',to:'Follow'},
                    {key:'论坛',to:'Discussion'},
                ])
            case 'find':
                return([
                    {key:'资讯',to:'Feed'},
                    {key:'附近',to:'Nearby'},
                ])
            case 'searching':
                return([
                    {key:'全部',to:'All-Search-Results'},
                    {key:'动态',to:'All-Search-Results'},
                    {key:'论坛',to:'All-Search-Results'},
                    {key:'用户',to:'All-Search-Results'},
                    {key:'资讯',to:'All-Search-Results'},
                    {key:'附近',to:'All-Search-Results'},
                ])
            default:
                return([
                    {key:'发现',to:'Discover'},
                    {key:'关注',to:'Follow'},
                    {key:'论坛',to:'Discussion'},
                ])
        }
    }
    
    render(){
        let theme = this.context;
        settings = judgePath(this.props.path)
        searching = settings.searching
        type = settings.header_type
        search_bar_shown = settings.search_bar_shown
        tab_bar_shown = settings.tab_bar_shown
        tab_item=this.getTabItems(type)
        return(
            <View style={style.center_container}>

                {/* 搜索框及取消按钮 */}
                {search_bar_shown?
                <View style={style.searching_bar_container}>
                    {/* 搜索框 */}
                    <TextInput
                        ref='input'
                        style={[
                            // 搜索框的静态样式
                            searching?
                                style.searcing_bar_searching
                                :style.searcing_bar,
                            // 搜索框颜色跟随主题
                            {backgroundColor:theme.background_emphasis,color:theme.basic_dark}
                        ]}
                        // 将搜索框的信息存入 state
                        onChangeText={(text) => this.setState({text})}
                        // 默认内容
                        defaultValue=""
                        placeholder="搜索"

                        // 搜索栏获取焦点时
                        onFocus={()=>{
                            // 如果不在搜索状态时获取焦点，则将来源路径存储到state
                            if(!searching){this.setState({search_from:this.props.path})}
                            // 导航到搜索界面
                            this.props.navigation.navigate('Search');
                        // 当搜索栏失去焦点时不处理
                            
                    }}/>

                    {/* 取消按钮 */}
                    {searching? // 搜索时显示
                    <TouchableOpacity 
                        onPress={() => {    // 点击时
                            // 导航回到主界面
                            // 先导航回‘寻找’主界面避免寻找界面出错
                            this.props.navigation.navigate('Feed');
                            this.props.navigation.navigate(this.state.search_from);
                            // 搜索框释放焦点
                            this.refs.input.blur()}}>

                        <View style={[
                            style.cancel_button,     // 静态样式
                            {backgroundColor:theme.white}       // 动态修改颜色     
                        ]}>
                            <Text style={[
                                style.cancel_button_text,
                                {color:theme.text}
                            ]}>取消</Text>
                        </View>

                    </TouchableOpacity>
                    :null}
                </View>
                :null}

                {/* 自定义样式的辅助导航,循环列出选项 */}
                {tab_bar_shown?
                <View style={style.tab_bar_container}>
                    {tab_item.map((item,index)=>{
                        return(
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate(item.to)}} key={index}>
                            <View style={style.tab_bar_item_container}>
                                <View style={[
                                    style.tab_bar_item,
                                    {borderBottomColor:path==item.to?theme.alert:'transparent'}
                                ]}>
                                    <Text style={[
                                        style.tab_bar_item_text,
                                        {color:path==item.to?theme.text_emphasis:theme.text}
                                    ]}>{item.key}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )})}
                </View>
                :null}

            </View>
        )
    }
}

// 此类与 Redux 关联，拥有属性：this.props.path
export default connect ((state) => {return{path: state.nav.path}})(HeaderCenter)