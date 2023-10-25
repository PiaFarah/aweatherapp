import React from "react";
import { View, Text,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

const Icontext= (props) => {
    const {iconName,iconColor,bodyText,bodyTextStyles}=props
const {container,textThem} =styles
    return (
        <View style={container}>
         <Icon name={iconName} size={50} color={iconColor}/>
          <Text style={[textThem,bodyTextStyles]}>{bodyText}</Text>

        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
    },
    textThem:{
        fontWeight:'bold'
    }
    
})
export default Icontext;