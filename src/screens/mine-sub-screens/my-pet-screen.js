// Import
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native'
// Tools

getRandomData = () => {
    return new Array(100).fill('').map((item, index) => {
      return { id:index+1,title: 'Title ' + (index + 1) };
    });
};

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}
  
function MyPublishScreen() {
    return (
        <FlatList
            data={getRandomData()}
            scrollEnabled={this.state.scrollable}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
        />
    );
}
export default  MyPublishScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});