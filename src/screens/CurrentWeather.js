import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Rowtext from '../components/Rowtext';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({weatherData}) => {
  const {wrapper,container,tempStyles,feels,highLowWrapper,highLow,bodyWrapper,descriptions,messages}=styles
  const {main:{temp,feels_like,temp_max,temp_min},weather}=weatherData
  console.log(weather)
  const weatherCondition=weather[0].main

  return (
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color={'white'} />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels Like ${feels_like}`}</Text>
        <Rowtext 
        message1={`High: ${temp_max}° `} 
        message2={`Low: ${temp_min}°`} 
        containerStyles={highLowWrapper} 
        message1styles={highLow} 
        message2styles={highLow}/>
      </View>
      <Rowtext message1={weather[0]?.description} message2={weatherType[weatherCondition]?.message} containerStyles={bodyWrapper} message1styles={descriptions} message2styles={messages}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  descriptions: {
    fontSize: 43,
    color: 'black',
  },
  messages: {
    fontSize: 25,
    color: 'black',
  },
});

export default CurrentWeather;
