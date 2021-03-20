import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  Linking,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import WeatherInfo from '../../components/WeatherInfo';
import UnitsPicker from '../../components/UnitPicker';
import {colors} from '../../utils/index';
import {AntDesign} from 'react-native-vector-icons';
import WeatherDetails from '../../components/WeatherDetails';
import Geolocation from '@react-native-community/geolocation';
import Toolbar from '../../components/ToolBar';
import {useNavigation} from '@react-navigation/native';

// API key for weatherAPI
const WEATHER_API_kEY = '524b195aaee3652d675ef4c745658124';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const reloadIconName = 'ios-refresh';

export default function Wether() {
  const [errorMessage, setErrorMessage] = useState(null);
  // store the weather information in an state
  const [currentWeather, setCurrentWeather] = useState(null);
  /// create new state, at the begining we set as matric
  const [unitsSystem, setUnitSystem] = useState('metric');
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    getGeoLocationPositions();
  }, []);

  const getGeoLocationPositions = async () => {
    console.log('getGeoLocationPositions');
    const watchId = await Geolocation.watchPosition(
      (pos) => {
        console.log('langitude==>', pos);
        setError('');
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
        // console.log('langitude', pos);
        // console.log('longitude', longitude);
      },
      (e) => setError(e.message),
    );
    return () => Geolocation.clearWatch(watchId);
  };

  /// two level
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <Toolbar onPressNavigateBack={() => navigation.goBack(null)} />
        <View style={styles.main}>
          {/* <AntDesign
          onPress={load}
          name="reload1"
          size={24}
          style={styles.reloadIcon}
          color={colors.PRIMARY_COLOR}
        /> */}
          {/* <UnitsPicker
            unitsSystem={unitsSystem}
            setUnitsSystem={setUnitSystem}
          />
          <WeatherInfo currentWeather={currentWeather} /> */}
          {location && (
            <React.Fragment>
              <View style={styles.row}>
                <View style={[styles.detailBox, styles.third]}>
                  <Text style={styles.valueTitle}>Course</Text>
                  <Text style={[styles.detail, styles.largeDetail]}>
                    {location.course}
                  </Text>
                </View>

                <View style={[styles.detailBox, styles.third]}>
                  <Text style={styles.valueTitle}>Speed</Text>
                  <Text style={[styles.detail, styles.largeDetail]}>
                    {location.speed}
                  </Text>
                </View>

                <View style={[styles.detailBox, styles.third]}>
                  <Text style={styles.valueTitle}>Altitude</Text>
                  <Text style={[styles.detail, styles.largeDetail]}>
                    {location.altitude}
                  </Text>
                </View>
              </View>

              <View style={{alignItems: 'flex-start'}}>
                <View style={styles.row}>
                  <View style={[styles.detailBox, styles.half]}>
                    <Text style={styles.valueTitle}>Latitude</Text>
                    <Text style={styles.detail}>{location.latitude}</Text>
                  </View>

                  <View style={[styles.detailBox, styles.half]}>
                    <Text style={styles.valueTitle}>Longitude</Text>
                    <Text style={styles.detail}>{location.longitude}</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={[styles.detailBox, styles.half]}>
                    <Text style={styles.valueTitle}>Accuracy</Text>
                    <Text style={styles.detail}>{location.accuracy}</Text>
                  </View>

                  <View style={[styles.detailBox, styles.half]}>
                    <Text style={styles.valueTitle}>Altitude Accuracy</Text>
                    <Text style={styles.detail}>
                      {location.altitudeAccuracy}
                    </Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={[styles.detailBox, styles.half]}>
                    <Text style={styles.valueTitle}>Timestamp</Text>
                    <Text style={styles.detail}>{location.timestamp}</Text>
                  </View>

                  <View style={[styles.detailBox, styles.half]}>
                    <Text style={styles.valueTitle}>Date / Time</Text>
                    <Text style={styles.detail} />
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={[styles.detailBox, styles.full]}>
                    <Text style={styles.json}>{JSON.stringify(location)}</Text>
                  </View>
                </View>
              </View>
            </React.Fragment>
          )}
        </View>
        {/* <WeatherDetails currentWeather={currentWeather} /> */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  innerContainer: {
    marginVertical: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  repoLink: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0000CC',
    textDecorationLine: 'underline',
  },
});
