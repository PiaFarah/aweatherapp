import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const Erroritem =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.errormsg}>Sorry something went wrong</Text>
            <Icon name={'frown' } size={100} color={'white'}/>
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    },
    errormsg:{
        fontSize:30,
        color:'white',
        marginHorizontal:10,
        textAlign:'center'

    }


})
export default Erroritem;