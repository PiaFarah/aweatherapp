import React from "react";
import { View, TouchableOpacity,Text,StyleSheet} from 'react-native';
const Button=()=>{
    const onpress=()=>{
        console.log('press')
    }
    return(
        <TouchableOpacity style={styles.container} onPress={onpress}>
            <Text style={styles.buttontext}>Hello</Text>
        </TouchableOpacity>
    )


}
const styles=StyleSheet.create({
    container:{
        elevation:8,
        backgroundColor:'blue',
        borderRadius:10,
        padding:5,
    },
    buttontext:{
        fontSize:15,
        color:'white',
        alignSelf:'center'
    }

})
export default Button;