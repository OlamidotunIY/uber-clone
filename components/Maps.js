import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Maps = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude:37.78825,     //origin.location.lat,
        longitude: -122.4324,   //origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
        {origin?.location && (
            <Marker 
                coordinate={{
                    latitude: 37.78825,      // latitude: origin.location.lat,
                    longitude: -122.4324,       // longitude: origin.location.lng,
                }}
                title="origin"
                description="origin location" //{origin.description}
                identifier="origin"
            />
        )}
    </MapView>
  );
};

export default Maps;

const styles = StyleSheet.create({});
