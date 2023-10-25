import React from 'react';
import CurrentWeather from "../screens/CurrentWeather"
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather'
import { weatherType } from '../utilities/weatherType';
const Tab = createBottomTabNavigator() //initinalize tab object to use

const Tabs=({weather}) => {
    console.log(weather)
    return (
        <Tab.Navigator
         screenOptions={{
          tabBarActiveTintColor:'darkblue',
          tabBarInactiveTintColor:'#7FB3D5',
          tabBarStyle:{
            backgroundColor:'lightblue',

          },
          headerStyle:{
            backgroundColor:'lightblue',
          },
          headerTitleStyle:{
            fontWeight:'bold',
            fontSize:25,
            color:'darkblue',},
          headerTitleAlign:'center'}}>
        <Tab.Screen name={'Current'} 
        options={{tabBarIcon: ({ focused })=>
        <Icons name={'droplet'} size={25} color={focused?'darkblue':'#7FB3D5'}/>}}>
        {()=><CurrentWeather weatherData={weather.list[0]}/>}

        </Tab.Screen>
        <Tab.Screen name={'Upcoming'}
          options={{tabBarIcon:({focused})=> 
          <Icons name={'clock'} size={25} color={focused?'darkblue':'#7FB3D5'}/>}}>
          {() => <UpcomingWeather weatherData={weather.list}/>}
          </Tab.Screen>
        <Tab.Screen name={'City'} options={{tabBarIcon:({focused})=><Icons name={'home'} size={25} color={focused?'darkblue':'#7FB3D5'}/>}}
        >
        {()=><City weatherData={weather.city}/>}
        </Tab.Screen>
      </Tab.Navigator>
      
    )
}

export default Tabs;
