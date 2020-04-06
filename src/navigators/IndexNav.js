// 应用程序根导航

// 使用 Stack 的形式提供所有分支页面的导航

// 包裹于 App.js 的 SafeArea 中

import React, { Component } from 'react';
import { TextInput, Button, View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs'
import DiscoverScreen from '../screens/discover/DiscoverScreen'

const Stack = createStackNavigator();

export default class IndexNav extends Component {
    render() {return (
        <NavigationContainer>
        <Stack.Navigator>
            
            
            <Stack.Screen
                name="Main"
                component={MainTabs}
                options={{
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Profile"
                            color="#000000"/>
                    ),
                    headerTitle: () => (
                        <View  justifyContent='center' flexDirection='row' >
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Search"
                                color="#000000"/>
                        </View>
                    ),
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Pet"
                            color="#000000"/>
                    ),
                }}
            />
            <Stack.Screen name="Discover" component={DiscoverScreen} />
            
            
            
        </Stack.Navigator>
        </NavigationContainer>
    );}
}

function KnowledgeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Knowledge screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
