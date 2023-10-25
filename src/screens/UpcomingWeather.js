import React from 'react'
import {Image,ImageBackground, SafeAreaView, StyleSheet, FlatList, View, StatusBar} from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import Listitem from '../components/Listitem';


const UpcomingWeather = ({weatherData}) =>{
    const renderItem = ({item}) => (
        <Listitem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
    )
    const {container, image}=styles
return (
    <SafeAreaView style={container}>
    <ImageBackground source={require('../../assets/milky-way-5295155_1280.jpg')} style={image}>
    <FlatList 
    data={weatherData}
    renderItem={renderItem}
    keyExtractor={(item)=>item.dt_txt}/>
    </ImageBackground>
    </SafeAreaView>
)
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        marginTop:0,
        backgroundColor: 'royalblue',
    },

image:{
   flex:1,
}
})
export default UpcomingWeather;