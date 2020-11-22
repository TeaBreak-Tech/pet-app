import React from 'react'
import { Button, Text, View, ImageBackground } from 'react-native'

import { connect } from 'react-redux'
import { saveLoginState } from '../redux/action/login_actions'


const LoginScreen = ({saveLoginState, navigation}) => {
    const sampleLogin = () => {
        saveLoginState({
            user_name:"Tester",
            user_id:"1234567890",
            user_type:"管理员账号",
            user_signature:"这个人很懒，还没有设置个性签名",
            profile_picture_uri:"http://106.52.96.163/img/app/profile_1.jpg",
        })
        navigation.goBack()
        alert("成功登陆")
    }

    return (
        <View>
            <ImageBackground style={{width:'100%',height:'100%'}} source={require('../appearance/assets/img/login_bg.jpg')}>
                <Text>Login</Text>
                <Button onPress={sampleLogin} title="Sample Login" />
            </ImageBackground>
        </View>
    )
}

export default connect (state=>({ isLogin:state.login.isLogin, user:state.login.user }),{saveLoginState}) (LoginScreen)