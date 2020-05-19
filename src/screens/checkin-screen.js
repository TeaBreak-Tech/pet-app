// 设置页首页

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableHighlight,
} from "react-native";

// 从 Redux 获取 state 的方法 （用于获取登陆状态以决定是否添加登出键）
const mapStateToProps = (state) => {
    return {
        text: state.text.text,
        isLogin: state.login.isLogin,
        path: state.nav.path,
    }
}

// 输出主页面
// 将获取state的方法和dispatch的方法与输出类关联
export default connect (
    mapStateToProps
)(class CheckinScreen extends Component {

    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        
        const { text,isLogin,path } = this.props;

        return (
            <View style={{ marginTop: 22 }}>
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  alert("Modal has been closed.");
                }}
              >
                <View style={{ marginTop: 22 }}>
                  <View>
                    <Text>Hello World!</Text>
      
                    <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}
                    >
                      <Text>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
      
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <Text>Show Modal</Text>
              </TouchableHighlight>
            </View>
        );
    }
})




