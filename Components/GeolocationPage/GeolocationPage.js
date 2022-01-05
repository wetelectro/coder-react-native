import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const Geolocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location);
    text = 'Latitud : ' + location.coords.latitude + ' , Longitud : ' + location.coords.longitude;
  }

  return (
    <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
        { location ? 
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0,
                    longitudeDelta: 0.0,
                    altitude: 10.0
                }}
            >
                <Marker 
                    key={Math.floor(Math.random * 10000)}
                    coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude}}
                    title={'Usted esta aqui'}
                    description={'Esta es tu posicion actual'}
                />
            </MapView> : <Text>'Cargando Mapa'</Text>
        }
    </View>
  );
}

export default Geolocation;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    paragraph: {
        textAlign: 'center',
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '90%',
        backgroundColor: '#f0f0f0',
        marginTop: 25
    }
})