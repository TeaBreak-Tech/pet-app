// 分享贴详情
// Imports
import React from 'react';
import {
    ScrollView,
    ImageBackground,
    Text,
} from "react-native";

// Context
import { connect } from 'react-redux'
import {ThemeContext} from '../appearance/theme/theme-context-provider'

// Style

// Components
import Icon from '../component/icon'
import ProfileLine from '../component/profile-line'

// 从 Redux 获取 state 的方法 （用于获取登陆状态以决定是否允许互动）
const mapStateToProps = (state) => {
    return {
        text: state.text.text,
        isLogin: state.login.isLogin,
        path: state.nav.path,
    }
}

function MomentDetailScreen({route:{params:{item}}, isLogin}){

    console.log(item)

    return (
        <ThemeContext.Consumer>{theme=>
            <ScrollView>
                <ImageBackground
                    source={{ uri:item.images[0].uri}}
                    style={{height:500}}
                >
                    <Icon style={{position:'absolute',top:'4%',right:'4%'}}/>
                    <Icon style={{position:'absolute',bottom:'2%',left:'4%'}}/>
                    <Icon style={{position:'absolute',bottom:'2%',right:'4%'}}/>
                    <Icon style={{position:'absolute',bottom:'2%',right:'13%'}}/>
                </ImageBackground>
                <ProfileLine
                    user={item.author}
                    avator_radius={40}
                    style={{marginTop:10,marginLeft:10,marginRight:10}}
                    username_style={{fontSize:14}}
                    additional_text="2月"
                    show_follow_button
                />
                <Text style={{
                    margin:20,
                }}>
                    {item.text}
                </Text>

            </ScrollView>
        }</ThemeContext.Consumer>
        
    );
}

export default connect (mapStateToProps)(MomentDetailScreen)