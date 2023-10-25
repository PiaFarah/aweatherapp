import { useState, useEffect } from 'react';
import { PermissionsAndroid, View, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { REACT_APP_WEATHER_API_KEY } from '@env';
import GetLocation from 'react-native-get-location'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


export const useGetWeather=()=>{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather,setWeather]=useState([])
  
    const [lat,setLat]=useState([])
    const [lon,setLon]=useState([])

    const fetchWeatherdata= async()=>{
        try{
    
          const res=await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`)
          const data=await res.json()
          setWeather(data)
       
        } catch(err)
        {
          setError('Could not fetch weather')
        }
        finally{
          setLoading(false)  //this will execute when try catch ends
    
        }
     
      }
    //   useEffect(() => {
    //     const requestLocationPermission = async () => {
    //       try {
    //         const { granted } = await PermissionsAndroid.request(
    //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //         );
    //         if (granted===PermissionsAndroid.RESULTS.GRANTED) {
    //           let location = await Geolocation.getCurrentPosition({});
    //           setLat(location.coords.latitude);
    //           setLon(location.coords.longitude)
    //           await fetchWeatherdata()
    //         } else {
    //           Alert.alert("Location Permission Denied", "App needs access to your location.");
    //           setError('Permission to access location denied');
          
    //         }
    //         setLoading(false); // Set loading state after checking the permission
    //       } catch (err) {
    //         console.warn(err);
    //         setLoading(false); // Handle loading state even in case of errors
    //       }
    //     };
    
    //     requestLocationPermission();
    //   }, [lat,lon]); // Empty dependency array means this effect runs once after the initial render
    //[lat,lon] rerun when we change location
    useEffect(() => {
        checkLocationPermission();
      }, []);
    
      async function checkLocationPermission() {
        let granted = await getLocalPermission();
        console.log(granted, '==permission');
        if (granted) {
          try {
            const location = await getCurrentLocation();
            setLat(location.latitude);
            setLon(location.longitude);
            console.log(lat)
            await fetchWeatherdata();
          } catch (error) {
            console.error('Error getting location: ', error);
          }
          finally{
            setLoading(false)  //this will execute when try catch ends
      
          }
        }
    
      }
    
      async function getLocalPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
          console.error(err);
          return false;
        }
      }
    
      function getCurrentLocation() {
        return new Promise((resolve, reject) => {
          GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
          })
            .then(location => {
              resolve(location);
            })
            .catch(error => {
              reject(error);
            });
        });
      }
    return [loading,error,weather] //return the states that will be needed by app component
}