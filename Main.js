import React from 'react';
import { StyleSheet, View,Platform } from 'react-native';
import IosBrowser from './IosBrowser';
import AndBrowser from './AndBrowser';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';



export default class App extends React.Component {
   adFunction = async () => {
await AdMobInterstitial.setAdUnitID('ca-app-pub-9696043619835608/4870375693'); // Test ID, Replace with your-admob-unit-id
await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
await AdMobInterstitial.showAdAsync();
       
   }    
    
   componentDidMount() {
      this.adFunction(); 
      }
    
    
    
  render() {
    const iOSPlatform = <IosBrowser/>;
    const androidPlatform = <AndBrowser/>;

    return (
      <View style={styles.root}>
        <View style={styles.browser}>
          {Platform.OS === 'ios'? iOSPlatform : androidPlatform}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  browser: {
    flex: 1,
    flexDirection: 'row'
  },
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
});


