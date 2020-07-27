

// Imports
import React from 'react';
import { TouchableOpacity, View, Image } from "react-native";


const Avator = ({ user, action, radius }) => {

    radius = radius? radius : 15
    empty = user? false:true
            
    return(
        <View>
            {empty?(
                <View style={{backgroundColor:'white',height:radius*2,width:radius*2,borderRadius:radius,borderWidth:1}}></View>
            ):(
                <Image source={{ uri: user.profile_picture_uri }} style={{backgroundColor:'white',height:radius*2,width:radius*2,borderRadius:radius}}></Image>
            )}
        </View>
    )
}

export default Avator