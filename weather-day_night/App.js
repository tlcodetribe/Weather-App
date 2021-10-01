import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchbleOpacity,
  FlatList,
  ImageBackground,
  Button,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const App = () => {
  const [forecast, setForecast] = useState('');
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');
  const [main, setMain] = useState('');
  const [sys, setSys] = useState('');
  const [city, setCity] = useState('Durban');

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9d61fecd65a28154c9af45f88a62dbc7`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecast(data);
        setWeather(data.weather);
        setMain(data.main);
        setSys(data.sys);

        console.log(data);
      });
  }, [city]);

  let imgCity = require('./img/joziSun.jpg'); 

  if (city === 'Kimberley') {
    imgCity = require('./img/sunrise111.jpg');
  } else if (city === 'Durban') {
    imgCity = require('./img/DbMoon.jpg');
  } else if (city === 'Cape Town') {
    imgCity = require('./img/CapeSun.jpg');
  } else if (city === 'Johannesburg') {
    imgCity = require('./img/joziSun.jpg');
  } else if (city === 'East London') {
    imgCity = require('./img/eas.jpg');
  } else if (city === 'Mafikeng') {
    imgCity = require('./img/mafikeng.jpg');
  } else if (city === 'Bloemfontein') {
    imgCity = require('./img/bloemfontein.jpg');
  }

  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds(); //To get the Current Seconds

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        
        <Text style={{color: '#fff', paddingTop: 5, fontSize: 16}}>Mobicel </Text>

        <Text style={{ backgroundColor: '#B1BBB6', width: 60, height: 15, marginTop:10, marginLeft: 40, borderRadius: 50, fontSize: 28}}>
          
        </Text>

        <Text style={{ backgroundColor: '#B1BBB6', width: 15, height: 15, marginTop:10, marginLeft: 80, borderRadius: 50, fontSize: 28}}> 
        </Text>

      </View>


      
      <View style={styles.form}>
        {city === 'Durban' ||
        city === 'Cape Town' ||
        city === 'Mafikeng' ||
        city === 'Bloemfontein' ? 
        (
          <ImageBackground style={styles.tinyLogo} source={imgCity}>

            <KeyboardAvoidingView
              behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}> 

              <TextInput
                style={styles.inputSearch}
                name="city"
                onSubmitEditing={(text) => {
                  setCity(text.target.value);
                }}
                placeholder="Search City..."
              />

            </KeyboardAvoidingView>



            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
                paddingTop: 60,
              }}>
              {forecast.name}
            </Text>



            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {sys.country}
            </Text>



            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
                paddingTop: 50,
              }}>

              {date}/{month}/{year}

            </Text>




          <View style={{ flexDirection: 'row' }}>
                <Fontisto name="sun" size={34} color="yellow" style={{
                  paddingLeft: 137,
                  paddingTop: 130,
                }} />

            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                textAlign: 'center',
                paddingLeft: 10,
                paddingTop: 135,
                fontWeight: 'bold',
              }}>

              { main.temp_max + ' °C'}

            </Text>
          </View>



          <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name="moon-full" size={34} style={{
                  color: 'grey',
                  paddingLeft: 137,
                  paddingTop: 10
                }} />

            <Text
              style={{
                fontSize: 18,
                paddingLeft: 10,
                paddingTop: 15,
                color: '#fff',
                fontWeight: 'bold',
              }}>

              { main.temp_min + ' °C'}

            </Text>
          </View>




            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                paddingLeft: 95,
                fontWeight: 'bold',
              }}>
              {'Humidity : ' + main.humidity}
            </Text>
          </ImageBackground>
        ) 
        







        :         //else then
        






        ( city === 'East London') ? 
        
        ( 
          <ImageBackground style={styles.tinyLogo} source={imgCity}>

            <KeyboardAvoidingView
              behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}>

              <TextInput
                style={styles.inputSearch}
                name="city"
                onSubmitEditing={(text) => {
                  setCity(text.target.value);
                }}
                placeholder="Search City..."
              />

            </KeyboardAvoidingView>



            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
                paddingTop: 60,
              }}>
              {forecast.name}
            </Text>



            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {sys.country}
            </Text>



            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
                paddingTop: 50,
              }}>
              {date}/{month}/{year}
            </Text>



            <View style={{ flexDirection: 'row' }}>
                <Fontisto name="sun" size={34} color="yellow" style={{
                  paddingLeft: 137,
                  paddingTop: 130,
                }} />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#fff',
                    paddingLeft: 10,
                    paddingTop: 135,
                    fontWeight: 'bold',
                  }}>
                  {main.temp_max + ' °C'}
                </Text>
            </View>



                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons name="moon-full" size={34} style={{
                    color: 'grey',
                    paddingLeft: 137,
                    paddingTop: 10
                  }} />

                  <Text
                    style={{
                      fontSize: 18,
                      color: '#fff',
                      paddingLeft: 10,
                      paddingTop: 15,
                      fontWeight: 'bold',
                    }}>

                    {main.temp_min + ' °C'}

                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 18,
                    paddingLeft: 95,
                    color: '#fff',
                    fontWeight: 'bold',
                  }}>

                  {'Humidity : ' + main.humidity}

                </Text>

          </ImageBackground>)
        
        
        




        
        :         //else
                      






        
        (
          <ImageBackground style={styles.tinyLogo} source={imgCity}>
            <KeyboardAvoidingView
              behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}>

              <TextInput
                style={styles.inputSearch}
                name="city"
                onSubmitEditing={(text) => {
                  setCity(text.target.value);
                }}
                placeholder="Search City..."
              />

            </KeyboardAvoidingView>



            <Text
              style={{
                fontSize: 28,
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
                paddingTop: 60,
              }}>
              {forecast.name}
            </Text>


            <Text
              style={{
                fontSize: 28,
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {sys.country}
            </Text>



            <Text
              style={{
                fontSize: 18,
                color: '#000',
                textAlign: 'center',
                fontWeight: 'bold',
                paddingTop: 50,
              }}>
              {date}/{month}/{year}
            </Text>



          <View style={{ flexDirection: 'row' }}>
                <Fontisto name="sun" size={34} color="yellow" style={{
                  paddingLeft: 137,
                  paddingTop: 80,
                }} />
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                paddingTop: 85,
                paddingLeft: 10,
                fontWeight: 'bold',
              }}>
              { main.temp_max + ' °C'}
            </Text>
          </View>



        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name="moon-full" size={34} style={{
                  color: 'grey',
                  paddingLeft: 137,
                  paddingTop: 10
                }} />

            <Text
              style={{
                fontSize: 18,
                paddingLeft: 10,
                paddingTop: 15,
                color: 'black',
                fontWeight: 'bold',
              }}>
              { main.temp_min + ' °C'}
            </Text>
          </View>



            <Text
              style={{
                fontSize: 18,
                paddingLeft: 95,
                color: 'black',
                fontWeight: 'bold',
              }}>
              {'Humidity : ' + main.humidity}
            </Text>
          </ImageBackground>
        )}

        <View></View>
      </View>



<View style={{flexDirection: 'row'}}>
      <View style={styles.bntMenu}>

      <Button style= {{color: 'black'}}>
          +   
      </Button>

      </View>

      <View style={styles.btnApps}>

        <Button >
          o   
      </Button>

      </View>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: 20,
    marginBottom: 150,
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: 'black',
  },

  form: {
    flexDirection: 'column',
    width: 300,
    height: 640,
  },

  inputSearch: {
    width: 200,
    marginTop: 20,
    marginLeft: 60,
    backgroundColor: '#f0e5e5',
    borderRadius: 30,
    padding: 3,
  },

  tinyLogo: {
    paddingBottom: 200,
    resizeMode: 'stretch',
    width: 300,
    height: 620,
  },

  bntMenu: {
    marginRight: 100,
    marginBottom: 20 
  },


});

export default App;
