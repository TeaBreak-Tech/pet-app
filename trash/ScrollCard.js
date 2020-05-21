import React from "react";
import PropTypes from 'prop-types';
import { Text,View, Dimensions, PanResponder, Animated } from "react-native";


class MessageScreen extends React.Component {


    static defaultProps = {
        default_blockHeight: 800,
        default_backgroundHeight: 350,
        default_coverHeight: 100,
        default_tabRadius: 20,
    }
    static propTypes = {
        set_blockHeight : PropTypes.number ,
        set_backgroundHeight: PropTypes.number,
        set_coverHeight: PropTypes.number,
        set_tabRadius: PropTypes.number,
        renderContent: PropTypes.func,
    }
    
    // 可存取的 State 变量
    state = {
        record1: 0 ,// 在 State 中将 record 定义为零，用于记录累计的滑动量
        record2: 0 ,
        pan2:new Animated.Value(0),
        blockHeight: this.props.set_blockHeight,
        backgroundHeight: this.props.set_backgroundHeight,
        coverHeight: this.props.set_coverHeight,
        tabRadius: this.props.set_tabRadius,
        content:(this.props.renderContent)
    };

     
    componentWillMount() {

      // 注册手势响应器 1 - for 滑动板块
      this._panResponder = PanResponder.create({
          
          // 组件会响应手势
          onMoveShouldSetPanResponder: () => true,

          // 当手指开始拖拽，反复执行此函数
          
          onPanResponderMove: (event, gestureState)=>{
            console.log('Touching')
            
            // 板块和内容都可以动的区间：
            if (-this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius
              <(this.state.record2+gestureState.dy)//如果内容拉动后的位置在顶部以下
            &&(this.state.record2+gestureState.dy)<100){//并且内容拉动后的位置在最底部之上

              n = this.state.record1+gestureState.dy // 拖拽过程中用 n 不断记录板块位置
              m = this.state.record2+gestureState.dy // 拖拽过程中用 m 不断记录内容位置
              if (n!=m){n=m}
              this.state.pan=new Animated.Value(n)
              this.state.pan2=new Animated.Value(m)
              this.setState({
                style:{top: this.state.pan}, // 拖拽过程中不断重设 top值，使之刷新
              })

            // 板块到顶，仅内容可以拖拽的时候
            }else if((-this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius)
            >=(this.state.record2+gestureState.dy)){//如果内容拉动后的位置(m)已经超过顶部
              if (n!=-this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius){
                n=-this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius
                this.state.pan=new Animated.Value(n)
                this.setState({
                  style:{top: this.state.pan}, // 拖拽过程中不断重设 top值，使之刷新
                })
              }
              m = this.state.record2+gestureState.dy // 拖拽过程中用 m 不断记录内容位置
              this.state.pan2=new Animated.Value(m)
              this.setState({
                style:{top: this.state.pan}, // 拖拽过程中不断重设 top值，使之刷新
              })
            }

            console.log('n: ',parseInt(n),
            '\tdy: ',parseInt(gestureState.dy),
            '\tRecord1: ',parseInt(this.state.record1),
            '\tRecord2: ',parseInt(this.state.record2),
            '\tm: ',parseInt(m))
          },


          // 当拖拽结束后将位置计入 record，执行惯性动画，再计入 record
          onPanResponderRelease: (event, gestureState) => {
            console.log('Removing Finger')

            // 过度下拉，用弹性动画弹回原位
            if (m>0){   //也可以用m来判断 
              console.log('m>0,弹回原位')
              Animated.spring(this.state.pan, {
               toValue: 0,
               speed: 1
              }).start(()=>{this.state.pan=new Animated.Value(n)});
              Animated.spring(this.state.pan2, {
                toValue: 0,
                speed: 1
               }).start(()=>{this.state.pan2=new Animated.Value(n)});
              n=-this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius
              n=0
              m=0

            // 接近顶部，用弹性动画弹至顶位
            }else if (-this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius<n&&n<-150){//用m会导致错位的时候无法处理
              console.log('Bounce Back!')
              Animated.spring(this.state.pan, {
               toValue: -this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius,
               speed: 10,
              }).start(()=>{this.state.pan=new Animated.Value(n)});
              Animated.spring(this.state.pan2, {
                toValue: -this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius,
                friction: 200,
               }).start(()=>{this.state.pan2=new Animated.Value(m)});
              n=-this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius
              m=-this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius


            // 超过顶部，弹性动画弹回顶位
            }else if (n<-this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius){
              Animated.spring(this.state.pan, {
                toValue: -this.state.backgroundHeight+this.state.coverHeight+this.state.tabRadius,
                friction: 200,
               }).start(()=>{this.state.pan=new Animated.Value(n)});
            }
            
              
            
            
            this.state.record1 = n
            this.state.record2 = m
            

            console.log('n: ',parseInt(n),
            '\tdy: ',parseInt(gestureState.dy),
            '\tRecord1: ',parseInt(this.state.record1),
            '\tRecord2: ',parseInt(this.state.record2),
            '\tm: ',parseInt(m))
          }
      });

      
  }
  render() {
      return (
        

          
          <View style={{flex:1,}}>


          <View style={{alignItems:"center",zIndex: 0,}}>

              {/*滑动板块*/}
              <Animated.View
                  name = 'a'
                  style={[this.state.style,{zIndex: 1,transform: [{translateY: -this.state.coverHeight}],alignItems:"center"}]}
                  {...this._panResponder.panHandlers} //将手势响应器1添加到滑动板块上
              >
                  <View style={{
                    zIndex: 1,
                    height:this.state.blockHeight,
                    backgroundColor:'#ffffff', 
                    width:Dimensions.get('window').width,
                    borderTopLeftRadius: this.state.tabRadius,
                    borderTopRightRadius: this.state.tabRadius,
                    transform: [{translateY: -this.state.tabRadius}]
                    }}>
                  </View>
                  
                  

              </Animated.View>
              {/*滑动板块结束*/}



              <Animated.View style={[this.state.style,{
                    zIndex: 3,
                    height:this.state.tabRadius,
                    backgroundColor:'#ffffff', 
                    width:Dimensions.get('window').width-2*this.state.tabRadius,
                    transform: [{translateY: -this.state.coverHeight-this.state.tabRadius}]
                    }]}
                  {...this._panResponder.panHandlers}>
              </Animated.View >



              <Animated.View style={[{
                    top: this.state.pan2,
                    zIndex: 2,
                    height:900,
                    backgroundColor:'#ffffff', 
                    width:Dimensions.get('window').width-2*this.state.tabRadius,
                    transform: [{translateY: -this.state.coverHeight-this.state.tabRadius}]}]}
                  {...this._panResponder.panHandlers}   // 将手势响应器2添加到内容板块上
              >
                
                {this.state.content()}

              </Animated.View>

              

              </View>
          </View>
      );
  }
}

export default MessageScreen;


