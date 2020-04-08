import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
} from "react-native";

import style_header from '../appearance/styles/style-header'

import {ThemeContext} from '../appearance/theme/theme-context-provider'


// 搜索框以及下面的导航按钮（暂且放在一起）

// 此类与 Redux 关联，拥有属性：this.props.path
export default connect (
    (state) => {return{path: state.nav.path}}
)(class SearchingBar extends Component{

    static contextType = ThemeContext;

    state={ text:''};
    
    render(){
        let theme = this.context;   // 从 ThemeContext 取出 theme 值
        width = Dimensions.get('window').width
        let path = this.props.path
        searching = path=='Community-Search'
                || path=='Pedia-Search'
        folded = path=='Pedia-Display'
                || searching
        return(
            <View style={[{width:width,alignItems: 'center'}]}>

                {/* 搜索框及取消按钮 */}

                {path=='Follow'         // 搜索框仅在这些页面显示
                || path=='Discover'
                || path=='Discussion'
                || folded
                ?<View style={{
                    bottom:folded? 7.5:20 ,     // 偏移量是动态的。 7.5 = 20-25/2，25是header缩短量
                    flexDirection:"row"}}>

                    {/* 搜索框 */}
                    <TextInput
                        ref='input'
                        style={[
                            // 搜索框的静态样式
                            searching?
                                style_header.searcing_bar_searching
                                :style_header.searcing_bar,
                            // 搜索框颜色跟随主题
                            {backgroundColor:theme.white,color:theme.basic_dark}
                        ]}
                        // 文字居中（跟样式表重复了）
                        //textAlign="center"
                        // 将搜索框的信息存入 state
                        onChangeText={(text) => this.setState({text})}
                        // 默认内容
                        defaultValue="搜点什么"

                        // 搜索栏获取焦点时
                        onFocus={()=>{
                            // 导航到搜索界面
                            this.props.navigation.navigate('Community-Search');
                        // 当搜索栏失去焦点时不处理
                            
                    }}/>

                    {/* 取消按钮 */}

                    {searching? // 搜索时显示
                    <TouchableOpacity 
                        onPress={() => {    // 点击时
                            // 导航回到主界面
                            this.props.navigation.navigate('Community-Display');
                            // 搜索框释放焦点
                            this.refs.input.blur()}}>

                        <View style={[
                            style_header.cancel_button,     // 静态样式
                            {backgroundColor:theme.white}       // 动态修改颜色     
                        ]}>
                            <Text style={[
                                style_header.cancel_button_text,    // 静态样式
                                {color:theme.basic_dark}                      // 动态设置字体颜色
                            ]}>返回</Text>
                        </View>

                    </TouchableOpacity>
                    :null}

                </View>:null}

                {/* 自定义样式的辅助导航 */}      
                {path=='Follow'             // 辅助导航仅在这些页面显示
                || path=='Discover'
                || path=='Discussion'?
                <View style={{height:0,/*borderColor:"black",borderWidth:1*/}}>
                    {/* 占位容器到底部的距离是 25，40-25=15 */}
                    <View style={{height:40 ,bottom:15,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Follow')}}>
                            <Text style={
                                // 根据是否被选中来渲染选项
                                path=="Follow"?
                                    style_header.tab_item_focused
                                    :style_header.tab_item
                            }> 关注 </Text>
                        </TouchableOpacity>

                        <Text style={style_header.tab_separator}>  |  </Text>
                                
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Discover')}}>
                            <Text style={
                                path=="Discover"?
                                    style_header.tab_item_focused
                                    :style_header.tab_item
                            }> 发现 </Text>
                        </TouchableOpacity>

                        <Text style={style_header.tab_separator}>  |  </Text>
                    
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Discussion')}}>
                            <Text style={
                                path=="Discussion"?
                                    style_header.tab_item_focused
                                    :style_header.tab_item
                            }> 论坛 </Text>
                        </TouchableOpacity>

                    {/* 包裹容器结束 */}
                    </View>
                {/* 占位容器结束 */}
                </View>:null}
                {/* 自定义样式的辅助导航结束 */}

            </View>
        )
    }
})