
// Imports
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Switch,
} from "react-native";

// Context
import { connect } from 'react-redux'
import { ThemeContext } from '../appearance/theme/theme-context-provider'

// Style
import style from '../appearance/styles/style-publish-edit'

// 从 Redux 获取 state 的方法 （用于获取登陆状态以决定是否添加登出键）
const mapStateToProps = (state) => {
    return {
        text: state.text.text,
        isLogin: state.login.isLogin,
        path: state.nav.path,
    }
}

//Children
import Icon from '../component/icon'

// 输出主页面
// 将获取state的方法和dispatch的方法与输出类关联
function PublishEidtScreen({navigation}){
    const [alarm, setAlarm] = React.useState(false);
    const [theme_name, setThemeName] = React.useState(true);

    return (
        <ThemeContext.Consumer>
            {theme=>
            <ScrollView>
                <View style={[style.edit_title_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <Text style={style.edit_title_text}>
                            编辑内容
                    </Text>
                </View>
                <View style={[style.edit_content_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <TextInput
                        style={style.text_editor}
                        placeholder="写点什么吧"
                        multiline={true}
                    ></TextInput>
                </View>
                <View style={[style.add_label_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <TouchableOpacity style={style.add_label_press}>
                        <Text style={style.title_text}>
                            # 添加标签
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={[style.add_picture_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <Text style={style.add_picture_title}>
                        添加图片/视频 （2/9）
                    </Text>
                    <ScrollView style={style.picture_list} horizontal={true}>
                        <TouchableOpacity style={style.picture_container}></TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={[style.add_location_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <Icon style={style.add_location_icon} radius={20}></Icon>
                    <Text style={style.title_text}>
                        添加坐标
                    </Text>
                </View>
                <View style={[style.my_draft_container,{backgroundColor:theme.background,borderTopColor:theme.background_emphasis}]}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon style={style.add_location_icon} radius={20}></Icon>
                        <Text style={style.title_text}>
                            我的草稿箱
                        </Text>
                    </View>
                    <View style={style.my_draft_count_container}>
                        <Text style={style.my_draft_count_text}>2</Text>
                    </View>
                </View>

                <View style={style.buttons_container}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.button_text}>去发布 Go！</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.button_text}>保存至草稿箱</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:100}}></View>
            </ScrollView>
            }
        </ThemeContext.Consumer>
        
    );
}

export default connect (mapStateToProps)(PublishEidtScreen)


