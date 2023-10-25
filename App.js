import React, { useState, useEffect } from 'react';
import { ActivityIndicator, PermissionsAndroid, StyleSheet, View, Alert } from 'react-native';
import Tabs from './src/components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import { REACT_APP_Weather_API_KEY } from '@env';
import { useGetWeather } from './hooks/useGetWeather';
import Erroritem from './src/components/Erroritem';
import Button from './src/demonstration/Button';
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const App = () => {

const [loading,error,weather] =useGetWeather()

  if (weather &&weather.list &&!loading)//if weather exists show the data otherwise show the activity loader
  {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

    return (
       <View style={styles.container}>
         {/* <Button/> */}
        {error? <Erroritem/>:<ActivityIndicator size={'large'} color={'lightblue'}/>}
      </View>
    );


};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
