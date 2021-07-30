import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledButton from './componet/StyledButton';
import CarsList from './componet/CarsList';
import CarItem from './componet/CarItem';
import Header from './componet/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <CarsList/>
      {/* <CarItem
        name = {"Model X"}
        tagline = {"Order online for"}
        taglineCTA = {"Touchless Delivery"}
        image = {require("./assets/images/ModelX.jpeg")}
        
      /> */}
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});
