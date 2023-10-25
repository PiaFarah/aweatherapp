import React from 'react';
import { View, Text } from 'react-native';


const Rowtext = (props) =>{
const {message1,message2,containerStyles,message1styles,message2styles}=props
    return (
        <View style={containerStyles}>
        <Text style={message1styles}>{message1} </Text>
        <Text style={message2styles}>{message2}</Text>
      </View>
    )

}


export default Rowtext;