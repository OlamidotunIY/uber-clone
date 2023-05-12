import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Maps from '../components/Maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapsScreen = () => {
  const stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Maps />
      </View>
      <View style={tw`h-1/2`}>
        <stack.Navigator>
          <stack.Screen 
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen 
            name="rideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </stack.Navigator>
      </View>
    </View>
  )
}

export default MapsScreen

const styles = StyleSheet.create({})