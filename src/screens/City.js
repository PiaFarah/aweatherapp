import React from "react";
import { SafeAreaView,Text,ImageBackground,StyleSheet, StatusBar,View } from "react-native";
import Icontext from "../components/Icontext";
import moment from 'moment'
const City = ({weatherData}) =>{
    const {container,cityName,cityText,countryName,populationwrapper,populationtxt,risesetwrap,risettext,imageLayout,rowlayout}=styles
    const{name,country,population,sunrise,sunset}=weatherData
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/cityBackground.jpg')} style={imageLayout}>
                <Text style={[cityName,cityText]}>{name}</Text>
                <Text style={[countryName,cityText]}>{country}</Text>
            <View style={[populationwrapper,rowlayout]}>
            <Icontext iconName={'user'} iconColor={'lightblue'} bodyText={`Population: ${population}`} bodyTextStyles={populationtxt}/>
            </View>
            <View style={[risesetwrap,rowlayout]}>
            <Icontext iconName={'sunrise'} iconColor={'white'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={risettext}/>
            <Icontext iconName={'sunset'} iconColor={'white'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={risettext}/>

            </View>
            </ImageBackground>
        </SafeAreaView>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        margintop:StatusBar.currentHeight ||0
    },
    imageLayout:{
        flex:1
    },
    cityName:{
     fontSize:40
    },
    countryName:{

        fontSize:30
    },
    cityText:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:40,
        fontWeight:'bold',
        color:'white'

    },
    populationwrapper:{
       justifyContent:'center',
       marginTop:30,
    },
    populationtxt:{
        fontSize:25,
        marginLeft:7.5,
        color:'white',
    },
    risesetwrap:{

        justifyContent:'space-around',
        marginTop:30,
         
    },
    risettext:{
        fontSize:20,
        color:'white',

    },
    rowlayout:{
        flexDirection:'row',
        alignItems:'center'
    }
})
export default City;